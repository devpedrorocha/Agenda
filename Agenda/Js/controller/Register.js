import { servidor } from "../server/client-server.js";

let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")

let form = document.querySelector('.formulario_registro')

form.addEventListener('submit', async (event) => {
    try {
        event.preventDefault()
        let name = nameInput.value
        let email = emailInput.value
        let password = passwordInput.value
        await servidor.registrarCliente(name, email, password)
        window.location.href = '/login.html'
        alert("Registrado com sucesso!")
    } catch (error) {
        alert(error)
    }

})
