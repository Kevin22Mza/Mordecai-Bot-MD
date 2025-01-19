import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  m.react('☁️');
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let pp = await conn.profilePictureUrl(who).catch(_ => 'https://files.catbox.moe/3kbbok.jpg');
  let biografia = await conn.fetchStatus('584120346669' + '@s.whatsapp.net').catch(_ => 'Sin Biografía');
  let biografiaBot = await conn.fetchStatus(`${conn.user.jid.split('@')[0]}` + '@s.whatsapp.net').catch(_ => 'Sin Biografía');
  let bio = biografia.status?.toString() || 'Sin Biografía';
  let biobot = biografiaBot.status?.toString() || 'Sin Biografía';
  let name = await conn.getName(who);

  await sendContactArray(conn, m.chat, [
    [`${nomorown}`,`👑 Propietario`, `☁️ ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜`, dev, 'thekingdestroy507@gmail.com', `🇻🇪 Venezuela`, `https://github.com/The-King-Destroy`, bio],
    [`${conn.user.jid.split('@')[0]}`, `Es Un Bot 🍬`, `${packname}`, `📵 No Hacer Spam`, 'moisesmusic04@gmail.com', `🇨🇴 Colombia`, `https://github.com/The-King-Destroy/Yuki_Suou-Bot`, biobot]
  ], m);
};

handler.help = ["creador", "owner"];
handler.tags = ["info"];
handler.command = ['creador', 'owner'];
export default handler;

async function sendContactArray(conn, jid, data, quoted, options) {
  if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data];
  let contacts = [];
  for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
    number = number.replace(/[^0-9]/g, '');
    let njid = number + '@s.whatsapp.net';
    let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {};
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/
/g, '\
')}
ORG:${isi}
TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
X-ABLabel:${isi1}
EMAIL;type=INTERNET:${isi2}
X-ABLabel:📧 Email
ADR:;;${isi3};;;;
X-ABADR:ac
X-ABLabel:🏷 Region
URL:${isi4}
X-ABLabel:Website
X-ABLabel:${isi5}
END:VCARD`.trim();
    contacts.push({ vcard, displayName: name });
  }
  return await conn.sendMessage(jid, {
    contacts: {
      displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
      contacts,
    }
  },
    {
      quoted,
      ...options
    });
}