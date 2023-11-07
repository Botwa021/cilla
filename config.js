
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6287848290396']  
global.mods = ['6287848290396'] 
global.prems = ['6288233832771']
global.nameowner = 'cilaa'
global.numberowner = '6287848290396' 
global.mail = 'cilacantik@gmail.com' 
global.dana = '088233832771'
global.pulsa = '088233832771'
global.gopay = '088233832771'
global.namebot = 'ℓααcηxz · вσт'
global.gc = 'https://chat.whatsapp.com/HpgPvbZ4GwjJcHwXIF7l7E'
global.web = 'https://chat.whatsapp.com/HpgPvbZ4GwjJcHwXIF7l7E'
global.instagram = 'https://instagram.com/cilaaacnxz?igshid=cW9sZ2JudGVsaTM3'
global.wm = '© ℓααcηxz · вσт'
global.watermark = wm
global.wm2 = '© ℓααcηxz · вσт'
global.wm3 = '© ℓααcηxz · вσт'
global.wm4 = 'made witch'
global.wait = '_*Tunggu...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.stiker_wait = '*Stiker sedang dibuat...*'
global.packname = 'made with'
global.author = 'ℓααcηxz · вσт'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/bfd54d9f55843341d7d30.jpg'

//===> Apikey
global.lann = 'TTSrFcKx' //isi apikey mu https://api.betabotz.org
global.btc = 'NWvaNDcP'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'TTSrFcKx' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
