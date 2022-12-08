const client = require('../index')
const config = require('../config.json')
const prefix = config.prefix;

client.once('ready', () => {
   
   //Console
   console.log(`\n#######################################################`);
   console.log(`# ${client.user.tag} has just started ! #`);
   console.log(`#######################################################`);
   console.log(` `);
   
   //Status Bot
   client.user.setStatus("dnd"); //online, idle, dnd, invisible
   
   //Activating the Bot
   client.user.setActivity(`${prefix}help`, {type:'PLAYING'})
 })