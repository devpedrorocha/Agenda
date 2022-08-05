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
    inputName.value = response.data[0].name;
    inputNumber.value = response.data[0].number;

    const btnConcluir = document.createElement('button')
    const btnSair = document.createElement('button')
    btnConcluir.textContent = "Concluir"
    btnSair.textContent = "Sair"

    form.appendChild(btnConcluir)
    form.appendChild(btnSair)
    
    /* btnSair.addEventListener("click", load()) */

    form.addEventListener("submit", async(event)=>{
        try{
            event.preventDefault()
            const novoContato = await servidor.editContact(id, key, inputName.value, inputNumber.value)

            if(novoContato.success == true){
                let li = document.createElement("li");
                console.log(li)
                li.id = novoContato.data.id
        
                li.innerHTML = `<span>Nome:${novoContato.data.name}</span> <span>Número:${novoContato.data.number}</span> <button class="edit${novoContato.data.id}">Editar</button><button class="delete${novoContato.data.id}" id="deleteBtn">Deletar</button>`
        
                document.querySelector(".listContacts").appendChild(li)
        
                document.querySelector(`.edit${novoContato.data.id}`).addEventListener("click", editContact)
        
                document.querySelector(`.delete${novoContato.data.id}`).addEventListener("click", deleteContact)
            
                nameInput.value = ''
                numberInput.value = ''
            }

        }catch(error){
            console.log(error)
        }
        

    })
}

