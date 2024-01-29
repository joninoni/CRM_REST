
//variables

//eventos
    document.addEventListener("DOMContentLoaded",obtenerIDCliente);

//funciones
function obtenerIDCliente(){
    const parametrosUrl = new URLSearchParams(window.location.search);
    const idCliente = parametrosUrl.get("id");//obtiene el id del cliente
    
}