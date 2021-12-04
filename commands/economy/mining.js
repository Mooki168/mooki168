module.exports = {
  
  name: "mining",
  code: `$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$random[0;5]]]
  $setGlobalUserVar[hp;$sub[$getGlobalUserVar[hp];$random[0;4]]]
$title[**$username** Get:]
$color[$random[10000;999999]]
$description[$random[0;5] Diamond 💎 !, \`$getServerVar[prefix]selldiamond\` to sell 1 diamond for $1000]
$globalCooldown[5m;**⏰ Wait for %time% to mining again!**]
$onlyIf[$getGlobalUserVar[hp]>=1;You don't have that much health Picks pls buy in shop Now.]
$image[https://media.discordapp.net/attachments/805701726497800217/872691505163272212/dd.gif]
`
}