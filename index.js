const Discord = require("discord.js");
const sql = require("sqlite")
const prefix = ">"
sql.open("./database")

var bot = new Discord.Client

var lcalc = [
    " 11% - this relationship might not work out very well.... :sob:",
    " 13% - :triumph: :hand_splayed: :lying_face: ",
    " 17% - this relationship might not work out very well.... :sob:",
    " 27% - this relationship might not work out very well.... :sob:",
    " 33% - this relationship might work out.... :confused:",
    " 48% - this relationship will probably work out :wink:",
    " 63% - this relationship will totally work out :wink:",
    " 69% - maybe later you can, you know, pip pip the diddly doo :wink:",
    " 78% - :tongue: :weary: :fire: :wink:",
    " 84% - why don't you sex each other? :wink: ",
    " 97% - smells like true love :heart:",
    " 100% - pure love :heart:"
]

var gaypercentage = [
    " is 99% gay",
    " is 101% gay",
    " is 88% gay",
    " is 70% gay",
    " is 50% gay",
    " is 30% gay",
    " is 10% gay",
    " is 3% gay",
    " is 0% gay"
]

var rpercentage = [
    " is 99% retarded",
    " is 101% retarded",
    " is 88% retarded",
    " is 70% retarded",
    " is 50% retarded",
    " is 30% retarded",
    " is 10% retarded",
    " is 3% retarded",
    " is 0% retarded"
]

var fortunes2 = [
    " has a 1 inch dick",
    " has a 60 inches huge peen",
    " has a 20,33333 inches  penis",
    " has a 5 inches dick",
    " has a 8 inches cock",
    " has a 4 inches penis",
    " has a 18 inches dick",
    " has a 44 inches peen",
    " has a 13 inches cock",
    " has a 3 inches cock",
    " has a 1,7 inches dick"
];

var for3 = [
        " have a 1 inch dick",
        " have a 60 inches penis",
        " have a 20,33333 inches  penis",
        " have a 5 inches dick",
        " have a 8 inches cock",
        " have a 4 inches penis",
        " have a 18 inches dick",
        " have a 44 inches peen",
        " have a 13 inches cock",
        " have a 3 inches cock",
        " have a 1,7 inches dick"
    ];

var gifts = [
    " a blueberry",
    " a loaf of bread",
    " a chocolate bar",
    " a fleshligt",
    " sum tuna",
    " sum fucc",
    " a kiss",
]

var slenny = [
    "  ̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿ ",
    "  ༼ つ ◕_◕ ༽つ",
    " (ಥ ͜ʖಥ)",
    " (▀̿Ĺ̯▀̿ ̿)",
    " (͡• ͜໒ ͡• )",
    " ( ͡° ͜ʖ ͡°)",
    " (づ｡◕‿‿◕｡)づ",
    " ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴",
    " (͡ ͡° ͜ つ ͡͡°)",
    " /╲/\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\╱\ "
]


