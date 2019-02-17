var indeed = require('./indeed');
var linkedin = require('./linkedin');
var arquivo = require('./file');

indeed.consulta().then((lista) => {
    console.log(lista.length);
    arquivo.criarJson('indeed', lista);
    arquivo.criarTxt('indeed', lista);

});

linkedin.consulta().then((list) => {
    console.log(list.length);
    arquivo.criarJson('linkedin', list);
    arquivo.criarTxt('linkedin', list);
});