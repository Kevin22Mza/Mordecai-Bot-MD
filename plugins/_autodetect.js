let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg'  

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = `*${usuario}*\n🍬 Ha Cambiado El Nombre Del Grupo.\n\n🍭 Ahora El Grupo Se Llama:\n*<${m.messageStubParameters[0]}>*...`
foto = `*${usuario}*\n🍬 Ha Cambiado La Imagen Del Grupo...`
edit = `*${usuario}*\n🍬 Ha Permitido que ${m.messageStubParameters[0] == 'on' ? 'Solo Admins' : 'todos'} Puedan Configurar El Grupo...`
newlink = `🍬 El Enlace Del Grupo Ha Sido Restablecido por:\n*» ${usuario}*...`
status = `🍬 El Grupo Ha Sido ${m.messageStubParameters[0] == 'on' ? '*Cerrado 🔒*' : '*Abierto 🔓*'} Por *${usuario}*\n\n🍭 Ahora ${m.messageStubParameters[0] == 'on' ? '*Solo Admins*' : '*todos*'} Pueden Enviar Mensaje...`
admingp = `*@${m.messageStubParameters[0].split`@`[0]}* Ahora Es Admin Del Grupo 🍭\n\n🍬 Acción Hecha Por:\n*» ${usuario}*...`
noadmingp =  `*@${m.messageStubParameters[0].split`@`[0]}* Deja De Ser Admin Del Grupo 🍭\n\n🍬 Acción Hecha Por:\n*» ${usuario}*...`

if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   

} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

return;
} if (chat.detect && m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else {
//console.log({ messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType], 
//})
}}