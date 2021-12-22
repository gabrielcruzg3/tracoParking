import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const ListaClienteComponent = () => {
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
        const button = e.target.innerText;
        console.log(button)
        if(button === 'Editar'){

        }
        if(button === 'Excluir'){

        }
        if(button === 'Novo'){}
    })
}



const criarNovaLinha = (cliente, modelo, placa, tipo, observacao, id) => {

    const table = document.getElementById('tbody')
    const novaLinha = document.createElement('tr')

    const dadosHtml = /*html*/`
    <td>${cliente}</td>
    <td>${modelo}</td>
    <td>${placa}</td>
    <td>${tipo}</td>
    <td>${observacao}</td>
    <td>
        <div class="lista-btn">
            <a id="${id}" class="btn-link editar" > Editar </a>
        </div>
    </td>
    `
    novaLinha.innerHTML = dadosHtml
    return table.appendChild(novaLinha)

    
}

