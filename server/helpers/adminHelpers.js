const connection = require('../config/connection')
const collection = require('../config/collection')
const { ObjectID } = require('bson')


module.exports = {
    doLogin : async(adminData) => {
        return new Promise(async(resolve, reject) => {
            let status;
            let admin = await connection.get().collection(collection.ADMINLOGIN).findOne({email : adminData.email})
            console.log(admin);
            if(admin) {
                if(admin.password === adminData.password) {
                    admin.status = true
                    resolve(admin)
                } else {
                    admin.status = false
                    resolve(admin)
                }
            } else {
                admin.status = false
                resolve(admin)
            }
        })
    }
}