bot.on("ready", () => {
    });
    console.log("Ready")

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    let user = message.mentions.users.first()

    let logs = message.guild.channels.find('name', 'transaction-logs')

    let gigcount = await sql.all(`SELECT * FROM logs WHERE guildid = "${message.guild.id}"`)

    switch (args[0]) {
        case "ping":
        message.channel.sendMessage("Pong!");
        break;
    case "dicklength":
        let dmember = message.mentions.members.first();
        if (!dmember) message.reply(`according to my calculations,you ` + for3[Math.floor(Math.random() * for3.length)])
        else message.reply(`${dmember}` + fortunes2[Math.floor(Math.random() * fortunes2.length)])       
        break;
    case "help":
        var help = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .addField("**Basic Commands**", "`userinfo`, `serverinfo`, `avatar`, `help`, `itemlist`")
          .addField("**Fun Commands**", "`dicklength`, `gay`, `retarded`, `lovecalculator`, `cum`, `say`, `gift`, `lenny`")
          .addField("**Economy Commands**", "`daily`, `balance`, `inventory`, `buy`, `donate`")
          .setFooter(`Requested by: ` + message.author.username+ " #" + message.author.discriminator, message.author.avatarURL)
        message.channel.sendEmbed(help)
          break;
    case "serverinfo":
        var server = new Discord.RichEmbed()
        .setTitle(`**${message.guild.name}**`)
        .setColor(0x00ffff)
        .setThumbnail(message.guild.iconURL)
        .addField(`Server ID:`, `${message.guild.id}`)
        .addField(`Channels:`, `${message.guild.channels.size}`)
        .addField(`Created at:`, `${message.guild.createdAt}`)
        .addField(`Amount of members:`, `${message.guild.memberCount}`)
        .addField(`Owner:`, `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
        .addField(`Owner's ID:`, `${message.guild.owner.id}`)
        message.channel.send(server)
        break;
    case "lenny":
        let modrole = message.guild.roles.find("name", "bot commander")
        if (!message.member.roles.find("name", "bot commander")) 
          return message.reply("you need the `bot commander` role in order to use this command...")
                     .then(m => m.delete(2000));
        message.channel.sendMessage(`${message.author} says` + slenny[Math.floor(Math.random() * slenny.length)])
        message.delete().catch(O_o=>{});
        break;
    case "pepes":
        if (!message.member.roles.find("name", "sum fisher")) return message.reply("You cant't use that command")
        message.channel.sendMessage(`${message.author} says  <:pepesad:360786365148954624> `)
        break;
    case "gift":
        let gmember = message.mentions.members.first();
        if (!gmember) return message.reply("Mention someone to give them a gift!")
        message.channel.sendMessage(`${gmember.user}, you just got` + gifts[Math.floor(Math.random() * gifts.length)] + ` from ${message.author}.`)
        break;
    case "userinfo":
        let imember = message.mentions.users.first();
        var uinfo = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor("#e00808")
        .addField("Username", `${message.author.username}`)
        .addField("Nickname", `${message.author.nickname}`)
        .addField("ID", `${message.author.id}`)
        .addField("Profile Picture", `${message.author.avatarURL}`)
        .addField("Joined Discord", `${message.author.createdAt}`)
        .setFooter(`Requested by: ${message.author.username}` + message.author.avatarURL)
        if (!imember) return message.channel.sendEmbed(uinfo)
        var minfo = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor("#e00808")
        .addField("Username", `${imember.username}`)
        .addField("Nickname", `${imember.nickname}`)
        .addField("ID", `${imember.id}`)
        .addField("Profile Picture", `${imember.avatarURL}`)
        .addField("Joined Discord", `${imember.createdAt}`)
        .setFooter(`Requested by: ` + message.author.username+ " #" + message.author.discriminator, message.author.avatarURL)
        message.channel.sendEmbed(minfo)
        break;   
    case "cmods":
        let text = args.slice(1).join(' ');
        let staffchannel = message.guild.channels.find('name', 'staff');
        if (!text) return message.reply("You must enter a text")
        if (!staffchannel) return message.reply("There's no `staff` channel in this guild")
        var txtembed = new Discord.RichEmbed()
        .addField(`**${message.author.username}**`, `Would like to say ${text}`)
        .addField('**User ID**', `${message.author.id}`)
        return message.guild.channels.get(staffchannel.id).send(txtembed);
        break;
    case "contactmods":
        var embeed = new Discord.RichEmbed()
        .setTitle("Contact Mods")
        .addField('**Usage**', '`;cmods <your_text_here>`')
        .addField('**Aliases**', '`;cmods`')
        .addField('*this command shall be used only if you want to report any bug/glitch*', '*or have any suggestion regarding this server^s improvement*')
        .addField('*also, staff will take their time and read your requests, so patiently wait for your dm respond*', 'any abusive usage of this command will result into a kick')
        .setFooter('@CatSniper')
        message.channel.sendEmbed(embeed);
        break;
    case "cum":
        let cumuser = message.mentions.users.first()
        if (!cumuser) return message.reply("Mention someone and see the magic happen")
        message.delete().catch(O_o=>{});
        message.channel.sendMessage("= :punch: ===D").then(m => setTimeout(m.edit(`=== 👊 =D 💦 ${cumuser}`), 10000)).then(r => setTimeout(r.edit(`=== 👊 =D blyat ${cumuser}`), 20000))
        break;
    case "gay":
        let gayuser = message.mentions.users.first()
        if (!gayuser) return message.reply("mention someone to find out how gay they are. e.g. `()gay @example`")
        message.reply(`according to my calculations, **${gayuser}**`+ gaypercentage[Math.floor(Math.random() * gaypercentage.length)])
        break;
    case "lovecalculator":
    let firstuser = message.mentions.users.first()
    let seconduser = message.mentions.users.last()
    if(!firstuser) return message.reply("no user")
    if(!seconduser) return message.reply("no 2nd user")
    var lovbed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Love Calculator")
    .addField(`**${firstuser.username}** & **${seconduser.username}**`, lcalc[Math.floor(Math.random() * lcalc.length)])
    message.channel.sendEmbed(lovbed)
        break;
    case "retarded":
        let ruser = message.mentions.users.first()
        if (!ruser) return message.reply("mention someone to find out how retarded they are. e.g. `()retarded @example`")
        message.reply(`according to my calculations, **${ruser}**`+ rpercentage[Math.floor(Math.random() * rpercentage.length)])
        break;
    case "say":
    if (!message.member.roles.some(r=>["bot commander"].includes(r.name)) ) 
        return message.reply("you need the `bot commander` role in order to use this command...")
                   .then(m => m.delete(2000));
    var sayMessage = args.slice(1).join(' ');
    message.delete().catch(O_o=>{});
    message.channel.send(`${sayMessage}`);
        break;
    case "daily":
    sql.run(`INSERT INTO daily (messageauthorid, cooldown, coins) VALUES (?, ?, ?)`, [message.author.id, Date.now(), 100])
    sql.run(`SELECT cooldown FROM daily WHERE messageauthorid = "${message.author.id}"`).then(row => {
            sql.run(`UPDATE daily SET cooldown = ${Date.now()} WHERE messageauthorid = "${message.author.id}"`);
        
    })
    let cd = await sql.get(`SELECT cooldown FROM daily WHERE messageauthorid = "${message.author.id}"`)
    let timer = 10000000
    console.log(Date.now())
    if (cd.cooldown + timer < Date.now()) {
        sql.get(`SELECT * FROM daily WHERE messageauthorid ="${message.author.id}"`).then(row => { 
                sql.run(`UPDATE daily SET coins = ${row.coins + 100} WHERE messageauthorid = "${message.author.id}"`);
            var discembed = new Discord.RichEmbed()
            .setDescription(`${message.author.username} has just claimed their daily coins :moneybag:`)        
            message.channel.sendEmbed(discembed)
        }).catch(() => {
            console.error      
    })
 }
    else {
        let cdtime = Math.abs((Date.now() - (cd.cooldown + timer)));
        console.log(cdtime);
        return message.reply(`your daily coins haven't refreshed yet...`)
    }
        break;
    case "balance":
        sql.get(`SELECT coins FROM daily WHERE messageauthorid ="${message.author.id}"`).then(row => {
          var mybed = new Discord.RichEmbed()
          .setColor(0xFFA367)
          .setDescription(`${message.author.username} has ${row.coins} coins! :moneybag:`)
          if (!row) return message.reply('ya have no coins yet.')
          message.channel.send(mybed)
        }).catch(() => {
          console.error;
  });
    break;
  case "donate":
  if (!user) {
   return message.channel.send("please mention someone") 
              .then(m => m.delete(2000));
  }
  let amount = args.slice(2).join(' ');

  if (!amount) {
      return message.reply('you havwent specified an amount of money to give')
  }

  var transaction = new Discord.RichEmbed()
  .setTitle('Transaction')
  .setThumbnail(message.author.avatarURL)
  .setDescription(`${message.author.username} has donated ${amount} to ${user.username}`)

  sql.get(`SELECT * FROM daily WHERE messageauthorid ="${message.author.id}"`).then(row => {
   if (row.coins < amount) return message.reply("you dont have enough coins")
   if (!row) {
       sql.run(`DELETE FROM daily (coins, messageauthorid) VALUES (?, ?)`, [amount, message.author.id]);
   }
   else { 
       sql.run(`UPDATE daily SET coins = ${row.coins - amount} WHERE messageauthorid = "${message.author.id}"`);
   }
   })
  sql.get(`SELECT * FROM daily WHERE messageauthorid ="${user.id}"`).then(row => {
   if (!row) {
       sql.run(`INSERT INTO daily (coins, messageauthorid) VALUES (?, ?)`, [amount, user.id]);
   }  
   else { sql.run(`UPDATE daily SET coins = ${row.coins + amount} WHERE messageauthorid = "${user.id}"`);
       message.channel.send(`${message.author.username} donated ${amount} coins to ${user.username}`)
   }
   })
   
   if (gigcount == 0) {
       return
   }

   else {
    if (!logs) {
       return message.channel.send('theres no `transaction logs` channel in this server')
   }
    else message.guild.channels.get(logs.id).send(transaction)
}
   break;

    break;
    case "logs":
        if (args [1] == "enable") {
            if (gigcount == 1) return message.reply(`nana`)
           sql.run(`INSERT INTO logs (guildid) VALUES (?)`, [message.guild.id])
           message.channel.send(`ez done`)
        }
           
        if (args [1] == "disable") {
            if (gigcount == 0) return message.reply(`nana`)
            sql.run(`DELETE FROM logs WHERE guildid = "${message.guild.id}"`)
            message.channel.send(`ez done`)
        }
        break;   
    case "moneyraid":
        let amountt = args.slice(1).join(' ')
        if (!amountt) return
        if (args[2]) return
        if (message.author.id !== "244461194545594369") return;
        else sql.get(`SELECT coins FROM daily WHERE messageauthorid ="${message.author.id}"`).then(row => {
            if (!row) {
                sql.run(`DELETE FROM daily (coins, messageauthorid) VALUES (?, ?)`, [amountt, message.author.id]);
            }
            else { 
                sql.run(`UPDATE daily SET coins = ${row.coins + amountt} WHERE messageauthorid = "${message.author.id}"`);
            }
            })
        
        var raid = new Discord.RichEmbed()
        .setDescription(`:eggplant:`)
        message.channel.send(raid)
        break;
    default:
    return;
}
});

bot.login(process.env.BOT_TOKEN)
