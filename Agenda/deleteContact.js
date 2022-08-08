import { servidor } from "../server/client-server.js";


export async function deleteContact(event) {
    event.preventDefault()
    let key = localStorage.getItem("authKey")
    const pai = this.parentNode
    const id = pai.id
    const response = await servidor.deleteContact(id, key)
    if (response.success == true) {
        pai.remove()
    }

}