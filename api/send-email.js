
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      phone,
      company,
      website,
      email,
      product,
      quantity,
      deliveryTime,
      message,
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 🔴 REQUIRED for Titan (465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 🔍 Verify connection (CRITICAL)
    await transporter.verify();

    const mailOptions = {
      from: `"VEL WORLD Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Digital Enquiry – VelWorld",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Website:</strong> ${website || "-"}</p>
        <p><strong>Product:</strong> ${product || "-"}</p>
        <p><strong>Quantity:</strong> ${quantity || "-"}</p>
        <p><strong>Delivery Time:</strong> ${deliveryTime || "-"}</p>
        <p><strong>Message:</strong><br/>${message || "-"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
}
