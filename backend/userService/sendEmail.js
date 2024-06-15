const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req,res) => {
  const { name, email, textarea } = req.body;
 try {
     const transporter = nodemailer.createTransport({
       service: "gmail",
       auth: {
         user: "lukabakuradze39@gmail.com",
         pass: 'nomzlhdqzjxxhlms',
       },
     });
   
     const mailOptions = {
       from: 'lukabakurade39@gmail.com',
       to: email,
       subject: "Thank you for contacting us",
       html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
          <img src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/416841832_893621152769709_750835283606735095_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEd4KCPqAenl6Hu9b5cp1ICwzbgnXdpwaPDNuCdd2nBo3NtpGEqd9rDE52e3pxYHpysFmwsIG7g3Dcz-mMjmRty&_nc_ohc=HdVZjXoCKfoQ7kNvgFEzR9a&_nc_ht=scontent.ftbs5-3.fna&oh=00_AYB6SkxzugX5c_ioKSs-kmrxCo7NsLvGA3hyy2muhLTZgQ&oe=6673C3D7" alt="Logo" style="max-width: 250px; margin-bottom: 20px;">
          <h2>Thank you for contacting us, one of our team members will replay as soon as possible. </h2>
          <p style="margin-top: 20px;">If you did not sent this, please ignore this email</p>
        </div>
      </div>`,
     };
   
     let info = await transporter.sendMail(mailOptions);
       console.log("Email sent: ", info.response);
       res.status(200).send("Email sent successfully");
     } catch (error) {
       console.error("Error occurred:", error);
       res.status(500).send("Failed to send email");
     }
}
module.exports = sendEmail;
