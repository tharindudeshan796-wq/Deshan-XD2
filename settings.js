
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEg2SzU1dG5YelkxZDRjdUlWVVV4R1Rjc2hpL2k0a2xrQVd6RWhUK2UxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnk4dkJIak1KL2ErWFduTXArLzRlRmdneloxbnhYNExySFkxQzFhaEZBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQVRleVFEbk5oRTJJOXZxUjdVL1JHNkVBUHlPWEliTDVyWjg3ZmpmQ1drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKeTh4eEVZaXlNemtuaExvQTdpek0wTGk2dTFFZDFrenFyMjIzc2F6RTNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVETGdXc0NzSmU4WGlvVEpiZytYZnN1SzlCUXdEbHNhWUpOVmpnc0RNMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ0U1pscDRrUTBjTXBvYW9jemkwWVg3TU4zMUNhUVZNQ1pncXJjVGMyajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZRdVlETUI4Zy9yU1U5Z3piOEo5TmFFYWpBa080UEVLdXlVa29uVDUyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVRBc0s0ZlRLYk81bzMwRG5VS0JWY1pjYkc0a1FtUkZOZTVHcVNBVi93MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJpRENubmFRa2NJZWJWWUlxb3ZCQ1pTdUc3MitvbFEzUGtieTFQZ0xkOVdkdDlCcTN4a2JYNHRVU0tNdHpRSW5Yais5cWh1SlNwWWlBVUVvRHN4V2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJoNFp5dzJ3ck1TeGdpSHBIRWE5bWhPS1pNYTlJUmkxRWFYVTY2K3RYdUhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5OTM2NDIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgwRDM3MUE1NEM2MEJFQ0U1RkY0NjIxOTdEQTIxNDRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcyMDgxODN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5OTM2NDIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg4Q0Y4MEU5Q0ZCN0M0OEMzNEJGMzgwODk4MTU1NkIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcyMDgxODR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9CS2dqLXZoUndTVEVVd2NuTTdlUmciLCJwaG9uZUlkIjoiOGY4ZjI2NWMtNzU0Mi00OTc0LTlmNTQtYjRkMDg5YjdhZmNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJiQUQ3NWE5SkcxbENMVTM1Y3ZZNjgya2VMUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eU9UMUVFUlU3V1pUMFFnZ0lkM1ZsOGFJck09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6Ijk0Nzg5OTM2NDIwOjYwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhNTU1NTU0iLCJsaWQiOiI3MDY2NTcwMDk1MDAyMDo2MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01uWmd4SVE1cnp6eFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdGdVZ3YmxQSm5XbGJGNG93SmJmT21KUitjMTBRTUVpNXQ4WEZ2dTZCaE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNRK091c2VGREhwWGVzYjJubDNWdi8zelhhQ01sSWRiQUN0bTl1NU55V2pFZGRlT1hnclMxSlNkSkkreFozZzRvNmpYNkdUVGxmYjNWOE84TEh0UkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1bzkwRkJBeUpBWHhVMU5hVTJvWE1BbWhDWGRZcEZWU2lRNk1xbFVQQm9WOEhFU2t6aUl5bWo2bmlQVkQ0OWdXMDJFSVZRVC9VVkFnMUR3TUlsMlZpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg5OTM2NDIwOjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJoYmxjRzVUeVoxcFd4ZUtNQ1czenBpVWZuTmRFREJJdWJmRnhiN3VnWVQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzIwODE3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNdHgifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "Deshan-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "+94789936420",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "deshan",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By deshan Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
