const formulario = document.querySelector("#formulario");

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
    
    //verifica que todos los campos esten completos
    const camposCompletos = Object.values(campos).every(campo => campo !=="");
    
    if (camposCompletos) {
        console.log("campos completos");
    }
    else{
        console.log("no puede haber campos vacios");
    }
}