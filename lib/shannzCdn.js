
DANTINA WHATSAPP SIMPLE BOT

ZIMBOT



─────────────────────────────────────────────────────────────────────────────────────── 
created by dantina🕵
contact me 447423142720,263773219130♻️
© Copy coder alert ⚠
*/



const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }
