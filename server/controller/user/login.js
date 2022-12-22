const userHelpers = require('../../helpers/user_helpers')
const generateToken = require('../../utilities/generateToken')



exports.registerPost = (req,res) => {
    userHelpers.doSignUp(req.body).then((data) => {
        if(data === true){
            res.status(401).json("user is already registered")
        } else{
            res.status(200).json(req.body)
        }
       })
}

exports.loginUserPost = (req,res) => {
    userHelpers.doLogin(req.body).then((data) => {
        if(data.status === true){
            if(data.loginStaus === true) {
                data.token = generateToken(data.id)
                res.status(200).json(data)
            } else {
                console.log("block");
                res.status(401).json("You were blocked by admin")
            }
        } else {
                res.status(401).json("Invalid user")
        }
    })
}

exports.userHome = (req,res) => {
    try {
        userHelpers.doFind(req.query.id).then((data) => {
        //    res.status(200).json('12345')
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.userProfile = (req,res) => {
    console.log("111111111111111111111111");
    console.log(req.files);
    try {
        console.log("req.body");
        console.log(req.body);
        userHelpers.doFind(req.body.id).then((data) => {
        //    res.status(200).json('12345')
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}