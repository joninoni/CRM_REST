import {obtenerCliente} from "./api.js";
//variables
const nombreInput=document.querySelector("#nombre");
const emailInput=document.querySelector("#email");
const empresaInput=document.querySelector("#empresa");
const telefonoInput=document.querySelector("#telefono");
const idInput=document.querySelector("#id");
//eventos
    document.addEventListener("DOMContentLoaded",obtenerIDCliente);

//funciones
async function obtenerIDCliente(){
    const parametrosUrl = new URLSearchParams(window.location.search);
    const idCliente = parametrosUrl.get("id");//obtiene el id del cliente
    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);
}

function mostrarCliente(cliente){
    const {nombre,email,empresa,telefono,id} = cliente;
    //llenando los campos con los valores del cliente
    nombreInput.value=nombre;
    emailInput.value=email;
    empresaInput.value=empresa;
    telefonoInput.value=telefono;
    idInput.value=id;
}