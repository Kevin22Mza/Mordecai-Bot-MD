import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +573218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['5492612721386', 'ⁱᵃᵐ|Ҡҽѵìղلʂ𒆜', true],
  ['50230076791', 'MRSHADOWS', true],
  ['50558124470']
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['5492612721386', '50558124470']
global.suittag = ['5492612721386']
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.9' 
global.languaje = 'Español'
global.vs = '2.1.5'
global.vsJB = '5.0'
global.nameqr = '𝙈𝙤𝙧𝙙𝙚𝙘𝙖𝙞-𝘽𝙤𝙩-𝙈𝘿'
global.namebot = '𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packsticker =`°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n✦ Bσƚ:\n✦ Pɾσριҽƚαɾισ:\n✦ Fҽƈԋα ԃҽ Cɾҽαƈιóɳ:\n✦ Hσɾα ԃҽ Cɾҽαƈιóɳ:\n♾━━━━━━━━`
global.packsticker2 = `━━━━━━━━♾\𖤓⏤͟͟͞͞𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯⏤͟͟͞͞𖤓\nৎ୭࠭͢𓆩Ҡҽѵìղلʂ𓆪͟͞ \n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n\nѕτιϲκєя ϐγ: 𝙈𝙤𝙧𝙙𝙚𝙘𝙖𝙞`

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = `⪛桜沢桜𓆩†𓆪みさ⪜`
global.botname = '𖤓⏤͟͟͞͞𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯⏤͟͟͞͞𖤓'
global.wm = '𖤓⏤͟͟͞͞𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯⏤͟͟͞͞𖤓'
global.author = 'Made By ৎ୭࠭͢𓆩Ҡҽѵìղلʂ𓆪͟͞ '
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ৎ୭࠭͢𓆩Ҡҽѵìղلʂ𓆪͟͞  '
global.textbot = '𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎 𝕭𝖔𝖙 • Powered By ৎ୭࠭͢𓆩Ҡҽѵìղلʂ𓆪͟͞ '

global.moneda = 'Yenes'
global.welcom1 = 'Edita Con #setwelcome'
global.welcom2 = 'Edita Con #setbye'
global.banner = 'https://qu.ax/WqruM.jpg'
global.catalogo = 'https://tinyurl.com/25ru293g'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./src/menus/Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/anime.jpg');
global.imagen3 = fs.readFileSync('./src/menus/Menu3.jpg');
global.imagen4 = fs.readFileSync('./src/menus/Menu.jpg');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./src/menus/Menu3.jpg');
global.imagen7 = fs.readFileSync('./src/menus/Menu5.jpg');
global.imagen8 = fs.readFileSync('./src/menus/Menu4.jpg')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/nuevobot.jpg')
global.miniurl = fs.readFileSync('./src/Grupo.jpg');
global.logo2 = fs.readFileSync('./src/logo2.jpg')
global.logo3 = fs.readFileSync('./src/logo3.jpg')
global.catalogo = fs.readFileSync('./src/logo6.png')
global.logo4 = fs.readFileSync('./src/logo4.jpg')
global.logo5 = fs.readFileSync('./src/logo5.jpg')
global.logo7 = fs.readFileSync('./src/Logo7.png')
global.logo8 = fs.readFileSync('./src/Logo8.jpg')
global.rule = fs.readFileSync('./src/rule.jpg')

global.photoSity = [imagen8, imagen1, imagen4, imagen6]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp4 = 'https://chat.whatsapp.com/J1ImnztNEjA9e1mzwTzrLY'
global.gp1 = 'https://chat.whatsapp.com/LgikJvYe5h52WR90PVNi8b' 
global.gp2 = 'https://chat.whatsapp.com/J1ImnztNEjA9e1mzwTzrLY'
global.comunidad1 = 'https://chat.whatsapp.com/JG7nkbC39x39usNdfLVSaA'
global.channel = 'https://whatsapp.com/channel/0029Vb2YQcW1t90dSKG8ac2U'
global.channel2 = 'https://whatsapp.com/channel/0029Vb2YQcW1t90dSKG8ac2U'
global.md = 'https://github.com/Kevin22Mza/Mordecai-Bot-MD'
global.correo = 'kevincordoba223322@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb2YQcW1t90dSKG8ac2U';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '❀ 𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯 ☄︎︎', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363372222484415@newsletter',
ch2: '120363372222484415@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🌟 Nivel',
      coin: '💸 Coin',
      exp: '✨ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Token',
      emerald: '♦️ Esmeralda',
      stamina: '⚡ Energía',
      role: '⚜️ Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      iron: '⛓️ Hierro',
      coal: '🌑 Carbón',
      stone: '🪨 Piedra',
      potion: '🥤 Poción',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { 
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: '🌟',
      coin: '💸',
      exp: '✨',
      bank: '🏦',
      diamond: '💎',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '♦️',
      stamina: '⚡',
      role: '⚜️',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      iron: '⛓️',
      coal: '🌑',
      stone: '🪨',
      potion: '🥤',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
