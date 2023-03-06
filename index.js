const axios = require("axios");

module.exports = {
  Uptime,
}

function Uptime(isUrl, isDuration) {
  if (!isUrl) throw new Error("Please enter url!");
  setInterval(() => {
    isUrl.forEach((url) => {
      axios.get(url).then(console.log(`Success running on: ${url}`)).catch(e => void 0);
    });
  }, isDuration ? isDuration: 100*1000);
}