import { postVeiculo } from "../service/index.js";
import { getCadastro } from "../view/index.js";

export const cadastroComponent = () => {    
    getCadastro()

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const cadastroCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('modelo').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('placa').value,
            observation: document.getElementById('observacoes').value
        }

        postVeiculo(cadastroCliente)
    })
}