
const url = "http://localhost:8000/api"
// ----------POST-----------------------------
const postVeiculo = (objetoCliente) => {
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

// -----------GET-------------------
const getVeiculos = () => {
    return fetch(url + "/vehicles")
    .then((res) => {
        if(res.status != 200){
            console.log(`Erro num: ${res.status}`)
        }else{
            console.log(`Sucesso! Cód: ${res.status}`)
            return res.json()
        }
    })
}

// ---------------------- EXPORT ---------------------
export const service = {
    postVeiculo,
    getVeiculos
}