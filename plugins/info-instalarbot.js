import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻
` 
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
