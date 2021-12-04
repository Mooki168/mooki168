require("http").createServer((req, res) => res.end("Bot online!")).listen(process.env.PORT || 8080)

//Make sure to check the README.md for other examples/usage

const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  token:'you',
  prefix: [`$getServerVar[prefix]`, '<@$clientID>', '<@!$clientID>'], // The server prefix, and mentioning the bot will both work as a prefix
  mobile: false //Whether or not the bot has a mobile status
})
bot.status({
  text: `with $randomText[$allMembersCount Users;$serverCount Server;$getServerVar[prefix]Help;$allChannelsCount Channels]`, // put any text
    type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
    status: "online", // online, dnd, idle, invisible
    time: 75 // amount of times where you can change the bot status (if have multiple statuses)
    })

    // FOR STREAMING STATUS USE THIS
    // bot.status({
    // text: "text", 
    // type: "STREAMING", 
    // url: "enter url/link"
    //   })
    // remove `//` in each side

// dbd.js 2.2.6 version    

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

// for dbd.js latest version
// remove all `//`
// delete the code above

// bot.musicStartCommand({
//  channel: "$channelID",
//  code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
//  })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })
// Callbacks
bot.onMessage({
  guildOnly: false, // Whether or not commands work in DMs
  respondToBots: false, //Whether or not the bot will respond to other bots
})
bot.onInteractionCreate()

// Ready Event
bot.readyCommand({
  channel: '',
  code: `$log[Ready on client $userTag[$clientID]]`
})

// Command Handler
bot.loadCommands('./commands')
//Bot Status (For more info check README)
bot.status({
  status: 'online', // options: online (if want mobile status, check above), idle, dnd, invisible 
  type: 'PLAYING', // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING (if you choose streaming, you can also add the url: '' property)
  text: `on $serverCount servers`
})

// Variables
bot.variables({
  prefix: '$'
})
bot.variables ({
  money: "250",
  bank: "0",
  fishrod:"0",
  fish:"0",
  health:"0",
  hp:"0",
  pick:"0",
  diamond:"0",
});