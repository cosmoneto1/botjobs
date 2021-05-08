const indeed = require('./indeed');
const linkedin = require('./linkedin');
const arquivo = require('./file');
const emailJob = require('./email');
const email = 'teste@mail.com';

indeed.consulta().then((lista) => {
  console.log(lista.length);
  // emailJob.send(lista, email);
  arquivo.criarJson('indeed', lista);
  arquivo.criarTxt('indeed', lista);
});

linkedin.consulta().then((list) => {
  console.log(list.length);
  // emailJob.send(list, email);
  arquivo.criarJson('linkedin', list);
  arquivo.criarTxt('linkedin', list);
});
