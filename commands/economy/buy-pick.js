module.exports = {
  
  name: "buy-pick",
  code: `
$description[**@$username Success in buying a picks ⛏️ !**]
$setGlobalUserVar[hp;$sum[$getGlobalUserVar[hp];100]]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];100]]
$setGlobalUserVar[pick;$sum[$getGlobalUserVar[pick];1]]
$onlyIf[$getGlobalUserVar[hp]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[pick]<=1;You can only Pay more than 1 picks ⛏️ !]
$onlyIf[$getGlobalUserVar[money]>=100;Not enough money!]`
}