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
        
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.userProfile = (req,res) => {
    console.log("datatata");
    try {
        userHelpers.doUpdate(req.body).then((data) => {
           res.status(200).json(data)
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

exports.userprofileGet = ( req,res) => {
    try {
        console.log(req.query);
        userHelpers.doData(req.query.id).then((data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        
    }
}