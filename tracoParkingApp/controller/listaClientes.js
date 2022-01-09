import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { atualizaComponent } from "./atualiza.js"
import { cadastroComponent } from "./cadastro.js"

export const listaClienteComponent = () => {
    view.getListaClientesHtml()

    service.getVeiculos().then((data) => {
        data.forEach((dado) => {
          if(dado.owner !== null){
            criarNovaLinha(dado.owner, dado.model, dado.label,dado.type, dado.observation, dado.id)
            }  
        })
        
    })
    const table = document.getElementById('tbody')
    table.addEventListener('click', (e) => {
        const button = e.path[0].innerText;
        const id = e.path[0].id
        
        
        if(button === 'Editar'){
            atualizaComponent(id)
        }
        if(button === 'Excluir'){
            deletar(id)
        }
        if(button === 'Novo'){
            cadastroComponent()
        }
    })
}



const criarNovaLinha = (cliente, modelo, placa, tipo, observacao, id) => {

    const table = document.getElementById('tbody')
    const novaLinha = document.createElement('tr')

    const dadosHtml =`
        <td class="none">${cliente}</td>
        <td>${modelo}</td>
        <td>${placa}</td>
        <td class="none">${tipo}</td>
        <td class="none">${observacao}</td>
        <td>
            <div class="lista-cliente__container__button">
                <a id="${id}" class="lista-cliente__table__button">Editar</a>
                <a id="${id}" class="lista-cliente__table__button">Excluir</a>
            </div>
        </td>
    `
    novaLinha.innerHTML = dadosHtml
    return table.appendChild(novaLinha)

    
}

const deletar = (id)=> { 
    service.deletaVeiculo(id).then( () => {
        listaClienteComponent()
    })
}