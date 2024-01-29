const url=`http://localhost:4000/clientes`;

//agregamos un nuevo cliente
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

//mostramos los clientes desde la api
export const obtenerClientes = async() =>{
    try {
        const resultado = await fetch(url);//hacemos peticion a la api
        const clientes = await resultado.json();//le indicamos que es lo que queremos
        return clientes;//retornamos la informacion 
    } catch (error) {
        console.log(error);
    }
}

//elimina un cliente
export const eliminarCliente= async id => {
    try {
        await fetch(`${url}/${id}`,{
            method:"DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}

//busca un cliente por medio del id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente
    } catch (error) {
        console.log(error);
    }
}