module.exports = {
  
  name: "profile",
  aliases: ['pf'],
  code: `$author[profile.;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
$title[Your Profile $username[$findMember[$message]]
$thumbnail[$userAvatar[$findMember[$message]]]
$description[💵 **| Cash**
$$getGlobalUserVar[money;$findMember[$message]]
💳 **| Bank**
$$getGlobalUserVar[bank;$findMember[$message]]
**> Item :**
**Fishing equipment**: $getGlobalUserVar[fishrod;$findMember[$message]] 🎣 **Health**: $getGlobalUserVar[health;$findMember[$message]]% 
**Picks**: $getGlobalUserVar[pick;$findMember[$message]] ⛏️ **health**: $getGlobalUserVar[hp;$findMember[$message]]% 
**Fish**: $getGlobalUserVar[fish;$findMember[$message]] Kg
**Demonid**: $getGlobalUserVar[diamond;$findMember[$message]] 💎
]
$image[https://media.discordapp.net/attachments/805701726497800217/872471164063186954/bunny1.gif]
$color[$random[0;999999]]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp
`
}