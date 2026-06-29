import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOrderEmail(
  email: string,
  orderId: string
) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "NatureCart Order Confirmed 🌿",
    html: `
      <h2>Thank you for your order!</h2>
      <p>Your order has been placed successfully.</p>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p>We'll notify you when it ships.</p>
    `,
  });
}

export async function sendStatusEmail(
  email: string,
  status: string
) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Order ${status}`,
    html: `
      <h2>Order Update</h2>
      <p>Your order status is now:</p>
      <h3>${status}</h3>
    `,
  });
}