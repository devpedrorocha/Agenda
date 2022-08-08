import { servidor } from "../server/client-server.js";

let emailInput = document.querySelector(".email")
let passwordInput = document.querySelector(".password")

let form = document.querySelector('.formulario_login')


form.addEventListener('submit', async (event)=>{
    try{
        event.preventDefault()
        let email = emailInput.value
        let password = passwordInput.value
        const resposta = await servidor.logarUsuario(email, password)
        if (resposta.success == true){
            localStorage.setItem("authKey", [resposta.data.authKey])
            localStorage.setItem("name", [resposta.data.name])
            window.location.href = '/agenda.html'
        }else{
            alert(resposta.error)
            form.reset()
        }
         
    }catch(error){
        alert(resposta.error)
        form.reset()
    }
    
})

