let h1 = document.querySelector(".titulo")
h1.textContent += localStorage.getItem("name")



function Carrega() {
    let Key = localStorage.getItem("authKey")
    let response = await servidor.viewContacts(Key)
    response.data.forEach(element => {
        let li = document.createElement('li');
        li.class = response.data.name
        li.innerHTML = `Nome: ${response.data.name} Número: ${response.data.number} <button class='edit${response.data.name}>Editar</button>`

        document.querySelector(".listContacts").appendChild(li)

        document.querySelector(`.edit${name}`).addEventListener('click', editContact)
    });

}

Carrega()


