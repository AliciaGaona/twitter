const User =require('./../../app/models/User') //indicampos ruta del modelo User a ocupar(require)


class UserService{
 static create(id, username,name){//metodo estatico que solo recibe los parámetros del `id`, `username` y `name`
     return new User (id. username, name, "Sin bio") //regrtesará un nuevo usuario objeto con los datos que recibe
 }
}

module.exports=UserService// exporto clase