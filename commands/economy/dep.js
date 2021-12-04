module.exports = {
  
  name: "dep",
  code: `
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
$description[**Success deposit $$message Cash to bank!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[money];**The deposit should not exceed the money you have!**]
$onlyIf[$message>=1;**You can only deposit more than $1.**]
$argsCheck[>1;Use: \`$getServerVar[prefix]dep <Ammount>\`]`
}