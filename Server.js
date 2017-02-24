var express = require('express');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('util');
var cors = require('cors');
var smptp = require('smtp-server');
var rand, host, link; //verify code
//var smtpTransport1 = require('./nodemailer/lib/smtp-transport');
var smtpTransport = require('nodemailer-smtp-transport');
console.log("hahaha");
var transporter = nodemailer.createTransport(smtpTransport({
    service: "Yahoo",
    //host: "smtp.gmail.com",
    // port: 465,
    //secure: true,
    auth: {
        user: "sheenamnarula1993@yahoo.com",
        pass: "babydoll1993"
    }
}));
//var nodemailer = require("nodemailer");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.get('/', function(req, res) {
    console.log("Sending the file ", path.resolve(__dirname, 'app', 'app.component.html'));
    res.sendFile(path.resolve(__dirname, 'src', 'app', 'app.component.html'));
});

app.post('/', function(req, res) {
    var object1 = req.body.json;
    var jsonobj = JSON.parse(object1);
    //------------verify-----------
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/verify?id=" + rand;
    console.log(link);
    //----------verify------------------
    console.log(jsonobj.to + "json object");
    var mailOptions = {
        from: "sheenamnarula1993@yahoo.com",
        to: jsonobj.to,
        subject: jsonobj.subject,

        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log(mailOptions.to);
    console.log(mailOptions.from);
    console.log(mailOptions.subject);
    console.log(mailOptions.text);
    // res.send(mailOptions);
    console.log("sending1")
    mailOptions1 = mailOptions;
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("sending erroer part ", error);
            res.end("error");
        } else {
            console.log("sendiiingggggggg")
            console.log("Message sent: " + response.message);
            console.log("hahaha");
            res.end("sent");
        }
    });

});

app.get('/verify', function(req, res) {
    console.log(req.protocol + ":/" + req.get('host'));
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        console.log("Domain is matched. Information is from Authentic email");
        if (req.query.id == rand) {
            console.log("email is verified");
            res.redirect("http://localhost:4200/candidateRegister");
            res.end("<h1>Email " + mailOptions1.to + " is been Successfully verified");
        } else {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    } else {
        res.end("<h1>Request is from unknown source");
    }
});

app.listen(3000, function() {
    console.log("Express Started on Port 3000");
});