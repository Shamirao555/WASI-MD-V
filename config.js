8NiJo//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
koglobal.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
glob al.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

globapl.SESSION_ID =
 process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU91N3BoR2VCNFd4SUl6OE1rdEVtUDVYdlNQMTViYkdCOHhNN1lWYzdXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFVJN1YyelI1enh6eG9BQXcrNElMeUNoMUdvMEFWNlFLNFdYMy9mb3VITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDc5T1RXdWs3WTU1aC83R1J4aUJtS2ZwTzZWWVlRZ2N6ZWdTaHloZkVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJZTl0cnROQkduekhRQnpQMnNXWjUvVWRPb3EycGkyakRPdC9sc0xMYmxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDSllJWkE5QjZydHIvQnNFVkgzbVFWRzJVa1hUSHRYaUhQdFJCYXlMVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBUaGZ3OFUvNEd5V1J1anhQZXRXQjAyc29malpGaWhINUUzbXRXM3dod3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lBdG5CVTROb05zMWIrZDRRSkI2ZEdXS1RlUExsSHNsNDJ0alNlVkNrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajQxbWJaVFEyRnhnVUtvZUVrb0RVWVNENE5SVVZLRGttWHVjVDJQS1Fodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPSzNpU1htZ0ZvT0xPcEd2T1lOTkludnI3aVJQWjZnSWkyUm1PS0tRd1hSOU51enZRbHlaZHhCa2ptckNZS0YzV0VDQ200YURzNHdNVTFaMW5VcmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IkswaE1HcytOMldINERhREhMV3dHM3E0VUpudTVMdkkwWVFtdG9VMmlJazA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVmbUJEbF9jVFE2YmwxYjJodHRveEEiLCJwaG9uZUlkIjoiZjA1MzI2NTYtNTllNC00NWY1LTg1MjItOWZlNGNjNjA3YjIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNwaGsxUFlQdERKYTloSDMybjdzRzBUYjFIUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxYTVPeWtyb0RLdE9tSElCUU9lNTl4R1haWnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0tRNkFZRkIiLCJtZSI6eyJpZCI6IjkyMzAzNjYwMzk5MTo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPU1huZTRDRUtPSmtya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSYUQ3YkZDNkFFV25IKzhONSt5MU5sdnpoVVZlUG4vSDVRbnVsMjNnTm04PSIsImFjY291bnRTaWduYXR1cmUiOiJXV2tMaHQzRXZDTUVQVjNZZGdqNGp4WUtsWXRPSWRnRCtTVTk1ZjArclc4T0xxZUYwZG9MdlNYYU1mUHVpeExVbzdoZDNqU1Q4Tm0rcENBNy82TEFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR0dlcnpTcFRyeWdPUHJvenRRQmprM3RFbUlId0l3RUxOdGZZMlN6TTNCL1czdEo2YUQ1U3dhejB5RFdRVk9WRVMzOEc0RTNkdjF5ZVROTytLbkhNZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzY2MDM5OTE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVV2crMnhRdWdCRnB4L3ZEZWZzdFRaYjg0VkZYajUveCtVSjdwZHQ0RFp2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDQ2NTEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlMUiJ9
 ";eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUozWkhqNnBRa1pvL0w4dkdud2ZEdkczME1VSG85d1NYS0t4a3UrK3BWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdXVFRmS3VDSm5FVXM2d3RrV2dYZS95V002Wm1JY2RMbWFNRk1WUDBsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQTEyRXEyM0RmcFRWbUNVL1o0NEJvYjUxWldjbHcxUUp4cTF4eVJWV1dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2NG1aWThZUzhmaGJEOEg2TnV6bVJudXJZeUhKazV0R2g0YjVqbGlJeXowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIaStWdmtkYnBWV1ptODg0ajMwTmRlWHpLYUk1QzYvd1lpMDBkaXdRbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd1MDRBcEhQcjdmc1JvWUZFa2pTWXVRdGZGNFdYdGFRaEdrRlErYnZZSEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VGMkJBZ0pZZ1ZmRmRxeGFQVnkyODRKbUZxbmRraDE5OVNUR3lwTUZHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3J5SDdVbWFMcUZabFJzemVNdFc2WDJyQmxkL2VOSnY5eEpYWG1iMzl6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXUVBXVG1SQmY0QTlmbWl1Uk1hUUo1TXQ4Y1M3NU5oWmFvMUN0NnR3ME4wN1B6czdib3duYzZmK00xUVN4ellzNW9YZFJndGRzKzNJajU5cXhhRURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiNVNtb0RjU2RNR1hWSHp2TzA5b3R4ZFZMNlRvNFNNS0tzYS9HdnhDNlhkOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaHdiNjdpOVZUTEc0NU5HVnljdEZRUSIsInBob25lSWQiOiIxN2JlNDhlOS04ZTM4LTQ1M2QtYmI2MS02ZjY0ZjcyNjA5YTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3FsNTdFcGFrcDVDTFllRTlrTnI4U3NqSDl3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1TOWRES0ZzS1h1WFNSajRlZ3E5WVY4KzZkcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5OFZEVjdBRSIsIm1lIjp7ImlkIjoiOTIzMDM2NjAzOTkxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmFvIFNoYWhtZWVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcnEyY2tFRUpERnFMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0Wm5lcXlNVWdlM2NGR20xaFZWdTMyTDB0dUhCYlVaOW9CSmprTnNGc2hjPSIsImFjY291bnRTaWduYXR1cmUiOiJCZE96ZEF6YVEyenZudFN1aThqNEs5M2xqbG5Nc0hidzhkaVNuZ2tHeXArNXVNZ0g1Vzh5LytDVDhoZUhLTDVEZFlqNXJWWjJ4NGRBWmxiSnNhUnlEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWhPNU5TaXRLQlc5U1paQTJvYytTSjZlTWpQem44dkRVVFdmajRGQTBUamNVTGxoaWd2K3psUEpmMklTRVI5S3BOQjlSdXZMa2ZXUU5jSmw5REZmQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzY2MDM5OTE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiV1ozcXNqRklIdDNCUnB0WVZWYnQ5aTlMYmh3VzFHZmFBU1k1RGJCYklYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjIwMzE3fQ==
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
