import { servidor } from "../server/client-server.js";

let nameInput = document.querySelector(".nameContact")
let numberInput = document.querySelector(".numberContact")
let btnAdd = document.querySelector(".addContact")

btnAdd.addEventListener('click', async (event) => {
    try {
        event.preventDefault()
        let name = nameInput.value
        let number = numberInput.value
        let key = localStorage.getItem("authKey")
        let contact = await servidor.addContact(name, number, key)
        if (contact.success == true) {

            let li = document.createElement('li');
            li.class = contact.name
            li.innerHTML = `Nome: ${name} Número: ${number} <button class='edit${name}>Editar</button>`

            document.querySelector(".listContacts").appendChild(li)

            document.querySelector(`.edit${name}`).addEventListener('click', editContact)

        } else {
            alert(contact.error)
        }
    } catch (error) {
        alert(error)
    }
})