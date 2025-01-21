import fetch from "node-fetch";
import yts from "yt-search";

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("🍬 Ingresa el texto de lo que quieres buscar.");
    }

    // Realiza la búsqueda en YouTube
    let ytres = await yts(text);
    let video = ytres.videos[0];

    if (!video) {
        return m.reply("🍭 No se encontraron resultados...");
    }

    let { title, thumbnail, timestamp, views, ago, url, author } = video;

    let vistas = parseInt(views).toLocaleString("es-ES") + " vistas";

    // Mensaje de detalles del video
    let HS = `🎬 *Título:* ${title}
*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
> 🕒 *Duración:* ${timestamp}
*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
> 👀 *Vistas:* ${vistas}
*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
> 🍬 *Canal:* ${author.name || 'Desconocido'}
*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
> 📆 *Publicado:* ${ago}
*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*
> 🔗 *Enlace:* ${url}`;

    // Miniatura del video
    let thumb = (await conn.getFile(thumbnail))?.data;

    let JT = {
        contextInfo: {
            externalAdReply: {
                title: title,
                body: "",
                mediaType: 1,
                previewType: 0,
                mediaUrl: url,
                sourceUrl: url,
                thumbnail: thumb,
                renderLargerThumbnail: true,
            }
        }
    };

    // Enviar detalles del video
    await conn.reply(m.chat, HS, m, JT);

    try {
        console.log(`Intentando obtener el audio de la URL: ${url}`);
        // Cambiar con una API funcional para descarga de YouTube
        let api = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${url}`);
        let json = await api.json();

        if (json.status && json.audio) {
            let { audio } = json;

            console.log("Enlace de descarga encontrado:", audio);

            // Enviar el audio
            await conn.sendMessage(
                m.chat,
                {
                    audio: { url: audio },
                    mimetype: "audio/mpeg",
                    fileName: `${title}.mp3`,
                    caption: `🎶 Aquí tienes el audio: *${title}*`,
                },
                { quoted: m }
            );
        } else {
            console.error("Error: No se encontró un enlace de descarga en la respuesta.");
            m.reply("😓 No se pudo obtener el enlace de audio.");
        }
    } catch (error) {
        console.error("Ocurrió un error al intentar obtener el audio:", error);
        m.reply("😓 Ocurrió un error al intentar obtener el audio.");
    }
};

handler.command = ['play'];

export default handler;