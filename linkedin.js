const puppeteer = require('puppeteer');
var cheerio = require('cheerio');

async function consulta() {
  const url =
    'https://br.linkedin.com/jobs/search?keywords=desenvolvedor&location=Recife%20e%20Regi%C3%A3o&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let html = await page.content();
  var $ = cheerio.load(html);

  let lista = [];

  $('.result-card').each(function(index, element) {
    let obj = {};
    obj.titulo = $(element)
      .find('.screen-reader-text')
      .text();
    obj.empresa = $(element)
      .find('.result-card__subtitle')
      .text();
    obj.local = $(element)
      .find('.job-result-card__location')
      .text();
    obj.tempo = $(element)
      .find('.job-result-card__listdate')
      .text();
    obj.resumo = $(element)
      .find('.job-result-card__snippet')
      .text();
    obj.url = $(element)
      .find('.result-card__full-card-link')
      .attr('href');
    lista.push(obj);
  });
  browser.close();
  return lista;
}

module.exports = {
  consulta
};
