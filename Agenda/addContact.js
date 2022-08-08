import { servidor } from "../server/client-server.js";

import { deleteContact } from "./deleteContact.js"
import { editContact } from "./editContact.js";

let nameInput = document.querySelector(".nameContact")
let numberInput = document.querySelector(".numberContact")
let btnAdd = document.querySelector(".addContact")

btnAdd.addEventListener("click", async (event) => {
    try {
        event.preventDefault()
        let name = nameInput.value
        let number = numberInput.value
        let key = localStorage.getItem("authKey")
        let contact = await servidor.addContact(name, number, key)
        if (contact.success == true) {
            let li = document.createElement("li");
            console.log(li)
            li.id = contact.data.id

            li.innerHTML = `<span id="spanNome">Nome:${contact.data.name}</span> <span id="spanNumero">Número:${contact.data.number}</span><button class="edit${contact.data.id}" id="editBtn">Editar</button><button class="delete${contact.data.id}" id="deleteBtn">Deletar</button>`

            /* `<span id="spanNome">Nome:${contact.data.name}</span> <span id="spanNumero">Número:${contact.data.number}</span> <div id="divBtn"><button class="edit${contact.data.id}" id="editBtn">Editar</button><button class="delete${contact.data.id}" id="deleteBtn">Deletar</button></div>` */

            document.querySelector(".listContacts").appendChild(li)

            document.querySelector(`.edit${contact.data.id}`).addEventListener("click", editContact)

            document.querySelector(`.delete${contact.data.id}`).addEventListener("click", deleteContact)

            nameInput.value = ''
            numberInput.value = ''

            
        }
    } catch (error) {
        alert(error)
    }
})



