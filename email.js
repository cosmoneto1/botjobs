const nodemailer = require('nodemailer');

async function main(html, emails) {
  let account = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtps.bol.com.br',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'tbot@bol.com.br',
      pass: 'Zbot1000%'
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"BotJob 👻" <tbot@bol.com.br>',
    to: emails,
    subject: 'BotJob Vagas ',
    text: 'BotJob',
    html: html
  };

  let info = await transporter.sendMail(mailOptions);

  // console.log("Message sent: %s", info.messageId);

  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

function parseHtml(lista) {
  let list = '';
  lista.map(item => {
    let template = `
           <p><b>${item.titulo}</b></p>
           <p>${item.empresa} - ${item.local} - ${item.tempo}</p>           
           <p>${item.resumo}</p>
           <p> <a href="${item.url}"> Acessar vaga </a> </p>  
           <hr />         
        `;
    list += template;
  });
  return list;
}

function send(listaVagas, email) {
  let newlist = parseHtml(listaVagas);
  main(newlist, email).then(() => {
    console.log('E-mail enviado.');
  });
}

module.exports = {
  send
};
