const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host : "smtp.mailtrap.io",
    auth:{
        user : "0f78cf11d7821f",
        pass : "8de396a4fb22a5"
    },
    port: 465,
    secure: false
})

const message = {
    from : "jchy@jchy.com",
    to : "jaswant@gmail.com",
    subject : "hello",
    text : "hello world"
}

// mailtrap
app.use(cors());

app.get("/", (req, res) => {
    transporter.sendMail(message,err => {
        if(err){
            res.send(err);
        }
        res.status(201).send("successfully send email");
    })
    res.status(200).send("Success");
})

app.listen("5002", ()=> {
    console.log("listening on port 5000");
})