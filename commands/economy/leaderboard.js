module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `$author[leaderboard Money .;https://cdn.discordapp.com/attachments/875007491715510323/916154624052985886/moneys.gif] 
    $title[Top Leaderboard]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[money;asc; {top}. {username} - {value}💵]]
    
    $cooldown[2s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})