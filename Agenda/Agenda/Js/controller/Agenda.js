import { servidor } from "../server/client-server.js";

import { deleteContact } from "./deleteContact.js"
import { editContact } from "./editContact.js"

let h1 = document.querySelector(".titulo")
h1.textContent += localStorage.getItem("name")


export async function Carrega() {
    let Key = localStorage.getItem("authKey")
    let response = await servidor.viewContacts(Key)
    response.data.forEach(element => {
        let li = document.createElement("li");
        li.id = element.id

        li.innerHTML = `<span>Nome:${element.name}</span> <span>Número:${element.number}</span> <button class="edit${element.id}">Editar</button><button class="delete${element.id}" id="deleteBtn">Deletar</button>`

        document.querySelector(".listContacts").appendChild(li)

        document.querySelector(`.delete${element.id}`).addEventListener("click", deleteContact)

        document.querySelector(`.edit${element.id}`).addEventListener("click", editContact)
    });

}

Carrega()