module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball','b','see'],
  code: `$title[Your Balance $username[$findMember[$message]]]
$thumbnail[$userAvatar[$findMember[$message]]]
$description[💵 **| Cash**
$$getGlobalUserVar[money;$findMember[$message]]

💳 **| Bank**
$$getGlobalUserVar[bank;$findMember[$message]]]

$color[$random[0;999999]]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
}