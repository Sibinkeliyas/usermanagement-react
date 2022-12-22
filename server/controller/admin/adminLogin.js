const adminHelpers = require("../../helpers/adminHelpers")

adminHelpers

exports.adminLogin = (req,res) => {
    console.log(req.body);
    adminHelpers.doLogin(req.body).then((data) => {
        console.log(data);
        if(data.status === true) {
            res.status(200).json(data)
        } else {
            res.status(401).json("Invalid user")
        }
    })
}