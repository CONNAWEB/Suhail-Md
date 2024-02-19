const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="mathara,colombia."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombia";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348141958422";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348141958422,2348141958422";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Connadrek",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Connadrek",
  ownername:process.env.OWNER_NAME|| "Connadrek",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_18_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNE5JeVpXL25zaWxkQTNLTExZeWVyeTdDU3JNZTRyNDlnVzNlcTdHQmJWdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNOQmx2U3IvQnJpM0x6eHZHR2Nrdkk4UWxoVlNCRFRwZVhoUzR6RmJ4elk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQU5VSnc3b045RFlhNEJPQzZBd0hqL1dQYUhncEVWZDUwOGM4SFVHMXRXWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNQcGJpaUhYclZsR0JrcENYNnQ0a1k4aFNmeGM0YkpXYTl4YlBDNCtnaTg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0JlZDJwaXY5OElTQUVVZzMwRXFTTDRyZ1Rib3FBOTRLMThCTWZ4aWowRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjNGRE5oWkNaWWpGUkYvMUQ3UFdIU1lqMWF4OWthdjBUcktIMDZ5TWtKQ1U9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnQmJveUJQc1hNNGVsUnhOZ0dDKzVLRGNZNXM2WWlSRU1yUkpVNzg5Q0g4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUE1oTld4Z1NiRDkreEkvMkdZS2FZSDY1ejZVVDRxL01TRHBjN1FVWUlWdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJMWlNZ3Z1d2xRWWdFWWU4azZrRkF0TUFMamZUVG9NZmZDSVdVdHRiQ1VIVFZCYUNiSFVWUFVZbDNEamtMOHowQkhHaVVOWlJxTnpjU0N2SVFjczdCdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzEsXCJhZHZTZWNyZXRLZXlcIjpcImt3cEVtcjBZbDk4THZNWkZUZ1h2RzhiUTV0WDQrVHRjQnpXTUw1eUg2eDA9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJfcW02TDBqTFJjV3J4bzJZakJtNGJRXCIsXCJwaG9uZUlkXCI6XCJlN2RjODczYy0zYjU5LTQ5NjgtOTM4MC1lMTUxYmNmMjYwNTNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlc5cFhsUmwxa3paazBoQll0WkhoTlZxSE5VZz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaTgwSTh1YXI1NUlOL1M1STA4L3ZvSkMyQXJNPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQSzgzOG9GRUxqR3phNEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiVklRc0pmUDlGS05ueW4vOUtUcDVNSE5BSVYzdnRoM0dSSklBNzk2R01nOD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInEwUXNEWHd5Vk81czlCdFR5Snl4Y2xsdk8rUXplZDZxZFN5blVzZkFnTXAwZXp2bysvOStsbFVJb0Y0WlJXQXpFZmlWSklGV3lKUDN3cGo0RkRaRERnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiS3Q0NU15NTlybEw2YlkxMGt3ZVFHVFpWdXBqaE9Rd1FHNWs5MGVPVGhYb3VMaVMzZ0ZaYkcxWGNkUWVJTklONnNOSlNId29HcURWTFpJcUdCMVpzQkE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIzNDgxNDE5NTg0MjI6NUBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwi6qeB4Ly6Y29ubmFkcmVr4Ly76qeCXCIsXCJsaWRcIjpcIjEzOTUzOTYyODcyNDI3OTo1QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxNDE5NTg0MjI6NUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJWU0VMQ1h6L1JTalo4cC8vU2s2ZVRCelFDRmQ3N1lkeGtTU0FPL2VoaklQXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODM1MjMxNixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFDMUJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTdnNuaVUzeVdWMVJVeHBmU2FJMTNXL2VTNFNQcE1zUGpqUmUrRjQzd2RVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTg5MzA3OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNDUzMDk5NjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Rm5yQXFDRFh2RHRQMGJMVGdYOEFXOWtVYUxuMlJiVkg5dlhpbEFwOEQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTg5MzA3OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMwOC5qc29uIjogIntcImtleURhdGFcIjpcIkpsS29YdElWU3FzNEo5TGtVSUZhVTlNNUg5MDdPR2hhL2FPdWlxMHpvazg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5ODkzMDc5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODM0MDIwMDU1MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMwOS5qc29uIjogIntcImtleURhdGFcIjpcIjRYQUY4WjY3Q3pKcmxWcXFScFRIZlhQNVkzckZCbmdhZnhNYWxQRkpYejQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5ODkzMDc5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzBfXy5qc29uIjogIntcImtleURhdGFcIjpcIlJ5bEpxMXR4ZFZnMEx5cFlqR2xXWWRrNXhoRXhUVWU3aHdxZStNdnVEZWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5ODkzMDgwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzFBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnMzNk1zTEJDRi9HemJCV0lFQ1lZdFBtRWlLNnFya2daSnVhcmJBZU5HZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDk4OTMwODAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4MzQ2NTEyMTc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzFCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmlzeGlaRGVCbmtIdElGOGk0NUpNNzZkeXl5SHBkUjNxZmNoU0JhdkF6az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDk4OTMwODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNYWE3RlZkcFRUTWYwZ3ZtRitjR2RiZDlDcGw3M3pwRnNFWDlQTHMyOXJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTg5MzA4MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNDc3MzI0MDdcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
