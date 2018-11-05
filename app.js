//const CONFIG = require("./config.json");
const fs = require("fs");
const rp = require("request-promise");
const cheerio = require("cheerio");

const input = {
  uri: `https://au.movember.com/mospace/13433262`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(input)
  .then(($) => {
    scrape = $('.mospace-heroarea--donations-target-amount-number').text();
    donated = scrape.replace(/\s\s+/g, ' ');
    console.log(donated);
    fs.writeFile('./donated.txt', `Movember funds raised - ${donated}/ $250`, (err) => {
      if (err) throw err;
      console.log(`Text of "${donated}" written to file`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
