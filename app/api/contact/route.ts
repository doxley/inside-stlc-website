import { Resend } from "resend";

// Route handler: receives the contact form and emails it via Resend.
// Configure these in the environment (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY    – your Resend API key (required)
//   CONTACT_TO_EMAIL  – where enquiries are delivered (default below)
//   CONTACT_FROM_EMAIL– verified sender, or onboarding@resend.dev until a domain is verified
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "david.oxley@insidestlc.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Inside STLC <onboarding@resend.dev>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users leave this empty; bots fill it.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const budget = String(data.budget ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please complete name, email and message." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New QA enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        budget ? `Budget / timeline: ${budget}` : null,
        "",
        message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
      html: `
        <h2 style="margin:0 0 12px">New QA enquiry</h2>
        <p style="margin:4px 0"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p style="margin:4px 0"><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${budget ? `<p style="margin:4px 0"><strong>Budget / timeline:</strong> ${escapeHtml(budget)}</p>` : ""}
        <p style="margin:12px 0 4px"><strong>Message:</strong></p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Could not send message." }, { status: 502 });
  }
}
