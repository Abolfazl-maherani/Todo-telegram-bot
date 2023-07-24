const {bot} = require("../setup");
bot.on('new_chat_members', (ctx=>{
    console.log(ctx.message)
    const username = ctx.message.new_chat_member?.first_name ?? ctx.message.new_chat_members?.username
    ctx.reply(`
    سلام
    ${username}
     عزیز به این گروه خوش اومدی.
    `)
}))
