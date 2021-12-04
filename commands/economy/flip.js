module.exports = {
  
  name: "flip",
  aliases: ['f', 'fp',],
   code: `
$if[$randomText[down;up;]==$message[1]]
$thumbnail[$userAvatar[$authorID]]
$title[You Win

Your Balance ! $$getGlobalUserVar[money] 💵

]



$footer[Lucky Winner]


$color[00FF09] 
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$message[2]];$authorID]


$onlyIf[$message[2]<=$getGlobalUserVar[money;$authorID];You can't bet more then you have in your wallet!]

$suppressErrors[Correct usage: $getServerVar[prefix]flip down/up <ammount>]

$argsCheck[>1;Please type up/down!]
$argsCheck[>2;Please enter your bet!]

$else

$thumbnail[$userAvatar[$authorID]]
$title[You Lost

Your Balance ! $$getGlobalUserVar[money] 💵

]



$footer[Looser]


$color[FF0000] 
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message[2]];$authorID]

$argsCheck[>1;Please type down/up!]
$argsCheck[>2;Please enterammount!]


$onlyIf[$message[2]<=$getGlobalUserVar[money;$authorID];You can't bet more then you have in your wallet!]

$argsCheck[>1;Please type up/down!]
$argsCheck[>2;Please enter your bet!]

$suppressErrors[Correct usage: $getServerVar[prefix]flip down/up <ammount>]
$endif

   `
}