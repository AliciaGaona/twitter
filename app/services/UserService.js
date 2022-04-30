const User =require('./../../app/models/User')

class UserService{
 static create(id, username,name){
     return new User (id, username, name, "Sin bio") 
 }
 static getInfo(user){
     const listUser=[]
     listUser.push(1, "carlogilmar", "Carlo","Sin bio")
     return listUser
 }
 static updateUserUsername(user,newUsername){
    user.username= newUsername
    return user.username
}

}

module.exports=UserService