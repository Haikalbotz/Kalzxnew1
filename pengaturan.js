require("./module.js")

// BAILEYS VERSION UPDATE
global.version = "2, 3000, 1015901307"

// PENGATURAN OWNER
global.owner = "6289528157038"
global.ownername = "*HAIKAL*"

// PENGATURAN BOT
global.botname = "`X-Code`" 
global.botname2 = "`X-Code`"
global.foother = "© X-Code 2024"
global.packname = "Create By X-code"
global.author = "HAIKAL"
global.prefa = ['','!','.',',','🐤','🗿']
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false
global.delaypushkontak = 5500
global.delayjpm = 5500

// PENGATURAN ID SALURAN / CHANNEL WHATSAPP KAMU
global.idsaluran = "120363284117057548@newsletter"
global.linksaluran = ""

// PENGATURAN LINK GROUP WHATSAPP KAMU
global.linkgc = 'https://chat.whatsapp.com/DvkLPjRZ9ihIkXDDHrkDr3'

// PENGATURAN SOSIAL MEDIA KAMU, UNTUK INTEGRASI KE AKUN SOSMED KAMU
global.linkyt = 'https://www.youtube.com/@HAIKALAJA12'
global.linktele = "https://t.me/"
global.sosig = "kall_y07"
globa.sostt = "mtirmi.official"

// PENGATURAN INTEGRASI PANEL MU
global.egg = "15"
global.loc = "1"
global.domain = "https://dwiz-host.rkhosttting.xyz"
global.apikey2 = 'ptla_TwOJUXKsiPnx8NsRKye1kOT0fiuompnv0YM1UNQzvTX' // Isi Apikey Plta KAMU
global.capikey2 = 'ptlc_nDrKCnIdXUV3xjmzdQcv2hYV7OfgG3Ht2glCijNft2h' // Isi Apikey Pltc KAMU

// PENGATURAN TEXT REPLY
global.msg = {
"error": "Error : Mungkin ada type error data, ataupun typo pada code, developer sedang mengecek bagian yang error",
"done": "Berhasil ✔️", 
"wait": "`X-Code Sedang memproses perintah...`",
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": " Fitur Ini Hanya Di Peruntukan Admin Grup!", 
"adminbot": "Bot harus di jadikan admin terlebih dahulu", 
"owner": "*Fitur Ini Hanya Di Peruntukan Owner Bot!", 
"developer": "Fitur Ini Hanya Di Peruntukan Developer"
}

// PLISSS JANGAN UTAK ATIK CODE DI BAWAH, NANTI ERROR
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)})