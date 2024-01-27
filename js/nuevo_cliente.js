import {mostrarAlerta} from "./funciones.js"
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
    const campos={
        nombre,
        email,
        telefono,
        empresa,
    }
        if (validar(campos)) {
            mostrarAlerta("Todos los campos son obligatorios");
             return;
         }
        console.log("si paso la validacion");   
}
function validar(obj){
    //verifica que todos los campos esten completos
    return Object.values(obj).every(campo => campo === "");
}