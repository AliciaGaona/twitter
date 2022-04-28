const User =require('./../../app/models/User')

describe("Unit Test for User class", ()=>{
    test('Create an User object', ()=>{
        //invocas el código que vas a usar en tu app
        const user= new User(1,"carlogilmar","Carlo","Bio")
        //aqui validas los resultados de ese código
        //esta es una comparacion que va a igualar el valor de la izq 
        //con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });
})

test('Add getters', () =>{
    const user = new User(1,"carlogilmar","Carlo","Bio")
    expect(user.getUsername).toBe("carlogilmar")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
});