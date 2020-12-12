const express = require('express');
//const path =require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const nodemailer = require('nodemailer');
const PORT = 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyParser.json());

 app.use('/api' , api);

app.get('/' , (req,res) => {
    res.send('Hello From Server')
});

app.listen(PORT,function(){
    console.log('Server is up and running on localhost:'+PORT)
})

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
      console.log('Mail Sent');
      res.send(info);
    });
});

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'vktrendingtechnology@gmail.com',
        pass: 'kalyanprime'
      }
    });
  
    let mailOptions = {
      from: 'vktrendingtechnology@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Welcome to E-Emporium 👻", // Subject line
      html: `
      <h4>Thanks for joining us</h4><br>
      <h4>Happy Shopping ! </h4><br>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }