export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    if (m.fromMe) return true;

    if (m.id.startsWith('3EB0') && m.id.length === 22) {
        let chat = global.db.data.chats[m.chat];

        if (chat.antiBot) {
       //     await conn.reply(m.chat, "     ͞ ͟͞ ͟𝕸𝖔𝖗𝖉𝖊𝖈𝖆𝖎-𝕭𝖔𝖙-𝕸𝕯 ͟ ͟͞ ͞   \n╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝\n\n𝙎𝙤𝙮 𝙈𝙤𝙧𝙙𝙚𝙘𝙖𝙞-𝘽𝙤𝙩-𝙈𝘿 𝙀𝙡 𝙢𝙚𝙟𝙤𝙧 𝘽𝙤𝙩 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥!!\n𝙀𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙩𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖, 𝘼𝙙𝙞ó𝙨 𝙗𝙤𝙩 𝙙𝙚 𝙎𝙚𝙜𝙪𝙣𝙙𝙖.", null, rcanal);

            if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
}
