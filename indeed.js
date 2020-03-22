var request = require('request');
var cheerio = require('cheerio');

function consulta(limite) {
  var options = {
    method: 'GET',
    url: 'https://www.indeed.com.br/empregos',
    qs: {
      q: 'java',
      l: 'pernambuco',
      sort: 'date',
      limit: limite || 30
    },
    headers: {
      'cache-control': 'no-cache'
    }
  };

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, html) {
      if (error) {
        reject(error);
        return;
      }
      const $ = cheerio.load(html);
      let lista = [];
      $('#resultsCol > .row').each(function(index, element) {
        let obj = {};
        obj.titulo = $(element)
          .find('.title > a')
          .text()
          .trim();
        obj.empresa = $(element)
          .find('.company')
          .text()
          .trim();
        obj.local = $(element)
          .find('.location')
          .text();
        obj.tempo = $(element)
          .find('.date')
          .text();
        obj.resumo = $(element)
          .find('.summary')
          .text()
          .trim();
        obj.url =
          'https://www.indeed.com.br' +
          $(element)
            .find('.turnstileLink')
            .attr('href');

        lista.push(obj);
      });
      resolve(lista);
    });
  });
}

module.exports = {
  consulta
};
