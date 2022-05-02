const UserService = require('../services/UserService')


class UserView{
    static createUser(payload){
        if(payload==null)
        {
            return {error:"payload no existe"}
        }
        else if(payload.username==null || payload.name==null||payload.id==null){
            return {error:"Necesitan tener un valor válido, ningun valor puede ser nulo"}            
        }
        else if( typeof payload.username==="string" || payload.name==="string"||payload.id==="number"){
            return {error:"Necesitan tener un valor válido"}            
        }else{
            return UserService.create
        }

    

}

}

module.exports=UserView
