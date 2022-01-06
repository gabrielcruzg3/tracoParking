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
            console.log(`Erro num: ${res.status}`)
        }else{
            console.log(`Sucesso! Cód: ${res.status}`)
        }
    })
}

const postCheckin = (label) => {
    return fetch(url + "/activities/checkin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({label})
    }).then((res) => {
        if(res.status != 200){
            console.log(`Erro num: ${res.status}`)
        }else{
            console.log(`Sucesso! Cód: ${res.status}`)
            return res.json()
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

const getActivities = () => {
    return fetch(url + "/activities")
    .then((res) => {
        if(res.status != 200){
            console.log(`Erro num: ${res.status}`)
        }else{
            console.log(`Sucesso! Cód: ${res.status}`)
            return res.json()
        }
    })
}

//-------------------PUT---------------------

const putVeiculo = (objetoCliente, id) => {
    return fetch(`${url}/vehicles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then((res) => {
        if(res.status != 200){
            alert(`Erro num: ${res.status}`)
        }else{
            console.log(`Sucesso! Cód: ${res.status}`)
            return res.json()
        }
    })
}

const putCheckout = (obj) => {
    return fetch(`${url}/activities/checkout`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj) 
    }).then((response) => {
       if(response.status != 200){
           console.log(`Erro no servidor: ${response.status}`)
       }else {
           return response.json()
       }
    })
}

// -----------------------DELETE--------------------

const deletaVeiculo = (id) => {
    return fetch(`${url}/vehicles/${id}`, {
        method: "DELETE"
    }).then((res) => {
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
    getVeiculos,
    putVeiculo,
    deletaVeiculo,
    getActivities,
    postCheckin,
    putCheckout
}