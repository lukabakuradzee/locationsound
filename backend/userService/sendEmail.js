const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
  const { name, email, textarea } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lukabakuradze39@gmail.com",
        pass: process.env.GMAIL_KEY,
      },
    });

    const CustomerMailOptions = {
      from: "lukabakurade39@gmail.com",
      to: email,
      cc: "lukabakuradze39@gmail.com",
      subject: "Thank you for contacting us",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: black;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border-radius: 5px; color: #f0eb68">
          <img src="https://i.imgur.com/yNbUvfl.png" alt="Logo" style="max-width: 400px; margin-bottom: 15px;">
          <h2>Thank you for contacting us, one of our team members will replay as soon as possible. </h2>
          <p style="margin-top: 20px;">If you did not sent this, please ignore this email</p>
        </div>
      </div>`,
    };

    const adminMailOptions = {
      from: "lukabakuradze39@gmail.com",
      to: "lukabakuradze39@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: black;">
          <div style="max-width: 600px; margin: auto; padding: 20px; border-radius: 5px; color: #f0eb68">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Message:</strong> ${textarea}</p>
          </div>
        </div>`,
    };

    await transporter.sendMail(CustomerMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Failed to send email");
  }
};
module.exports = sendEmail;
