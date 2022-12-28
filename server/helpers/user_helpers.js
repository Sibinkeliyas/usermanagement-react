const connection = require('../config/connection')
const collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { ObjectID } = require('bson')
const cloudinary = require('../cloudinary') 



module.exports = {
    doSignUp : (userData) => {
        return new Promise(async(resolve, reject) => {
            let user =await connection.get().collection(collection.USER_DETAILS).findOne({email : userData.email})
            let emailStatus = false
            if(!user){
                bcrypt.hash(userData.password,10,(err,hash) => {
                    if(err) throw err
                    else {
                        console.log(hash);
                        userData.password = hash
                        userData.loginStaus = true;
                        userData.image = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s"
                        connection.get().collection(collection.USER_DETAILS).insertOne(userData).then((data) => {
                            resolve(data)
                        })
                    }
                })

            } else {
                emailStatus = true
                resolve(emailStatus)
            }        
        })   
    },
    doLogin : (userData) => {
        return new Promise(async(resolve, reject) => {
            let user =await connection.get().collection(collection.USER_DETAILS).findOne({email : userData.email})
            if(user){
                if(user.loginStaus){
                    bcrypt.compare(userData.password,user.password,(err,result) => {
                        let response = user;
                        if(err) console.log(err);
                        else if(result === true) {
                           
                            response.status = true
                            resolve(response)
                        } else{
                            resolve(response.status = false)
                        }
                        
                    })
                } else{
                    loginStatus = true
                    resolve(emailStatus)
                }
            } else{
                emailStatus = true
                resolve(emailStatus)
            }
        })
    },
    doFind : (id) => {
        return new Promise(async(resolve, reject) => {
            connection.get().collection(collection.USER_DETAILS).findOne({_id : ObjectID(id)}).then((data) => {
                resolve(data)
            })
        })
    },
    doUpdate : (details) => {
        return new Promise(async(resolve, reject) => {
            connection.get().collection(collection.USER_DETAILS).updateOne({
                _id : ObjectID(details.id)
            },
            {
                $set : {image : details.image}
            })

           
           resolve(details.image)
        })
    },
    doData : (details) => {
        return new Promise(async(resolve, reject) => {
            connection.get().collection(collection.USER_DETAILS).findOne({_id : ObjectID(details)}).then((data) => {
                resolve(data)
            })
         
        })
    }
}
