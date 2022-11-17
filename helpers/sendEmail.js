import nodemailer from "nodemailer";
import "dotenv/config";
export const sendEmail = async (mydata) => {
  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "nigeldias27@outlook.com",
      pass: `${process.env.EMAIL_PASS}`,
    },
  });
  // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: '"PESEvents " <nigeldias27@outlook.com>', // sender address (who sends)
    to: "nigeldias27@gmail.com", // list of receivers (who receives)
    subject: "Verification needed ", // Subject line
    text: mydata, // plaintext body
    // html: data, // html body
  };
  console.log("Before sending email");
  // send mail with defined transport object
  await transporter.sendMail(mailOptions);
};
