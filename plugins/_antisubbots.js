import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];

         if (!chat.antiBot2) {
            return
        }


        let botJid = global.conn.user.jid // JID del bot principal

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))

          if (isBotPresent) {
                setTimeout(async () => {
                    await conn.reply(m.chat, `🍬 𝘌𝘯 𝘌𝘴𝘵𝘦 𝘎𝘳𝘶𝘱𝘰 𝘌𝘴𝘵á 𝘌𝘭 𝘉𝘰𝘵 𝘗𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭, 𝘦𝘭 𝘤𝘶𝘢𝘭 𝘮𝘦 𝘴𝘢𝘭𝘥𝘳é 𝘱𝘢𝘳𝘢 𝘯𝘰 𝘩𝘢𝘤𝘦𝘳 𝘚𝘱𝘢𝘮.`, m)
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}