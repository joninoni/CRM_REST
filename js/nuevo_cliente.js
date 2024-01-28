import {mostrarAlerta} from "./funciones.js";
import {nuevoCliente} from "./api.js";
export const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit",validarCampos);

function validarCampos(e){
    e.preventDefault();
    //asignando los campos del formulario a constantes
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    //asignando los values de los campos a un objecto
    const cliente={
        nombre,
        email,
        telefono,
        empresa,
    }
    if (validar(cliente)) {
        mostrarAlerta("Todos los campos son obligatorios");
        return;
    }
    //pasando la validacion agregamos los datos del cliente en la api     
    nuevoCliente(cliente)   
}
function validar(obj){
    //verifica que todos los campos esten completos
    return Object.values(obj).every(campo => campo === "");
}