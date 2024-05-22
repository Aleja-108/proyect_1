const nombre = document.getElementById("nombre")
const dni = document.getElementById("dni")
const cod_area = document.getElementById("cod_area")
const telefono = document.getElementById("telefono")
const mail = document.getElementById("mail")
const efectivo = document.getElementById("efectivo")
const tarjeta = document.getElementById("tarjeta")
const transferencia = document.getElementById("transferencia")
const archivo = document.getElementById("archivo")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = "";
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let faltan_datos = false; 
    parrafo.innerHTML = ""

    if (nombre.value.length == 0){
        warnings = 'Debe su nombre.'
        faltan_datos = true;
    }

    if (dni.value.length < 8){
        warnings = 'El DNI ingreso no es valido.'
        faltan_datos = true;
    }

    if (cod_area.value.length == 0){
        warnings = 'Debe ingresar codigo de area.'
        faltan_datos = true;
    }

    if (Telefono.value.length == 0){
        warnings = 'Debe ingresar un telefono de contacto.'
        faltan_datos = true;
    }

    if (!regex.test(mail.value)){
        warnings = "El mail ingresado no es valido."
        faltan_datos = true;
    }

    if (!efectivo.checked && !tarjeta.checked && !transferencia.checked){
        warnings = 'Debe ingresar forma de pago.'
        faltan_datos = true;
    }

    if (tarjeta.checked || transferencia.checked) {
        if (!archivo.value){
            warnings = 'Debe adjuntar el comprobante de pago.'
            faltan_datos = true;
        }
    }

    if (faltan_datos){
        parrafo.innerHTML = warnings;
    }

    if (!faltan_datos){
        form.reset();
        parrafo.innerHTML = "Envio exitoso!!!"
        setTimeout(() => {
            document.getElementById('warnings').classList.remove('warnings')
        }, 5000);
        
    }
})