
const url = "http://localhost:8080/api"

export const postVeiculo = (objetoCliente) => {
    return fetch(url + "vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: objetoCliente
    })
}
