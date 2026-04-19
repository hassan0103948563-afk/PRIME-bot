import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "PRIMEE-ZYP",
        body: "•⸙𓍝ϻ𝆭ℜ 𝐃ɛ፝֟֯ؖ۬𝐯ɪs ᑭℜɪϻ𝆭ɛ 𓃵ᭃ𓍝주님 𓍝",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
