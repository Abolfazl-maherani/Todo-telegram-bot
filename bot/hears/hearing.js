const {bot} = require("../setup");
bot.hears(/[0-9]/, (ctx)=>{
    ctx.reply('ممنون که امروزم به قولت عمل کردی')
})
