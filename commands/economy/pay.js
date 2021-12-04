module.exports = {
  
  name: "pay",
  code: `$title[Pay Money !]
$description[ You just Pay <@$mentioned[1]> $$message[2] Money !]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$message[2]];$mentioned[1]]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message[2]];$authorID]
$onlyIf[$message[2]<$getGlobalUserVar[money;$authorID];**You don't have that much cash!**]

$onlyIf[$message[2]>=1;**You can only Pay more than $1.**
$argsCheck[2;To Use: \`$getServerVar[prefix]Pay <@user> <ammount>\`]]
$color[$random[0;999999;]]

$image[https://media.discordapp.net/attachments/875007491715510323/916149598597287946/pay.gif]
`
}
