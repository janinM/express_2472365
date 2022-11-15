
const registrarAbono= () =>{
  
    const cliente = document.querySelector('#cliente')
    const total = document.querySelector('#total')
    const factura = document.querySelector('#factura')
    const  resta = document.querySelector('#resta')
    const abono = document.querySelector('#abono')

    if(cliente.value.length == 0 || total.value.length == 0 || factura.value.length == 0 || resta.value.length == 0 || abono.value.length == 0){
        //document.getElementById('respuesta').innerHTML = 'los campos no pueden estar vacios'
        alert("Todos los datos deben estar diligenciados")
    }
    else{
       // document.getElementById('respuesta').innerHTML = 'Registro exitoso'
        alert("Registro Exitoso")
    }

}

const  btnRegistrar = document.querySelector('#btRegistrar')
btnRegistrar.addEventListener('click',registrarAbono)