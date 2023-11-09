const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "please fill all the fields" });
  }

  //step 1 - create a transporter object
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "hirevivek12@gmail.com",
      pass: "wgvtswfpeptftcuk",
    },
  });
  //step - 2 we have to set mail in options object
  let mailOptions = {
    from: data.email,
    to: "hirevivek12@gmail.com",
    subject: `message from ${data.name}`,
    html: `
                <h3>Informations</h3>
                <ul>
                    <li>Name: ${data.name}</li>
                    <li>Email: ${data.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${data.message}</p>
            `,
  };
  //step - 3 Deliver the message with the send mail method
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the fields" });
      res.status(200).json({ msg: "Thank you for contacting Vivek!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

module.exports = router;
