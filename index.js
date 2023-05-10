import axios from "axios";

function Uptime({ isUrl = [], isDuration = 60000, log = false }) {
  if (!lisUrl.length === 0) throw new Error("Please enter url!");
  setInterval(() => {
    isUrl.forEach((url) => {
      axios.get(url).then(() => {
        if (log) console.log(`${url} is up.`);
      }).catch(() => {
        if (log) console.log(`${url} is down.`);
      });
    });
  }, isDuration);
}

export { Uptime };
export default Uptime;