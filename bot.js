const telebot = require('telebot')
const fetch = require ('node-fetch')
const fs = require('fs')
const updateLogger = require('telegraf-update-logger');
const chalk = require('chalk')
const toMs = require('ms')
const util = require('util')
const afk = JSON.parse(fs.readFileSync('./afk.json'))
const nekos = require('nekos.life')
const neko = new nekos
const _level = JSON.parse(fs.readFileSync('./level.json'))
let mate = [];
const { 
y2mateA,
y2mateV
} = require('./y2mate.js')
const yts = require('yt-search')
const googleImage = require('g-i-s')
const bot = new telebot({token: 'TOKEN MU'})
const toJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const getBuffer = async(url, options) => {
try {
options ? options : {}
tesa = await fetch(url, options)
bre = await tesa.buffer()
return bre
} catch (e) {
console.log(`Error : ${e}`)
}
}
const addLevelingId = (senderId) => {
const obj = {jid: senderId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./level.json', JSON.stringify(_level))
}
const getLevelingXp = (senderId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === senderId) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}
const getLevelingLevel = (senderId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === senderId) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}

const getLevelingId = (senderId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === senderId) {
position = i
}
})
if (position !== false) {
return _level[position].jid
}
}
const addLevelXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
 if (_level[i].jid === sender) {
position = i
 }
})
if (position !== false) {
 _level[position].xp += amount
 fs.writeFileSync('./level.json', JSON.stringify(_level))
}
}
const addLevelingXp = (senderId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
 if (_level[i].jid === senderId) {
position = i
 }
})
if (position !== false) {
 _level[position].xp += amount
 fs.writeFileSync('./level.json', JSON.stringify(_level))
}
}
const addLevelingLevel = (senderId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === senderId) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./level.json', JSON.stringify(_level))
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const addMtk = (chatId, jawaban, expired, _db) => {
let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
_db.push(obi)
}
const getJawabanMtk = (chatId, _db) => {
let found = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === chatId) {
found = i
}
})
if (found !== false) {
return _db[found].jawaban
}
}
const isMtk = (chatId, _db) => {
let status = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === chatId) {
status = true
}
})
return status
}
const getMtkPosi = (chatId, _db) => {
let position = null
Object.keys(_db).forEach((i) => {
if (_db[i].id === chatId) {
position = i
}
})
if (position !== null) {
return position
}
}
const cekWaktuMtk = (_dir) => {
setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].expired) {
position = i
}
})
if (position !== null) {
bot.sendMessage(_dir[position].id, `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`)
_dir.splice(position, 1)
}
}, 1000)
}
bot.on(['photo','video','text','sticker','document','contact','audio','location'],async(iky) => {
const OwnerId = ['Rizky9788']
awalan = '/'
const reply = async(text) => {
iky.reply.text(text,{ asReply: true })}
const budy = iky.text || iky.caption || ''
 comm = budy.trim().split(" ").shift().toLowerCase()
cmd = false
        if (awalan != "" && budy.startsWith(awalan)) {
            cmd = true
            comm = budy.slice(1).trim().split(" ").shift().toLowerCase()
        }
const command = comm
const args = budy.trim().split(/ +/).slice(1)
const q = args.join(' ')
const from = iky.chat.id
const sender = iky.from.username
const isOwner = false
const isGroup = iky.chat.type.includes("group")
const groupName = isGroup ? iky.chat.title : ""
const isImage = iky.hasOwnProperty("photo")
const isVideo = iky.hasOwnProperty("video")
const isAudio = iky.hasOwnProperty("audio")
const isSticker = iky.hasOwnProperty("sticker")
const isContact = iky.hasOwnProperty("contact")
const isLocation = iky.hasOwnProperty("location")
const isDocument = iky.hasOwnProperty("document")
const isAnimation = iky.hasOwnProperty("animation")
const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
const Quoted = iky.reply_to_message || {}
const isQuotedImage = Quoted.hasOwnProperty("photo")
const isQuotedVideo = Quoted.hasOwnProperty("video")
const isQuotedAudio = Quoted.hasOwnProperty("audio")
const isQuotedSticker = Quoted.hasOwnProperty("sticker")
const isQuotedContact = Quoted.hasOwnProperty("contact")
const isQuotedLocation = Quoted.hasOwnProperty("location")
const isQuotedDocument = Quoted.hasOwnProperty("document")
const isQuotedAnimation = Quoted.hasOwnProperty("animation")
const isQuoted = iky.hasOwnProperty("reply_to_message")
const levelRole = getLevelingLevel(sender)
cekWaktuMtk(mate)
var role = 'Copper V'
if (levelRole >= 5) {
role = 'Copper IV'
} else if (levelRole >= 10) {
role = 'Copper III'
} else if (levelRole >= 15) {
role = 'Copper II'
} else if (levelRole >= 20) {
role = 'Copper I'
} else if (levelRole >= 25) {
role = 'Silver V'
} else if (levelRole >= 30) {
role = 'Silver IV'
} else if (levelRole >= 35) {
role = 'Silver III'
} else if (levelRole >= 40) {
role = 'Silver II'
} else if (levelRole >= 45) {
role = 'Silver I'
} else if (levelRole >= 50) {
role = 'Gold V'
} else if (levelRole >= 55) {
role = 'Gold IV'
} else if (levelRole >= 60) {
role = 'Gold III'
} else if (levelRole >= 65) {
role = 'Gold II'
} else if (levelRole >= 70) {
role = 'Gold I'
} else if (levelRole >= 75) {
role = 'Platinum V'
} else if (levelRole >= 80) {
role = 'Platinum IV'
} else if (levelRole >= 85) {
role = 'Platinum III'
} else if (levelRole >= 90) {
role = 'Platinum II'
} else if (levelRole >= 95) {
role = 'Platinum I'
} else if (levelRole > 100) {
role = 'Exterminator'
}
var file_id = ""
if (isQuoted) {
file_id = isQuotedImage ? iky.reply_to_message.photo[0].file_id : isQuotedVideo ? iky.reply_to_message.video[0].file_id : isQuotedAudio ? iky.reply_to_message.audio[0].file_id : isQuotedSticker ? iky.reply_to_message.sticker[0].file_id :
isQuotedDocument ? iky.reply_to_message.document[0].file_id :
isQuotedAnimation ? iky.reply_to_message.animation[0].file_id : ""
}
var mediaLink = file_id ? await bot.getFile(file_id) : ""
var limk = file_id ? mediaLink.fileLink : ""
var typeMessage = budy.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
else if (isAnimation) typeMessage = "Animation"
const isCmd = cmd
if (!isGroup && !isCmd) console.log(chalk.whiteBright("-"), chalk.cyanBright("[ PRIVATE ]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.whiteBright(sender))
if (isGroup && !isCmd) console.log(chalk.whiteBright("-"), chalk.cyanBright("[GROUP]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.whiteBright(sender), chalk.greenBright("in"), chalk.whiteBright(groupName))
if (!isGroup && isCmd) console.log(chalk.whiteBright("-"), chalk.cyanBright("[ COMMAND ]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.whiteBright(sender))
if (isGroup && isCmd) console.log(chalk.whiteBright("-"), chalk.cyanBright("[ COMMAND ]"), chalk.whiteBright(typeMessage), chalk.greenBright("from"), chalk.whiteBright(sender), chalk.greenBright("in"), chalk.whiteBright(groupName))
if (isMtk(from, mate)){
if (budy.toLowerCase().includes(getJawabanMtk(from, mate))){
var htgm = randomNomor(2000)
await reply(`Yeyy jawaban kamu benar\nJawaban : ${getJawabanMtk(from, mate)}\n\nIngin bermain lagi? kirim /mtk`)
mate.splice(getMtkPosi(from, mate), 1)
} 
}
if (isGroup && !isCmd) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 50
const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
 await reply(`Selamat Kamu Naik Level\nName: ${sender}\nLevel: ${getLevel} -> ${getLevelingLevel(sender)}\nXP: ${getLevelingXp(sender)} / ${requiredXp}\nRole: ${role}\n\nCongrats!!🥳🥳`)
}
} catch (err) {
console.error(err)
}
}
if (afk.includes(budy)) {
ini_txt = "Maaf sender yang anda tag sedang afk. "
reply(ini_txt)
return
}
if (afk.includes('@'+sender)) {
reply("Anda telah keluar dari mode afk.")
afs = afk.indexOf('@'+sender)
afk.splice(afs,1)
fs.writeFileSync("./afk.json", JSON.stringify(afk))
return
}
switch (command) {
case 'start':
reply(`Welcome bang kalo ada yang error lapor owner ya @Rizky9788
ketik /help untuk melihat menu`)
break
case 'pussy':
case 'lesbian':
case 'kuni':
case 'cumsluts':
case 'classic':
case 'boobs':
case 'anal':
case 'avatar':
case 'yuri':
case 'trap':
case 'tits':
case 'kitsune':
case 'keta':
case 'holo':
case 'hentai':
case 'futanari':
case 'femdom':
case 'feet':
case 'ero':
case 'spank':
case 'gasm':
case 'hentai':
try {
if(command == 'hentai') {
var coo = 'randomHentaiGif'
iky.reply.photo((await neko['nsfw'][coo]()).url, {caption: coo})
return 
}
var coo = command
iky.reply.photo((await neko['nsfw'][coo]()).url, {caption: coo})
} catch {
reply ('error')
}
break
case 'level':
const senderLevel = getLevelingLevel(sender)
 const rea = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
 const senderXp = `${getLevelingXp(sender)} / ${rea}`
 if (senderLevel === undefined && senderXp === undefined) return reply('kamu belum memiliki level')
 welpoep = `Level : ${senderLevel}
XP : ${senderXp} (${Math.floor(getLevelingXp(sender) - rea)} Xp Lagi untuk level up)
Role : ${role}`
reply(welpoep)
break
case 'tes':
console.log(file_id)
console.log(limk)
break
case 'help': case 'menu':
reply(`Telegram Bot

Others:
/playmp3 <judul lagu>
/playmp4 <judul video>
/image <nama foto>
/sticker <reply gambar>
/level
/mtk
/afk

Fitur Nsfw:
/pussy
/lesbian
/kuni
/cumsluts
/classic
/boobs
/anal
/avatar
/yuri
/trap
/tits
/kitsune
/keta
/holo
/hentai
/futanari
/femdom
/feet
/ero
/spank
/gasm
/hentai

By Rzky`)
break
case 'mtk':
if (isMtk(from, mate)) return reply(`Masih ada soal yang belum di selesaikan`)
const alp = Math.floor(Math.random() * 150)
 const akud = Math.floor(Math.random() * 150)
const msa = require('mathjs')
const bly = ['*','+','*','-','/']
const blw = bly[Math.floor(Math.random() * bly.length)]
const mash = alp+blw+akud
const jwb = mash
const jamet = `${msa.evaluate(jwb)}`
addMtk(from,jamet,70,mate)
console.log(`${jamet}\n${jamet}`)
reply(`「 MTK 」\n\nSoal\n${alp} ${blw} ${akud} = ....\nPenjelasan:\n * = kali\n / = bagi\n+ = tambah\n- = kurang\n\nWaktu: 70 detik`)
break
case 'image':
if (args.length < 1) return reply('Gambar apa?\ncontoh: /image loli')
re = await iky.reply.text('Mohon Tunggu',{ asReply: true })
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('[ ❗ ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan')}
else {
var gugIm = result
var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
iky.reply.photo(random,{caption: `Hasil Pencarian: ${q.toUpperCase()}`}).catch(e => reply('err'))
bot.deleteMessage(iky.chat.id, re.message_id)
}
}
break
case 'sticker':
if(!isQuotedImage) return reply('Reply gambar')
iky.reply.sticker(await getBuffer(limk))
break
case 'playmp3':
if (args.length < 1) return reply('lagu apa?\ncontoh: /playmp3 loli')
wait = await iky.reply.text('Mohon Tunggu',{ asReply: true })
res = await yts(`${q}`).catch(e => reply('Yang kamu Cari Tidak Ditemukan'))
if (res.all[0].duration.seconds > 600 ) return iky.reply.photo(res.all[0].thumbnail,{caption: `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${res.all[0].title}\n• *Durasi* : ${res.all[0].timestamp}\n\nMaaf, Durasi video melebihi 10 Menit\nLagu Tidak akan dikirim`})
 thumbInfo = `❒「 Youtube Play 」
├ Judul : ${res.all[0].title}
├ ID Video : ${res.all[0].videoId}
├ Diupload Pada : ${res.all[0].ago}
├ Views : ${res.all[0].views}
├ Durasi : ${res.all[0].timestamp}
├ Channel : ${res.all[0].author.name}
└ Link Channel : ${res.all[0].author.url}

Tunggu Proses Mengirim.....
`
re = await iky.reply.photo(res.all[0].image,{caption: thumbInfo})
tes = await y2mateA(res.all[0].url)
console.log(tes)
iky.reply.audio(await getBuffer(tes[0].link),{ fileName: res.all[0].title+'.mp3', asReply: true})
bot.deleteMessage(iky.chat.id, wait.message_id)
break
case '>':
if (!isOwner) return 
try {
reply(util.format(await eval(`;(async () => { ${q} })()`)))
} catch (e) {
reply(`${e}`)
}
break
case 'afk':
if(!isGroup) return reply('Perintah hanya dapat di gunakan dalam group')
afk.push('@'+sender)
fs.writeFileSync('./afk.json', JSON.stringify(afk))
console.log('@'+sender)
ini_txt = "Anda telah afk. "
reply(ini_txt)
break
case 'playmp4':
if (args.length < 1) return reply('video apa?\ncontoh: /playmp4 loli')
wait = await iky.reply.text('Mohon Tunggu',{ asReply: true })
res = await yts(`${q}`)
if (res.all[0].duration.seconds > 600 ) return iky.reply.photo(res.all[0].thumbnail,{caption: `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${res.all[0].title}\n• *Durasi* : ${res.all[0].timestamp}\n\nMaaf, Durasi video melebihi 10 Menit\nVideo Tidak akan dikirim`})
 thumbInfo = `❒「 Youtube Play 」
├ Judul : ${res.all[0].title}
├ ID Video : ${res.all[0].videoId}
├ Diupload Pada : ${res.all[0].ago}
├ Views : ${res.all[0].views}
├ Durasi : ${res.all[0].timestamp}
├ Channel : ${res.all[0].author.name}
└ Link Channel : ${res.all[0].author.url}

Tunggu Proses Mengirim.....
`
re = await iky.reply.photo(res.all[0].image,{caption: thumbInfo})
tes = await y2mateV(res.all[0].url)
console.log(tes)
iky.reply.video(await getBuffer(tes[0].link),{ fileName: res.all[0].title+'.mp4', asReply: true})
bot.deleteMessage(iky.chat.id, wait.message_id)
break
}
})
bot.start()