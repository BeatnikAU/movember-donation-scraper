const CONFIG = require("./config.json");
const fs = require("fs");
const rp = require("request-promise");
const cheerio = require("cheerio");

const input = {
  uri: CONFIG.url,
  transform: function (body) {
    return cheerio.load(body);
  }
};

var update = () => {
  rp(input)
    .then(($) => {
      scrape = $('.mospace-heroarea--donations-target-amount-number').text();
      donated = scrape.replace(/\s\s+/g, '');
      console.log(donated);
      fs.writeFile('./donated.txt', CONFIG.prefix + donated + CONFIG.suffix, (err) => {
        if (err) throw err;
        console.log(`Text of "${donated}" written to file`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

update();

setInterval(update, CONFIG.refresh * 60000);
