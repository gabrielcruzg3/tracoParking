import { cadastroComponent } from "./controller/cadastro.js"
import { listaClienteComponent } from "./controller/listaClientes.js";
import { faturamentoComponent } from "./controller/faturamento.js";
import { view } from "./view/index.js";

view.getSpinner()
    setTimeout(() => {
        view.getIndex();
    }, 600)

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    const option = e.path[0].innerText

    switch(option){
        case "Cadastro":
            cadastroComponent();
            break
        case "Clientes":
            listaClienteComponent();
            break
        case "Checkin":
            window.location.href = "./checkin.html"
            break
        case "Faturamento":
            faturamentoComponent();
            break;
        default: view.getIndex()
    }
})