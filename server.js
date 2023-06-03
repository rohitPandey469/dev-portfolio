const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use("/", router);

const port = 5000;
app.listen(port, () => {
  console.log("Server running on port:", port);
});

const contactEmail = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,

    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((err) => {
  if (err) console.log("Error in verification: ", err);
  else console.log("Ready to send...Wohoo!");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USERNAME,
    subject: "Contact Form Submission from my latest React Portfolio",
    html: `
            <p>Name: ${name}</p>
            <p>Email:${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message:${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
