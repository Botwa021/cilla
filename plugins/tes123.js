let handler = async (m, { conn }) => {
    let wm = global.wm
    let txt = `*_Aktif Kak ada yang saya bisa bantu*_\n_*ketik .menu untuk mengakses bot_*`.trim()
let sgc = global.gc
conn.sendMessage(m.chat, {
text: txt,
contextInfo: { forwardingScore: 9999, isForwarded: true, 
externalAdReply: {
title: ucapan,
body: wm,
thumbnailUrl: img,
sourceUrl: instagram,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m })
}
handler.help = ['mode']
handler.tags = ['main']

handler.customPrefix = /^(tes|bot|p|test)$/i
handler.command = new RegExp
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
    }
