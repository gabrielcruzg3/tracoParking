import { cadastroComponent } from "./controller/cadastro.js"

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    const option = e.path[0].innerText

    switch(option){
        case "Cadastro":
            console.log('a')
            cadastroComponent();
            break
    }
})