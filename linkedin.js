const puppeteer = require('puppeteer');
var cheerio = require('cheerio');

async function consulta() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://br.linkedin.com/jobs/search?keywords=Desenvolvedor&location=Recife%20e%20Regi%C3%A3o%2C%20Brasil&locationId=br%3A6286&pageNum=0&position=1');

  let html = await page.content();
  var $ = cheerio.load(html);

  let lista = [];

  $('.jobs-search-result-item').each(function (index, element) {
    let obj = {};
    obj.titulo = $(element).find('.listed-job-posting__title').text();
    obj.empresa = $(element).find('.listed-job-posting__company').text();
    obj.local = $(element).find('.listed-job-posting__location').text();
    obj.tempo = $(element).find('.posted-time-ago__text').text();
    obj.resumo = $(element).find('.listed-job-posting__description').text();
    obj.url = $(element).find('.listed-job-posting--is-link').attr('href');
    lista.push(obj);
  });
  browser.close();
  return lista;

}

module.exports = {
  consulta
}