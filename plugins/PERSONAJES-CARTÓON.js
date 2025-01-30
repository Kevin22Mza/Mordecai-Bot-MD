/*
《✧》 DERECHOS RESERVADOS DEL AUTOR《✧》
- IVANMODS15 (@Eliasivan)
*/

var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
{ nombre: 'Ben10', anime: 'Alienigenas', precio: '5' },
{ nombre: 'Coraje', anime: 'Animado', precio: '10' },
{ nombre: 'Clarence', anime: 'Aventura', precio: '50' },
{ nombre: 'Naruto', anime: 'hasenga', precio: '80' },
{ nombre: 'Gumball', anime: 'Un mundo de gumball', precio: '100' },
{ nombre: 'Darwin', anime: 'un mundo de gumball', precio: '120' },
{ nombre: 'Chico Bestia', anime: 'Los jovenes en titanes en accion', precio: '200' },
{ nombre: 'Spiderman', anime: 'Spiderman', precio: '855' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
conn.reply(m.chat, `🚩 Nombre: ${waifu.nombre}\n✨️ Fuente: ${waifu.anime}\n💰 Valor: ${waifu.precio}`, m, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['Car', 'cartoons']
handler.help = ['Cartons']
handler.tags = ['animados']
export default handler