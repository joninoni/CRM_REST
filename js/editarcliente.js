import {obtenerCliente} from "./api.js";
//variables

//eventos
    document.addEventListener("DOMContentLoaded",obtenerIDCliente);

//funciones
async function obtenerIDCliente(){
    const parametrosUrl = new URLSearchParams(window.location.search);
    const idCliente = parametrosUrl.get("id");//obtiene el id del cliente
    const cliente = await obtenerCliente(idCliente);

    console.log(cliente);
}

