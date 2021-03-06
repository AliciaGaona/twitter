const UserService = require('../services/UserService')


class UserView{
    static createUser(payload){
        if(payload===null)
        {
            return {error:"payload no existe"}
        }
        else if(payload.username===null || payload.name===null||payload.id===null){
            return {error:"Necesitan tener un valor válido, ningun valor puede ser nulo"}            
        }
        else if( typeof payload.username==='string' ||typeof payload.name === 'string' || typeof payload.id === 'number'){
            return UserService.create(payload.id, payload.username, payload.name)   
        }else{
            return {error:"Necesitan tener un valor válido"}
           
        }
    

    

}

}

module.exports=UserView
