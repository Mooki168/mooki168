module.exports = {
  
  name: "fish",
  code: `$description[You fish at $randomtext[Bath;River;Pond;Swimming Pool;Sea], and you get **$random[0;8] Kg Fish.** \`$getServerVar[prefix]sellfish\` to sell 5Kg of fish for $250]
$color[$random[0;999999]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[0;8]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;15]]]
$globalCooldown[5s;**⏰ Wait for %time% to fishing again!**]
$onlyIf[$getGlobalUserVar[health]>=1;You don't have that much health Fishing equipment pls buy in shop Now.]
$onlyIf[$getGlobalUserVar[fishrod]>=1;There is no fishing rod!]
$image[https://media.discordapp.net/attachments/805701726497800217/872690438128144464/fish.gif]
`
}