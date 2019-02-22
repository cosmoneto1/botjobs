var indeed = require('./indeed');
var linkedin = require('./linkedin');
var arquivo = require('./file');
var emailJob = require('./email');
var email = 'teste@hgjh.com';

indeed.consulta().then((lista) => {
    console.log(lista.length);
    emailJob.send(lista, email);
    arquivo.criarJson('indeed', lista);
    arquivo.criarTxt('indeed', lista);
});

linkedin.consulta().then((list) => {
    console.log(list.length);
    emailJob.send(list, email);
    arquivo.criarJson('linkedin', list);
    arquivo.criarTxt('linkedin', list);
});