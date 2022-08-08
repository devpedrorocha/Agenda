import { servidor } from "../server/client-server.js";

import { deleteContact } from "./DeleteContact.js";

const inputName = document.querySelector(".nameContact")
const inputNumber = document.querySelector(".numberContact")
const form = document.querySelector(".contactsActions")
const btnAdd = document.querySelector(".addContact")

export async function editContact(event){
    event.preventDefault()

    const pai = this.parentNode
    const id = pai.id

    btnAdd.style.display = "none"
    pai.style.display = "none"

    const key = localStorage.getItem("authKey")

    const response = await servidor.viewContacts(key)
    response.data.forEach(element => {
        inputName.value = element.name;
        inputNumber.value = element.number;
    })
    

    const btnConcluir = document.createElement('button')
    const btnSair = document.createElement('button')
    btnConcluir.textContent = "Concluir"
    btnSair.textContent = "Sair"

    form.appendChild(btnConcluir)
    form.appendChild(btnSair)
    
    btnSair.addEventListener("click", ()=>{
        location.reload()
    })

    form.addEventListener("submit", async(event)=>{
        try{
            event.preventDefault()
            const novoContato = await servidor.editContact(id, key, inputName.value, inputNumber.value)

            if(novoContato.success == true){
               
                let li = document.createElement("li");
                li.id = novoContato.data.id
        
                li.innerHTML = `<span id="spanNome">Nome:${novoContato.data.name}</span> <span id="spanNumero">Número:${novoContato.data.number}</span> <button class="edit${novoContato.data.id}">Editar</button><button class="delete${novoContato.data.id}" id="deleteBtn">Deletar</button>`
        
                document.querySelector(".listContacts").appendChild(li)
        
                document.querySelector(`.delete${novoContato.data.id}`).addEventListener("click", deleteContact)
            
                location.reload()
            }

        }catch(error){
            console.log(error)
        }
        

    })
}

