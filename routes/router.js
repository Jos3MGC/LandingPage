const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');


router.get('/', (req, res) =>{
    res.render('index', {alert:false})
})

router.post('/send-email', async(req, res)=>{
    const {clientName, email, subject, message} = req.body;
    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Usuario: ${clientName}</li>
        <li>Correo: ${email}</li>
        <li>Asunto: ${subject}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth:{
            user: 'jesus.ormi.2001@gmail.com',
            pass: 'yhdhsonadadceojw'
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Our Code World " <jesus.ormi.2001@gmail.com>', // sender address (who sends)
        to: 'jesus.ormi.2001@gmail.com',
        subject: 'Website Contact Form',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);
    
    res.redirect('/')
})


module.exports = router