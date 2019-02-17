var fs = require('fs');

function criarJson(arquivo, lista) {
    return new Promise((resolve, reject) => {

        let texto = JSON.stringify({
            'lista': lista
        });

        fs.writeFile(arquivo + '.json', texto, (err) => {
            if (err) {
                reject(err);
            }
            console.log('Salvo');
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
            texto += `\n\n${index} - ${item.titulo}\n${item.empresa}\n${item.local}\n${item.tempo}\n${item.resumo}`;
        });

        fs.writeFile(arquivo + '.txt', texto, (err) => {
            if (err) {
                reject(err);
            }
            console.log('Salvo');
            resolve('Salvo');
        });
    });
}



module.exports = {
    criarJson,
    criarTxt
};