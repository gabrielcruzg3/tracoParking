import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { cadastroComponent } from "./cadastro.js"
import { checkoutComponent } from "./checkout.js"

view.getSpinner();
setTimeout(()=> {
    view.getCheckinHtml()

    let idCheckin = []    

    service.getActivities()
        .then((data) => {
            data.forEach(element => {
                if(element != null){
                    idCheckin.push(element.vehicle_id)
                }   
                 
            });
            
        getVeiculo()
    })

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

        const dadosHtml = `
            <td>${obj.model}</td>
            <td>${obj.label}</td>
            <td>
                <a id="${obj.id}" class="checkin__table__item" >Checkout</a>
            </td>
        `
        novaLinha.innerHTML = dadosHtml
        return table.appendChild(novaLinha)
    }

    const criarOptions = (arrayVeiculos) => {
        const veiculosFiltrados = []
        arrayVeiculos.forEach(element => {
            idCheckin.includes(element.id) ?
                console.log(`Já está está estacionado: ${element.label}`) :
                    veiculosFiltrados.push(element)
        })
        const select = document.getElementById('select')
        veiculosFiltrados.forEach(element => {
            const option = new Option(element.label, element.id)
            select.add(option)
        })
    }

    const main = document.getElementById('root')
    main.addEventListener('click', (e) => {
        const button = e.path[0].innerText;
        const id = e.path[0].id
        
        
        if(button === 'Checkout'){
            checkoutComponent(id)
        }
        if(button === 'Checkin'){
        const select = document.getElementById('select')
        searchId(select.value)
        }
        if(button === 'Adicionar Novo'){
            cadastroComponent()
        }
    })

    const searchId = (id) => {
        service.getVeiculos().then(data => {
            data.forEach(element => {
                if(element.id == id){
                    checkinApi(element)
                }
            })
        })
    }

    const checkinApi = (obj) => {
        service.postCheckin(obj.label)
            .then((data) => {
                alert(data.message)
                window.location.reload()
            })
    }
}, 600)