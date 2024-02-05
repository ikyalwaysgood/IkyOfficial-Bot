/*
* Information
* Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Contact creator / developer: 0882 9633 9447 (WhatsApp), contact@danitechno.com (Email)
* Note: Mau beli script no enc? silahkan hubungi developer via WhatsApp/Email
*/

/* Thanks
* Dani Techno. - FullStack Engineer (Creator / Developer)
* daniapi.my.id / api.danitechno.com (API provider)
* @danitech/scraper (Scraper provider)
* @whiskeysockets/baileys (Library "Baileys" provider)
* @adiwajshing/keyed-db
* @hapi/boom
* pino
* qrcode-terminal
* chalk
* mongoose
* node-cron
* nodemon
*/

module.exports = {
  session_folder_name: '.session',
  prefix: '.',
  image_url: 'https://cdn.btch.bz/file/06e8d93a5831ce577b93e.jpg',
  audio_url: 'https://file.btch.bz/file/fi5y8fhhrbfyn4ok1ptk.mp3',
  public_mode: true,
  auto_read: true,
  mongodb_uri: 'mongodb+srv://ikyalwaysgood16:t7iuCojOAwxOj0t7@cluster0.89mssax.mongodb.net/?retryWrites=true&w=majority', // Register here: https://mongodb.com/#sign-up
  api: {
    url: 'https://api.danitechno.com',
    key: 'danikey' // Register here: https://daniapi.my.id/#sign-up
  },
  bot: {
    name: 'Kιɳα Bσƚ'
  },
  owner: {
    name: ["Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ"],
    number: ["6285794908894"]
  },
  daily_limit: {
    free: 100,
    premium: Infinity
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Jakarta'
  }
}