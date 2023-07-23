const {Telegraf} = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
    ctx.reply('شروع ربات...')

})
bot.command('ctx', (ctx) => {
    const {chat, from, message, botInfo} = ctx
    const json = JSON.stringify({chat, from, message, botInfo}, null, 4)
    ctx.reply(json)
    console.log(json)
})
bot.hears('بی ادب', (ctx)=>{
    ctx.deleteMessage().then(res=>{
        ctx.reply('خودت بی ادبی')
    })

})

bot.launch().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log('error Bot', err)
})


