const fs = require('fs');
const path = require('path');
const dirResultado = './resultado/'; //path.resolve(__dirname) + '/../resultado/';

function criarJson(arquivo, lista) {
  return new Promise((resolve, reject) => {
    let texto = JSON.stringify(
      {
        lista: lista,
      },
      null,
      '\t'
    );

    fs.writeFile(dirResultado + arquivo + '.json', texto, (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('Salvo json');
      resolve('Salvo');
    });
  });
}

function criarTxt(arquivo, lista) {
  return new Promise((resolve, reject) => {
    let total = lista.length;
    let texto = `\nTotal de vagas - ${total}`;
    lista.map((item, index) => {
      index++;
      texto += `\n\n${index} - ${item.titulo}\n${item.empresa}\n${item.local}\n${item.tempo}\n${item.resumo}\n${item.url}`;
    });

    fs.writeFile(dirResultado + arquivo + '.txt', texto, (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('Salvo txt');
      resolve('Salvo');
    });
  });
}

module.exports = {
  criarJson,
  criarTxt,
};
