import { cadastroComponent } from "./controller/cadastro.js"
import { ListaClienteComponent } from "./controller/listaClientes.js";

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    const option = e.path[0].innerText

    switch(option){
        case "Cadastro":
            cadastroComponent();
            break
        case "Clientes":
            ListaClienteComponent();
            break
        case "Checkin":
            "blank"
            break
        case "Faturamento":
            "blank"
            break;
    }
})