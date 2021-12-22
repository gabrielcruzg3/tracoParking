
export const getCadastro = () => {
    const main = document.getElementById('root')
    const formHtml = `
    <form action="" id="formulario">
    <h3> Novo Cliente </h3>
    <ul>
        <li>
            <label> Nome do Cliente</label>
            <input type="text" name="" id="name" placeholder="Digite seu nome">
        </li>
        <li>
            <label> Modelo </label>
            <input type="text" name="" id="modelo" placeholder="Digite o modelo de carro">
        </li>
        <li>
            <label> Tipo </label>
            <select name="" id="tipo" type="tipo" placeholder="Tipo do Veiculo">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
        </li>
        <li>
            <label> Placa </label>
            <input type="text" name="" id="placa" placeholder="Digite a placa do Veiculo">
        </li>
        <li>
            <label> Observações </label>
            <input type="text" name="" id="observacoes" placeholder="Digite a observação">
        </li>
        <li>
            <div>
                <button id="cancelar" type="reset"> Cancelar </button>
                <button id="salvar" type="submit"> Salvar </button>
            </div>
        </li>
    </ul>

    </form>
    `
    main.innerHTML = formHtml
}