
const url = "http://localhost:8000/api"

export const postVeiculo = (objetoCliente) => {
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then((res) => {
        if(res.status != 200){
            alert(`Erro num: ${res.status}`)
        }else{
            alert(`Sucesso! Cód: ${res.status}`)
        }
    })
}
