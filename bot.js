//Base By Rizky Fadilah
//creator/author Rizky Fadilah
//thanks to ...gada yang bantu wkwk

/**********Tq Udah make************/

const { Telegraf } = require('telegraf')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const os = require('os')
const speed = require(`performance-now`);
const RA = require('ra-api')
const chalk = require('chalk')
const spin = require('spinnies')
const cfonts = require('cfonts')
const fs = require('fs')
const Bot_Token = 'TOKEN BOT'//Example '18009294047:AAhhsEMxPgAGoKaoJs21gW92B0KOHOi0kdksJs'
const util = require('util')
const transllate = require('@vitalets/google-translate-api')
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const updateLogger = require('telegraf-update-logger');
const banner = cfonts.render(('Rizky Fadilah|Bot Telegram'), {
font: 'chrome',
color: 'candy',
align: 'center',
gradient: ["red","green"],
lineHeight: 3
});
const success = (id, text) => {
spins.succeed(id, {text: text})
}
const spinner = { 
"interval": 120,
"frames": [
"🕐",
"🕑",
"🕒",
"🕓",
"🕔",
"🕕",
"🕖",
"🕗",
"🕘",
"🕙",
"🕚",
"🕛"
]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
const Sukses = (id, text) => {
spins.add(id, {text: text})
}
const { 
y2mateA,
y2mateV
} = require('./lib/y2mate.js')
const yts = require('yt-search')
const toJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
// console.log(json)
resolve(json)
})
.catch((err) => {
reject(err)
})
})
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function range(start, stop, step) {
 if (typeof stop == 'undefined') {
// one param defined
stop = start;
start = 0;
 }
 if (typeof step == 'undefined') {
step = 1;
 }
 if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
return [];
 }
 var result = [];
 for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
result.push(i);
 }
 return result;
}
const argsGet = async(iky) => {
try {
args = iky.message.text
args = args.split(" ")
args.shift()
return args
} catch { return [] }
}
const LinkGet = async(file_id) => { try { return (await bot.telegram.getFileLink(file_id)).href } catch { throw "Error while get url" } }
const GetFotoProfile = async(id) => {
 try {
is = "https://telegra.ph/file/4ab397f49255b2a79f687.jpg"
if (String(id).startsWith("-100")) {
var pp = await bot.telegram.getChat(id)
if (!pp.hasOwnProperty("photo")) return is
ids = pp.photo.big_file_id
} else {
var pp = await bot.telegram.getUserProfilePhotos(id)
if (pp.total_count == 0) return is
ids = pp.photos[0][2].file_id
}
return await LinkGet(ids)
 } catch (e) { throw e }
}
const pushname = (ctx) => {
 try {
user = ctx
last_name = user["last_name"] || ""
full_name = user.first_name + " " + last_name
user["full_name"] = full_name.trim()
return user
 } catch (e) { throw e }
}
const d = new Date(new Date + 3600000)
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
 const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
 const week = d.toLocaleDateString(locale, { weekday: 'long' })
 const date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const waktu = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
if (Bot_Token == "TOKEN BOT") {
console.log(chalk.cyanBright("################### TOKEN BOT KOSONG ###################"))
return console.log(chalk.cyanBright("################### TOKEN BOT KOSONG ###################"))
}
const bot = new Telegraf(Bot_Token)
bot.on("new_chat_members", async(iky) => {
 var message = iky.message
 var groupname = message.chat.title
 var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
 for (x of message.new_chat_members) {
var pp_user = await GetFotoProfile(x.id)
var full_name = pushname(x).full_name
console.log(chalk.whiteBright("Rizky Bot"), chalk.cyanBright("[JOINS]"), chalk.whiteBright(full_name), chalk.greenBright("join in"), chalk.whiteBright(groupname))
await iky.replyWithPhoto({ url: pp_user},{caption: `Selamat datang ${full_name}
di group ${groupname}`, parse_mode: "Markdown" })
 }
})
bot.on("left_chat_member", async(iky) => {
 var message = iky.message
 var groupname = message.chat.title
 var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
 var pp_user = await GetFotoProfile(message.left_chat_member.id)
 var full_name = pushname(message.left_chat_member).full_name
 console.log(chalk.whiteBright("Rizky Bot"), chalk.cyanBright("[LEAVE]"), chalk.whiteBright(full_name), chalk.greenBright("leave from"), chalk.whiteBright(groupname))
 await iky.replyWithPhoto({ url: `${pp_user}` }, {caption: `GoodBye ${full_name}`, parse_mode: "Markdown" })
 })
