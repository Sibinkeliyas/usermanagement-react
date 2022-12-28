const adminHelpers = require("../../helpers/adminHelpers")

adminHelpers

exports.adminLogin = (req,res) => {
    console.log(req.body);
    adminHelpers.doLogin(req.body).then((data) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(data );
        if(data === null) {
            res.status(401).json("Invalid user") 
        } else if(data.status == true) {
            res.status(200).json(data)
        } else {
            res.status(401).json("Invalid user") 
        }
    })
}

exports.adminHome = (req,res) => {
    adminHelpers.doFindAllUser().then((data) => {
        console.log("daeae");
        console.log(data);
        if(data != null) 
        {
            res.status(200).json(data)
        }
    })
}

exports.adminupdate = (req,res) => {
    adminHelpers.doUpadteUser(req.body).then((data) => {
        if(data === true){
            res.status(400).json("email is already there")
        } else {
            res.status(200).json(data)
        }
    })
    
}

exports.adminBlock = (req,res) => {
    console.log("data");
    adminHelpers.blockUser(req.body).then((data) => {
        if(data != null){
            res.status(400).json(data)
        } else {
            res.status(200).json(null)
        }
    })
    
}