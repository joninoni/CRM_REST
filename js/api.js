const url=`http://localhost:4000/clientes`;
export const nuevoCliente= async cliente => {
    try {
       await fetch(url,{
            method:"POST",//indicamos el metodo a usar
            body:JSON.stringify(cliente),//la informacion que vamos a usar
            headers:{
                "Content-Type":"application/json"//el tipo de datos que estamos enviando
            }
        })

        window.location.href="index.html";

    } catch (error) {
        console.log(error);
    }
}