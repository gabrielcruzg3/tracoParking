import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { listaClienteComponent } from "./listaClientes.js"

export const atualizaComponent = (idParam) => {
    view.getAtualizaHtml()

    service.getVeiculos().then(data => {
        data.forEach(element => {
            if(element.id == idParam){
                addParamNoInput(element)
            }
            
        });
    })
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const atualizaCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('modelo').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('placa').value,
            observation: document.getElementById('observacoes').value
        }
        service.putVeiculo(atualizaCliente, idParam).then(() => {
            cancelar()
            listaClienteComponent()
        })
        

    })
}

const addParamNoInput = (element) => {
    document.getElementById('name').value = element.owner
    document.getElementById('modelo').value = element.model
    document.getElementById('tipo').value = element.type
    document.getElementById('placa').value = element.label
    document.getElementById('observacoes').value = element.observation
}


const cancelar = () => {
    const formulario = document.getElementById('formulario');
    formulario.reset()
}