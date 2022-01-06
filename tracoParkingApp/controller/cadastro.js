import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const cadastroComponent = () => {
    view.getSpinner();

    setTimeout(() => {
        const label = []
        service.getVeiculos().then((data) => {
            data.forEach(element => {
                if (element.label != null) {
                    label.push(element.label)
                }
            });
        })

        view.getCadastro()

        const formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            const cadastroCliente = {
                owner: document.getElementById('name').value,
                model: document.getElementById('modelo').value,
                type: document.getElementById('tipo').value,
                label: document.getElementById('placa').value,
                observation: document.getElementById('observacoes').value
            }

            if (label.includes(cadastroCliente.label)) {
                return alert(`Essa placa: ${cadastroCliente.label} já foi cadastrada.`)
            } else {
                formulario.reset()
                service.postVeiculo(cadastroCliente)
            }
        })
    }, 600)
}