const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geisilaportifolio@gmail.com', 
        pass: 'e y o g d d o d u j k a c k m y',           
    },
});

// Rota de envio de e-mail
app.post('/submit', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: 'geisilaportifolio@gmail.com',
        subject: `Nova mensagem de ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Mensagem enviada com sucesso!');
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Adiciona a variável viewCount para rastrear visualizações
let viewCount = 0;

app.get('/views', (req, res) => {
    viewCount++;
    res.json({ views: viewCount });
});


