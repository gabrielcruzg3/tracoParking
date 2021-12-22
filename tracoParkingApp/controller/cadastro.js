import { postVeiculo } from "../service/index.js";


const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const cadastroCliente = {
        owner: document.getElementById('name'),
        model: document.getElementById('modelo'),
        type: document.getElementById('tipo'),
        label: document.getElementById('placa'),
        observation:   document.getElementById('observacoes')
    }

    postVeiculo(cadastroCliente)
})