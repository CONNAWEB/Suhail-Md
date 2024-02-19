const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="mathore,colombia."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348025390521";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348025390521,2348025390521";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348025390521";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348025390521,2348025390521";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CONNADREK",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "CONNADREK",
  ownername:process.env.OWNER_NAME|| "CONNADREK",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_50_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUg0RGpiUUw3SlJwQlllak1Nb1hLd3B0Mlo5d1RqT3hseGJobzR5UWQyTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJXb2h1SDdiZmFQM1V5VGErRjN4a3ZRb3BabEFCREpHNE1TZllqUVlYRVk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUNacWd3V1haaFo4NytMNFdjQWc4dFkwNEw1YUdvQ2srUllJNlVtT0hGaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1kVXllT1pUVkgzdWt3VHE4ZlYyc0Q3QW51YjZaQ3BJYzM3bUlRRVZ3blU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK01wbnF5aUpyd21CQTdBOThyQjZyTEp3NFNiODhFN0dWK1I5MldDbDcybz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5xZ1ZNNlhzMjlkL0I5ZVIyczZsWnlpZHY5UFV3UFRNRWZmdDRlKzA5QTg9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtT2trSHQ5NVhiU0NBeHNheUFqQS9PMWptQlNyNmg5ZnA5YlhaVSs1ZWtFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0VnR3RlTHNHOVlKWjBWL29vQUh0Smtadmw3ZUJYRGkyMlJFZzJ1L1p4dz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4blFISnJDcHFOMTM0ZGRtOUpCM2c0OUx6YUduZlk3WitKblZtNGVtMUFDTEtQL1N4UkR1dnJSSi9nRVRwc0lhUmQvK0xxUDVLUzB0eXc4WERQeW1BUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjMwLFwiYWR2U2VjcmV0S2V5XCI6XCJINitpVXY2ZDExSXhMdlVxMlhFc0psMkUzeExvMUY1WFhYNTRnQ1hNbzBnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMixcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzIsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiZHVVM092M09SRENJcFJLT2RrYTlad1wiLFwicGhvbmVJZFwiOlwiODVkYWEzNjUtMjBjYS00ZTMzLWE1NzUtODFmZjAwYzcyYzk3XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIraU1XenFpYVdOZUtPOEdXeXc0QVQ1NVdEWEE9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTzhsWjJPYXQ1UXNiVXVjL1FFSTBMYzRpSVlZPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIjlNODQyWFg0XCIsXCJtZVwiOntcImlkXCI6XCIyMzQ4MDI1MzkwNTIxOjNAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTgzODgwODM3NTEzNDQ4OjNAbGlkXCIsXCJuYW1lXCI6XCJQZW56b29cIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ05mWTM1a0NFUE9BemE0R0dBSWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJxbFhXV0h1ZVAwQVVjYXJDSC8vMlRBSnVybCtsd1p4N0VyU3VGa0svblhRPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwib3hmWFhnN3BjVDNoWVAyY3hyTkhTSWdZbVBqYzV5YjBjOHQyUzJLTXpRYVhwTTFvMlFSL1JYQUVmb3FVTjBBUTlEbHJJYzBBbGlHOGZLN2tRUWtCRHc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJvSVJScytGcGptaGNHOU04dzNZQ0laZHhVTzgwVmxHQ3RRWWJ5UjFmZ1Iwd2dRbHhMOFhEUS9SU21MZGpSYTA3TzV1bHZCNXJGS0M0YzMwTHJINElBdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODAyNTM5MDUyMTozQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmFwVjFsaDduajlBRkhHcXdoLy85a3dDYnE1ZnBjR2NleEswcmhaQ3Y1MTBcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MzQzNDE1LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUdIMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdIMi5qc29uIjogIntcImtleURhdGFcIjpcIkdWbVpjaHpndjRJM1FIa3NrbzkxVVFWQzV6eXFaRWx6YU8vcVNCdm9WMDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTkwODY3NTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNDMyNzI4OTRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
