/*
《✧》 DERECHOS RESERVADOS DEL AUTOR《✧》
- Ivanmods15 (@Eliasivan)
*/

var handler = async (m, { text,  usedPrefix, command }) => {

// Función para reclamar la waifu
function reclamarWaifu() {
// Simulamos un roll de dados para determinar si ganamos la waifu
const roll = Math.floor(Math.random() * 100) + 1

// Si el roll es mayor o igual a 50, ganamos la waifu
if (roll >= 10) {
m.reply("☄ ¡Felicidades! Has reclamado tu Personaje 🌟")
} else {
m.reply("⭐️ Lo siento, no has ganado la waifu. ¡Inténtalo de nuevo!")}}

// Llamamos a la función para reclamar la waifu
reclamarWaifu()}

handler.command = ['r', 'obtener']
handler.help = ['r']
handler.tags = ['cartonew']
handler.premium = false
export default handler