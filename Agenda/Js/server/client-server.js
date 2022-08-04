
let registrarCliente = (nome, email, password)=>{

    return fetch("http://localhost:3333/enter/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: nome,
            email: email,
            password: password
        })
    })
    
}



let logarUsuario = async (email, password) => {

    return fetch("http://localhost:3333/enter/login", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password 
        }) 
    })
    .then(response => {
        return response.json()
    })
        
}


let viewContacts = async (key) =>{

    return fetch("http://localhost:3333/api/viewContacts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization-token" : `${key}`,
        }
    })
        .then(response => 
            {return response.json()})

}

let addContact = async (name, number, key) => {

    return fetch("http://localhost:3333/api/addContact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization-token" : `${key}`,
        },
        body: JSON.stringify({
            name: name,
            number: number
        })
    })
        .then(response => {
            return response.json()
        })

}


export let servidor = {registrarCliente, logarUsuario, viewContacts, addContact}
