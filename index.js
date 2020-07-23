const nondemailer  = require("nodemailer")
const auth = require("./data/auth.json")

let transporter = nondemailer.createTransport({
    service: auth.service,
    auth:{
        user:auth.user,
        pass:auth.pass
    }
})

let mailOptions = {
    from : auth.user,
    to : auth.to,
    subject:"It's work!",
    text: "YES"
}

transporter.sendMail(mailOptions,function(err,data){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Mail was sent!")
    }
})