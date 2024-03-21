const {request, response} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp=response) => {
    let body = req.body;
    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth:{
            user: 'nicolasab1996@gmail.com',
            pass: 'oathxphpcfzpflav'
        }
    });

    const opciones = {
        from: body.email,
        subject: 'Me han Contactado WOW',
        to: 'nicolasab1996@gmail.com',
        html: `Hola Yo, oye te escribieron otra vez, acabo de recibir un mensaje de ${body.nombre} desde tu portfolio, te dejare el mensaje: <p></p> ${body.mensaje} <p></p><br> Atte: El Portfolio Parlante`
    };
    const opciones_regreso = {
        from: 'nicolasab1996@gmail.com',
        subject: 'Nicolás Ávila 😄',
        to: body.email,
        html: `Hola ${body.nombre} 👋🏻, un gusto en conocerte <p></p> veo que estás interesado en contruir proyectos geniales y bkns 😃, te prometo que la pasaremos super bien desarrollando juntos 💻, me pondré en contacto contigo a la brevedad para coordinar una reunión y discutir acerca del proyecto 😎 con mas detalle. <p></p>
        <p></p><br> Saludos y nos vemos 😁 <p></p> Nicolás Ávila Biskupovic <br> Android Developer <br> (+56) 9 5203 3145 <br> https://www.linkedin.com/in/nrab/ `
    };

    config.sendMail(opciones, (error, result)=>{
        if (error) return resp.json({ok:false, msg:error});
        return resp.json({
            ok: true,
            msg:result
        });
    });

    config.sendMail(opciones_regreso, (error, result) => {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        });
    });
}

module.exports = {
    envioCorreo
}