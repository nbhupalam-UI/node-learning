const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
  to: "nagapradeep.bhupalam@gmail.com",
  from: "bnp143nb@gmail.com",
  subject: "This is my first email",
  text: "I hope this one actually get to you!!!",
});
