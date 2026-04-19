async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join m'y offial WhatsApp Channel",
                    body: " •⸙𓍝ϻ𝆭ℜ 𝐃ɛ፝֟֯ؖ۬𝐯ɪs ᑭℜɪϻ𝆭ɛ 𓃵ᭃ𓍝주님 𓍝 ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029Vb7SUonEQIakXjOf7h3V`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;