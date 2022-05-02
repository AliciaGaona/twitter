const UserService = require('../services/UserService')
const User =require('./../../app/models/User')
class UserView{
    static createUser(payload){
        if(payload==null)
        {
            return {error:"payload no existe"}
        }
        else if(payload.username==null || payload.name==null||payload.id==null){
            return {error:"Necesitan tener un valor válido, ningun valor puede ser nulo"}            
        }
       

    

}

}

module.exports=UserView