bot.use(
updateLogger({
colors: {
id: chalk.red,
chat: chalk.yellow,
user: chalk.green,
type: chalk.bold,
},
}),
);
console.log(banner.string)
Sukses('2', 'Connecting...')
setTimeout( () => {
success('2', 'Connected')
console.log(chalk.whiteBright('[ BOT STARTED ]'))
}, 3000)
function sendProses(ctx){
// let chatId = msg.chat.id;
let botReply = "Wait, Proses"
bot.telegram.sendMessage(ctx.chat.id ,botReply)
.then((result) => { setTimeout(() => {
bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
}, 10 *500)})
.catch(err => console.log(err))
}
 function format(seconds){
function pad(s){
return (s < 10 ? `0` : ``) + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return pad(hours) + ` H,` + pad(minutes) + ` M,` + pad(seconds) + ` S`;
 }
var uptime = process.uptime();
 const timestamp = speed();
 const latensi = speed() - timestamp
 const tutid = moment().millisecond()
 
function sendText(ctx,teks){
bot.telegram.sendMessage(ctx.chat.id, teks,
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
 }
 function sendsearch(ctx){
 // let chatId = msg.chat.id;
 let botReply = "Bentar Proses"
 bot.telegram.sendMessage(ctx.chat.id ,botReply)
.then((result) => { setTimeout(() => {
bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
}, 10 *250)})
.catch(err => console.log(err))
 }
function sendDonation(ctx){
 bot.telegram.sendMessage(ctx.chat.id, `• DANA
⤷ 6285364937006

• Telkomsel Credit
⤷ 6285364937006

Very Thanks for Your donation. 😁`,
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back!🔙', callback_data: 'start'},
{ text: 'Owner', url: 'http://t.me/Rizky9788'}
]
]
},
parse_mode: "Markdown"
})
}
const sendHelp = async(ctx) => {
bot.telegram.sendMessage(ctx.chat.id, 'Selamat datang Silahkan pilih menu dibawah',{
reply_markup: {
inline_keyboard: [
[
{ text: 'Pinterest', callback_data: 'pinterest'},
{ text: 'Loli', callback_data: 'loli'},
{ text: 'Music', callback_data: 'play'},
{ text: 'Quotes', callback_data: 'quotes'},
{ text: 'Afk', callback_data: 'afk'},
{ text: 'Owner', callback_data: 'rizky'}
],
[
{ text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[
{ text: 'Youtube convert to music', callback_data: 'ytmp3'}
],
[
{ text: 'Youtube convert to video', callback_data: 'ytmp4'}
],
[
{ text: 'Youtube Search', callback_data: 'ytsearch'}
],
[
{ text: 'Instagram Downloader', callback_data: 'ig'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}
const sendStart = async(ctx) => {
var pp_user = await GetFotoProfile(ctx.from.id || ctx.chat.id)
ctx.replyWithPhoto({url: `${pp_user}`},
{
caption:'Silahkan pilih menu dibawah',
reply_markup: {
inline_keyboard: [
[
{ text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Menu📚', callback_data: 'menu'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[
{ text: 'WhatsApp Bot🤖', url: 'wa.me/6282255123081'},
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}
function sendTest(ctx){
ctx.replyWithPhoto({url: `https://telegra.ph/file/4ab397f49255b2a79f687.jpg`},
{
caption: 'hai',
reply_markup: {
inline_keyboard: [
[
{ text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Menu📚', callback_data: 'menu'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[
{ text: 'WhatsApp Bot🤖', url: 'wa.me/6282255123081'},
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}
bot.action('info', ctx =>{
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id, "Bot Info", {
reply_markup: {
keyboard: [
[
{text: "Creator",callback_data: 'credit'},
{text: "Source",callback_data: 'script'}
],
[
{text: "Hilangkan keyboard"}
]
],
resize_keyboard: true
}
})
})

bot.hears('Creator', ctx => {
bot.telegram.sendMessage(ctx.chat.id, 'Bot ini dibuat oleh @Rizky9788 / Rizky Fadilah',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
});
bot.hears('Source', ctx => {
bot.telegram.sendMessage(ctx.chat.id,'Source: https://github.com/Rizky878/bot-telegram',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
});

bot.hears('Hilangkan keyboard', ctx => {
bot.telegram.sendMessage(ctx.chat.id, "Keyboard dihilangkan", 
{
reply_markup: {
remove_keyboard: true
}
})
})
bot.action('afk',(ctx) => {
ctx.deleteMessage()
if(ctx.chat.type.includes("group")) {
bot.telegram.sendMessage(ctx.chat.id, 'Perintah ini hanya dapat digunakan dalam chat pribadi',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
 return
 }
afk.push('@'+pushname(ctx.from).username)
fs.writeFileSync('./afk.json', JSON.stringify(afk))
console.log('@'+pushname(ctx.from).username)
ini_txt = "Anda telah afk. \nJika ada yang tag kamu bot akan memberitahukan bahwa kamu off\nJika ingin kembali dari afk ketik hai di sini"
ctx.reply(ini_txt)
})
bot.action('ping', (ctx) => {
ctx.deleteMessage()
const tmenu = ` 

�    
  *Host* : _${os.hostname()}_
  *Platfrom* : _${os.platform()}_
  *Penggunaan RAM* : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_
 
  Ping : *${tutid}MS*
  Runtime : *${format(uptime)}*
  _Speed_*${latensi.toFixed(4)}* _Second_

 ` 
bot.telegram.sendMessage(ctx.chat.id, tmenu ,
{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
})
bot.action('pinterest', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /pinterest nama foto \ncontoh: /pinterest ayam',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('ytmp3', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytmp3 link YouTube \ncontoh: /ytmp3 https://youtu.be/ST5v7-C3iDk ',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('ytmp4', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytmp4 link YouTube \ncontoh: /ytmp4 https://youtu.be/ST5v7-C3iDk',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('ytsearch', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytsearch judul \ncontoh: /ytsearch ayam ',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('play', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /play nama lagu \ncontoh: /play surat cinta untuk starla ',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('ig', ctx => {
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /instagram link \ncontoh: /instagram https://www.instagram.com/p/CREqfvJirTd/?utmmedium=copylink ',
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
})
bot.action('loli', (ctx) => {
ctx.deleteMessage()
ctx.reply('mencari')
 toJson(`https://api.zeks.xyz/api/pinimg?apikey=yukinikokurumi21&q=loli`).then((res) =>{
 json = res.data
 pa = Math.floor(Math.random() * json.length)
 paq = json[pa]
 console.log(paq)
 ctx.replyWithPhoto({
url: paq,
filename: 'kitten.jpg'
})
console.log(res)}).catch(e => console.log(e))
})
bot.action('rizky', ctx => {
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id, '@Rizky9788 itu ownerku',
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
 
})
bot.action('donasi', (ctx) =>{
ctx.deleteMessage()
sendDonation(ctx)
})
bot.action('start', async(ctx) =>{
ctx.deleteMessage()
sendHelp(ctx)
})
bot.action('quotes', async(ctx) =>{
ctx.deleteMessage()
sendsearch(ctx)
buff = await toJson('http://yerkee.com/api/fortune')
transllate(buff.fortune, {to: 'id'}).then(res => {
bot.telegram.sendMessage(ctx.chat.id, res.text,
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
console.log(res)
}).catch(err => {
sendText(ctx,`ERROR | ${err}`);
});

	})
bot.action(['help','menu'], (ctx) =>{
ctx.deleteMessage()
sendHelp(ctx)
})
bot.start(async(ctx) => {
ctx.deleteMessage()
sendStart(ctx)
})
bot.help((ctx) => {
ctx.deleteMessage()
sendHelp(ctx)
})
bot.command('loli', (ctx) => {
ctx.reply('mencari')
toJson(`https://api.zeks.xyz/api/pinimg?apikey=yukinikokurumi21&q=loli`).then((res) =>{
json = res.data
pa = Math.floor(Math.random() * json.length)
paq = json[pa]
console.log(paq)
ctx.replyWithPhoto({
url: paq,
filename: 'kitten.jpg' })
console.log(res)}).catch(e => console.log(e))
})

bot.command('ping', (ctx) => {
const tmenu = ` 

   
  *Host* : _${os.hostname()}_
  *Platfrom* : _${os.platform()}_
  *Penggunaan RAM* : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_
 
  Ping : *${tutid}MS*
  Runtime : *${format(uptime)}*
  _Speed_*${latensi.toFixed(4)}* _Second_

 ` 
bot.telegram.sendMessage(ctx.chat.id, tmenu ,
{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
})
})
bot.command(['instagram','Instagram'], async(iky) => {
let input = iky.message.text
let inputArray = input.split(" ")
let message = "";
if(inputArray.length == 1){
message = "Please enter link, for example: /instagram https://www.instagram.com/p/CREqfvJirTd/?utm_medium=copy_link"
sendText(iky,message)
} else{
sendProses(iky)
inputArray.shift();
messager = inputArray.join(" ")
teks = messager
console.log(teks)
if(!isUrl(teks) && !teks.includes('instag')) return sendText(iky,'Link Invalid')
try {
const insta = await toJson(`https://api.zeks.xyz/api/ig?apikey=yukinikokurumi21&url=${teks}`)
for (let i of insta.result) {
if(i.type == 'jpg') {
iky.replyWithChatAction("upload_photo")
iky.replyWithPhoto({
url: i.url,
filename: insta.owner
})
} else {
iky.replyWithChatAction("upload_video")
iky.replyWithVideo({
url: i.url,
filename: insta.owner
})
}
sendText(iky,`Download Selesai`)
}
}catch(e){
console.log(e)
sendText(iky,`Error/Link Invalid`)
}
}
})
bot.command('ytsearch', async (ctx) => {
let input = ctx.message.text
let inputArray = input.split(" ")
let message = "";
if(inputArray.length == 1){
message = "Please enter text, for example: /ytsearch snowman"
ctx.reply(message)
} else{
sendProses(ctx)
inputArray.shift();
messager = inputArray.join(" ")
teks = messager
try {
res = await yts(`${teks}`)
for (let i = 0; i < 5; i++) {
ctx.replyWithPhoto({url: res.all[i].thumbnail}, {caption:`❒「Yt Search」
• Judul${res.all[i].title}
• ID Video${res.all[i].videoId}
• Views${res.all[i].views}
• Di Upload Pada${res.all[i].ago}
• Durasi${res.all[i].timestamp}
• Channel${res.all[i].author.name}
• Link Channel : ${res.all[i].author.url}
• Link Video : ${res.all[i].url}
`})
}
} catch {
ctx.reply(`Pastikan judul sudah benar!`)
}
}
})
bot.command('quotes', async(ctx) => {
ctx.deleteMessage()
sendsearch(ctx)
buff = await toJson('http://yerkee.com/api/fortune')
transllate(buff.fortune, {to: 'id'}).then(res => {
bot.telegram.sendMessage(ctx.chat.id, res.text,{
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
console.log(res)
}).catch(err => {
sendText(ctx,`ERROR | ${err}`);
});
})
bot.command('ytmp3', ctx => {
if(ctx.message.text.split('ytmp3')[1] == '') return ctx.reply('Link nya mana kak?')
const q = ctx.message.text.split('ytmp3')[1]
if(!isUrl(q) && !q.includes('youtu')) return ctx.reply('Link Invalid')
sendsearch(ctx)
y2mateA(q).then((tes) => {
console.log(tes)
ctx.replyWithChatAction("upload_photo")
ctx.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${tes[0].judul}\n• *Size* : ${tes[0].size}\n\nMohon Tunggu sebentar lagu sedang dikirim`})
ctx.replyWithAudio({
url: tes[0].link,
filename: tes[0].output
}).catch(e => { ctx.reply('Link Invalid')
console.log(e)
})
ctx.replyWithChatAction("upload_audio")
})
})
bot.command('ytmp4', ctx => {
if(ctx.message.text.split('ytmp4')[1] == '') return ctx.reply('Link nya mana kak?')
const q = ctx.message.text.split('ytmp4')[1]
if(!isUrl(q) && !q.includes('youtu')) return ctx.reply('Link Invalid')
sendsearch(ctx)
y2mateV(q).then((tes) => {
console.log(tes)
ctx.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${tes[0].judul}\n• *Size* : ${tes[0].size}\n\nMohon Tunggu sebentar video sedang dikirim`})
ctx.replyWithVideo({
url: tes[0].link,
filename: tes[0].output
}).catch(e => { ctx.reply('Link Invalid')
 console.log(e)
})
ctx.replyWithChatAction("upload_video")
})
})
 bot.command('play', ctx => {
if(ctx.message.text.split('play')[1] == '') return ctx.reply('Nyari apa kak?')
sendsearch(ctx)
yts(`${ctx.message.text.split('play')[1]}`).then((res) => {
if (res.all[0].duration.seconds > 600 ) return ctx.replyWithPhoto({
url: res.all[0].thumbnail},{caption: `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${res.all[0].title}\n• *Durasi* : ${res.all[0].timestamp}\n\nMaaf, Durasi video melebihi 10 Menit\nLagu Tidak akan dikirim`})
let thumbInfo = `❒「 Youtube Play 」
├ Judul : ${res.all[0].title}
├ ID Video : ${res.all[0].videoId}
├ Diupload Pada : ${res.all[0].ago}
├ Views : ${res.all[0].views}
├ Durasi : ${res.all[0].timestamp}
├ Channel : ${res.all[0].author.name}
└ Link Channel : ${res.all[0].author.url}

Tunggu Proses Mengirim.....
`
ctx.replyWithPhoto({
url: res.all[0].image,
filename: res.all[0].title+'.jpg'
},{caption: thumbInfo})
y2mateA(res.all[0].url).then((tes) => {
console.log(tes)
ctx.replyWithChatAction("upload_audio")
ctx.replyWithAudio({
url: tes[0].link,
filename: tes[0].output
}).catch(e => ctx.reply('error silahkan cari lagu lain'))
}).catch(e => ctx.reply('error silahkan cari lagu lain'))
}).catch(e => ctx.reply('error silahkan cari lagu lain'))
})
bot.command('pinterest', (ctx) => {
if(ctx.message.text.split('pinterest')[1] == '') return ctx.reply('Nyari apa kak?')
sendsearch(ctx)
toJson(`https://api.zeks.xyz/api/pinimg?apikey=yukinikokurumi21&q=${ctx.message.text.split('pinterest')[1]}`).then((res) =>{
json = res.data
pa = Math.floor(Math.random() * json.length)
paq = json[pa]
console.log(paq)
ctx.replyWithPhoto({
url: paq,
filename: ctx.message.text.split('pinterest')[1]+'.jpg'
})}).catch(e => console.log(e))
})
//bot.mention('Rizky9788',(ctx) => ctx.reply('ada apa tag ownerku'))
bot.on('message', async(iky) => {
try {
awalan = '/'
const q = iky.message.text || iky.message.caption || ''
const command = q.slice(1).trim().split(" ").shift().toLowerCase()
const args = await argsGet(iky)
const name = pushname(iky.message.from) 
const OwnerId = ['Rizky9788']
const isOwner = OwnerId.includes(name.username)
const reply = async(text) => {
bot.telegram.sendMessage(iky.chat.id, text,
{
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'start'}
]]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}
const replyMenu = async(text) => {
bot.telegram.sendMessage(iky.chat.id, text,
{
reply_markup: {
inline_keyboard: [
 [
{ text: 'Menu', callback_data: 'start'}
]]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}
const isImage = iky.message.hasOwnProperty("photo")
const isVideo = iky.message.hasOwnProperty("video")
const isAudio = iky.message.hasOwnProperty("audio")
const isSticker = iky.message.hasOwnProperty("sticker")
const isContact = iky.message.hasOwnProperty("contact")
const isLocation = iky.message.hasOwnProperty("location")
const isDocument = iky.message.hasOwnProperty("document")
const isAnimation = iky.message.hasOwnProperty("animation")
const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
const Quoted = iky.message.reply_to_message || {}
const isQuotedImage = Quoted.hasOwnProperty("photo")
const isQuotedVideo = Quoted.hasOwnProperty("video")
const isQuotedAudio = Quoted.hasOwnProperty("audio")
const isQuotedSticker = Quoted.hasOwnProperty("sticker")
const isQuotedContact = Quoted.hasOwnProperty("contact")
const isQuotedLocation = Quoted.hasOwnProperty("location")
const isQuotedDocument = Quoted.hasOwnProperty("document")
const isQuotedAnimation = Quoted.hasOwnProperty("animation")
const isQuoted = iky.message.hasOwnProperty("reply_to_message")
var qu = ""
if (isQuoted) {
qu = isQuotedImage ? iky.message.reply_to_message.photo[iky.message.reply_to_message.photo.length - 1].qu : isQuotedVideo ? iky.message.reply_to_message.video.qu : isQuotedAudio ? iky.message.reply_to_message.audio.qu : isQuotedSticker ? iky.message.reply_to_message.sticker.qu :
isQuotedDocument ? iky.message.reply_to_message.document.qu :
isQuotedAnimation ? iky.message.reply_to_message.animation.qu : ""
}
const isCmd = q.startsWith(awalan)
const isGroup = iky.chat.type.includes("group")
const groupName = isGroup ? iky.chat.title : ""
if (afk.includes(q)) {
ini_txt = "Maaf user yang anda tag sedang afk. "
reply(ini_txt)
return
}
if (afk.includes('@'+name.username)) {
reply("Anda telah keluar dari mode afk.")
afs = afk.indexOf('@'+name.username)
afk.splice(afs,1)
fs.writeFileSync("./afk.json", JSON.stringify(afk))
return
}
switch (command) {
case 'afk':
if(isGroup) return reply('Gunakan Perintah ini di chat pribadi')
alasan = args.join(" ")
afk.push('@'+name.username)
fs.writeFileSync('./afk.json', JSON.stringify(afk))
console.log('@'+name.username)
ini_txt = "Anda telah afk. \nJika ada yang tag kamu bot akan memberitahukan bahwa kamu off\nJika ingin kembali dari afk ketik hai di sini"
reply(ini_txt)
break
case 'tes':
console.log(iky)
break
case 'menu':
sendHelp(iky)
break
case 'return':
if(!isOwner) return 
iky.reply('Excuting '+args.join(' '))
try {
 reply(util.format(await eval(`;(async () => { ${args.join(' ')} })()`)))
} catch(e) {
iky.reply(`Error: ${e}`)
}
default:
if(!isGroup && !isCmd && !isMedia) {
await iky.replyWithChatAction("typing")
simi = await toJson(`https://fdciabdul.tech/api/ayla/?pesan=${q}`)
await replyMenu(simi.jawab)
console.log(chalk.whiteBright(""), chalk.cyanBright("[ SIMI ]"), chalk.whiteBright(q), chalk.greenBright("from"), chalk.whiteBright(user.username))
console.log(chalk.whiteBright(""), chalk.cyanBright("[ BOT ]"), chalk.whiteBright(simi.jawab), chalk.greenBright("from"), chalk.whiteBright(user.username))
}
}
} catch(e) {
console.log(e)
}
})
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
