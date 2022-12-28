const connection = require('../config/connection')
const collection = require('../config/collection')
const { ObjectID } = require('bson')
const { Collection } = require('mongodb')


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
                
                resolve(admin)
            }
        })
    },
    doFindAllUser : () => {
        return new Promise(async(resolve, reject) => {
           let data = await connection.get().collection(collection.USER_DETAILS).find().toArray()
           resolve(data)
        })
    },
    doUpadteUser : (userData) => {
        return new Promise(async(resolve, reject) => {
            let userStatus = false
             let user = await connection.get().collection(collection.USER_DETAILS).findOne({email : userData.email})
             if(!user) {
                connection.get().collection(collection.USER_DETAILS).updateOne({email : userData.oldEmail},
                    {
                        $set : {email : userData.email,name : userData.name}
                    }).then((data) => {
                        resolve(data)
                    })
             } else {
                userStatus = true;
                resolve(userStatus)
             }
        })
    },
    blockUser : (userdata) => {
        return new Promise(async(resolve, reject) => {
            console.log("serfadta");
            console.log(userdata.user);
            let user = await  connection.get().collection(collection.USER_DETAILS).findOne({email : userdata.user.email})
            if(user.loginStaus === true){
                connection.get().collection(collection.USER_DETAILS).updateOne({email : user.email},{
                    $set : {loginStaus : false}
                }).then((data) => {
                    console.log("user find");
                    console.log(data);
                    resolve(data)
                })
                
            } else {
                connection.get().collection(collection.USER_DETAILS).updateOne({email : user.email},{
                    $set : {loginStaus : true}
                }).then((data) => {
                    console.log(data);
                    resolve(data)
                })
            }
          
        })
    }
}
