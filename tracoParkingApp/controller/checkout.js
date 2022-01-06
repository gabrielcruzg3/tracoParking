import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const checkoutComponent = (idParam) => {
    view.getSpinner();
    setTimeout(()=> {
        view.getCheckoutHtml()

        service.getVeiculos().then(data => {
            data.forEach(element => {
                if(element.id == idParam){
                    adicionaParametrosNaTela(element)
                    buscarRegistro(idParam)
                }
            });
        })
    },600)
}

let placa = ''

const adicionaParametrosNaTela = (obj) => {
    placa = obj.label
    const NovaLinha = document.getElementById('tbody')
    const dadosHtml = `
            <td>${obj.owner}</td>
            <td>${obj.model}</td>
            <td>${obj.label}</td>
    `
    NovaLinha.innerHTML = dadosHtml;
}

const buscarRegistro = (id) => {
    service.getActivities().then((dados) => {
        dados.forEach((element) => {
            if (element.vehicle_id == id) {
                adicionaParametrosNoInput(element)
            }
        })
    })
}

const valorHora = 5;
const valorMinuto = valorHora / 60;

const adicionaParametrosNoInput = (element) => {
    const checkin = new Date(element.checkin_at)
    const checkout = new Date()
    const tempo = checkout - checkin
    const hora = calculaHora(tempo)
    const totalApagar = (hora.minutos + (hora.horas * 60)) * valorMinuto;
   
    const inputHora = document.getElementById('totalHora')
    const inputTotal = document.getElementById('valorPagar')

    if (hora.minutos < 10 && hora.horas < 10)
        inputHora.value = `Tempo 0${hora.horas}:0${hora.minutos}`;

    if (hora.horas < 10)
        inputHora.value = `Tempo 0${hora.horas}:${hora.minutos}`;

    if (hora.minutos < 10)
        inputHora.value = `Tempo ${hora.horas}:0${hora.minutos}`;

    if (totalApagar < 10) {
        inputTotal.value = `R$: 0${totalApagar.toFixed(2)}`;
    } else {
        inputTotal.value = `R$: ${totalApagar.toFixed(2)}`;
    }

    const finalizar = document.getElementById('finalizar')
    finalizar.addEventListener('click', () => {
        const preco = document.getElementById('valorPagar').value
        const stringPreco = preco.split(" ")
        const objeto = {
            label: placa,
            price: Number(stringPreco[1])
        }
        checkoutAPI(objeto)
    })
}

const calculaHora = (tempoEmMilissegundos) => {
    const tempo = {
        horas: +(tempoEmMilissegundos / 3600000).toFixed(0),
        minutos: +((tempoEmMilissegundos / 60000) % 60).toFixed(0)
    }
    return tempo
}

const checkoutAPI = (obj) => {
    service.putCheckout(obj).then(()=> {
        window.location.href = "../checkin.html"
    })
}
