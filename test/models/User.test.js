const User =require('./../../app/models/User')

describe("Unit Test for User class", ()=>{
    test('Create an User object', ()=>{
        //invocas el código que vas a usar en tu app
        const user= new User(1,"carlogilmar","Carlo","Bio","dateCreated","lastUpdated")
        //aqui validas los resultados de ese código
        //esta es una comparacion que va a igualar el valor de la izq 
        //con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})