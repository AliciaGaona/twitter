const User =require('./../../app/models/User')

class UserService{
 static create(id, username,name){
     return new User(id, username, name, "Sin bio") 
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

static getAllUsernames([user1],[user2],[user3],[user4]){
    const listAllUsername=[]
    listAllUsername.push(user1.username,user2.username, user3.username, user4.username)
    return listAllUsername
}
}

module.exports=UserService