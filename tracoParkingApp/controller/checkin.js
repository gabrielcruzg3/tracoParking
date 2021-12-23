import { service } from "../service/index.js"
import { view } from "../view/index.js"

// const checkinComponent = () => {
    view.getCheckinHtml()
    let idCheckin = []
    

    service.getActivities().then((data) => {
        data.forEach(element => {
            if(element != null){
                idCheckin.push(element.vehicle_id)
            }     
        });
        getVeiculo()
    })
// }

let arrayVeiculos = [];
const getVeiculo = () => {
    service.getVeiculos().then(data => {
        data.forEach(element => {
            if(idCheckin.includes(element.id)){
                criarNovaLinha(element)
            }
            if(element.label !== null){
                arrayVeiculos.push(element)
            }
        });
        criarOptions(arrayVeiculos)
    })
}

const criarNovaLinha = (obj) => {
    const table = document.getElementById('tbody')
    const novaLinha = document.createElement('tr')

    const dadosHtml = /*html*/`
    <td>${obj.model}</td>
    <td>${obj.label}</td>
    <td>
        a id="${obl.id}" class="btn-link editar" > Checkout </a>                    
    </td>
    `
    novaLinha.innerHTML = dadosHtml
    return table.appendChild(novaLinha)
}

const criarOptions = (arrayVeiculos) => {
    const veiculosFiltrados = []
    arrayVeiculos.forEach(element => {
        idCheckin.includes(element.id) ?
            console.log("Já está está estacionado") :
            console.log('Não está estacionado')
    })
}