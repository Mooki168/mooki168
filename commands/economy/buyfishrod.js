module.exports = {
  
  name: "buy-fishrod",
  code: `
$description[**@$username Success in buying a Fishing equipment🎣 !!**]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];100]]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];75]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[fishrod]<=1;You can only Pay more than 1 Fishing equipment 🎣 !]
$onlyIf[$getGlobalUserVar[money]>=75;Not enough money!]`
}