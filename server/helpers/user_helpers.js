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

                // file upload
               
                //   file upload


                bcrypt.hash(userData.password,10,(err,hash) => {
                    if(err) throw err
                    else {
                        console.log(hash);
                        userData.password = hash
                        userData.loginStaus = true;
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
        return new Promise((resolve, reject) => {
            connection.get().collection(collection.USER_DETAILS).findOne({_id : ObjectID(id)}).then((data) => {
                resolve(data)
            })
        })
    }
}


const profileAdd = async(image) => {
    try{
        const cloudinaryImageUploadMethod=(file)=>{
          return new Promise((resolve)=>{
            cloudinary.uploader.upload(file,(err,res)=>{
              if(err) return res.status(500).send('upload image error')
              resolve(res.secure_url)
            })
          })
        }
        const files=req.files
        let arr1=Object.values(files)
        let arr2=arr1.flat()
        
        const urls=await Promise.all(
          arr2.map(async (file)=>{
            const {path} = file;
            const result= await cloudinaryImageUploadMethod(path)
            return result
          })
          
        )
        fs.unlinkSync(req.files.path);
    
   
       
      }  catch{
        res.redirect('/404')
      }
       
}