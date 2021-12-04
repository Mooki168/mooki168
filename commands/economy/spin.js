module.exports = {
  
  name: "spin",
  aliases: ['sp','Spin'],
   code: `$thumbnail[$userAvatar[$authorID]]
$title[__** Spin 🎲 Money 💵 **__]
$color[00ff59]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[0;1000]]]
$description[
**@$username Successfully Spin 🎲 **And you get **$$random[0;1000]** Money 💵.]

$globalCooldown[5m;**⏰ Wait for %time% to Spin again!**]

$image[https://media.discordapp.net/attachments/805701726497800217/872707703225606256/sp.gif]

`
   

}