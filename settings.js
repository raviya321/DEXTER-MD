const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying ඔනනම් true කියලා දන්න  (true to on, false to off)
global.autoRecord = true //auto recording ඔනනම් true කියලාම තියන්න 😾 (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94757660788'] //ur owner number
global.ownernomer = "94757660788" //ur owner number2
global.ownername = "DEXTER 😾" //DONT EDITOR 😾
global.ytname = "MR LOKU RAVI_MD" //ur yt chanel name
global.socialm = "GitHub: 😾" //ur github or insta name
global.location = "Sri lanka" //ur location

//new
global.botname = "MR LOKU RAVI_MD"
global.ownernumber = '94778493845,94789958225'
global.ownername = 'DEXTER'
global.ownerNumber = ["94757660788@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/JXUE45NloA0DSUl549cmKL"
global.themeemoji = '🪀'
global.wm = "DEXTER"
global.botscript = 'https://github.com' //script link
global.packname = "Sticker DEXTER  By"
global.author = "DEXTER \n\n"
global.creator = "94778493845@s.whatsapp.net"
global.dexter = ['']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = '='

//messages
global.mess = {
    success: 'Here you go DEXTER BOTS !', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
