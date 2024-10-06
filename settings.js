const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9wV3pIdVZSeGdzKzNXaTJzUTd0cHV1TGdFaVdwUC8xU2hyQXdrditIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pUU2k5K24wSGRMTEgzUGtvdW1ML05pRkx4ZlZ3ODlWT3ozUEhMc2ZDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ0QxYkhqdDFwYklCalRoNnJKVnhWMHBvbnJ2RUxEOEN2cGJiZ211YkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aTdvMTh3YmFXZjdOd2YxNjRXdm5sTHhYL0o2VUQyV1oyMkVxQTUvU0V3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBb2g5WWYrMGhodEVuc015Yit5TElJZU9jL2x3UkwrM2o5UEJvYmRaRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcrNHEvN1ZiNER1VERYOUxOb0drK3BxcUdyeTV4UWtUdkJCcHRqVG1RMUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEl5OVU2UlNZVzE5Z1NwTTN2TkJDTnZFMHRIMDZSQklLSElGakZOQWRrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibW55L2NTTm1yV0xvQXRkZnJYVzE2dkh0bWh3dWpZcHJpUnVkV3VVcnpGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4SlU4dWdBVDlLY2k0WGhPdytBaHR0dUpMVTdGVVB5K1pWMXJVMVAwcEo5Rk42TTk3VlFmVWgxSHRiTnFic21wdUc2Z2tBRDFZeUtYSENYNFdjamhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJ4bHNKSkI4YXRNaGQrUExMSVNLK3hicEdyQ3ZINTRTMDB4S2MwUG1UYXJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3Nzc1NjE4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDM0Y3NjRCRkFEOTBENkVGQzI1MjY4QkEwQ0Q5MERCRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MjI2ODk3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3Nzc3NTYxODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0QwQkE1MUI0NDE5MjE3RDU4NjhBNDRCRDJDRjMxN0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODIyNjkwM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVFlPQXU2TWRTcld5WjdzZkd6ZFYtQSIsInBob25lSWQiOiJjYzNiYmJiNS0wMWNiLTQ4YzgtYTM3YS1jYmVmZDEzNjBiNjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieExNa1cxY0NrRGdVM3NIcFRWUUlaYVdlbXZBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpiYmZmSlBObTBrY3RmSmNxY2luSXQ1OXZCUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFNkdNRUZKTSIsIm1lIjp7ImlkIjoiMjYzNzc3NzU2MTg0OjQyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikpvc2h1YW1hbWJvMSBFY291bkJhbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUtOOHFnRkVNSE1pcmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibjg3VGx6ZkVDcUJvMVpBSGJYUzRMeENRRnFSUXhkUWtyTkZiMjZqczYyWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVTJVbXM5ZlNIUjJ5SGw4ZEM1VTExalV2aktuQ2pwL0x5RXdDbndML0E5aHNQOTBIUnRockYrcU5UdVNmUm45VUJBTXJKUnc2VzZmVDJ2VFd0dmF2Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJGa0ZnZ0xTK2hHNTNXMEwwMWF4U0VHbmVjNS95eC9IVTRSYjRCMWFnNTEvZy9NVXEwcTF2UDlvaTB6VDJIUHFpSHlRbDE2WlA0OGlEMEN3QitCSWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc3NzU2MTg0OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlovTzA1YzN4QXFnYU5XUUIyMTB1QzhRa0Jha1VNWFVKS3pSVzl1bzdPdG0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgyMjY4OTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTF3In0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '263777756184' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '+' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
