const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () =>{
    test("Return an error object when try to create a new user with an null payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/);

    });

    test("Return an error object when try to create a new with a payload with invalid properties", ()=>{
        const payload = {username:null, name:12, id:"id"}
        const result= UserView.createUser(payload)
        expect(result.error).toMatch(/Necesitan tener un valor válido, ningun valor puede ser nulo/)
    })

    test("Create a user by a given valid payload", ()=>{
        const payload = {id:1, name:"name", username:"username"}
        const result= UserView.createUser(payload)
        expect(result.id).toBe(1)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
    })

 })