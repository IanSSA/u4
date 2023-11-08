function validar(){
    let campo = document.getElementById('email');     
    let expr_regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (expr_regular.test(campo.value)) {
        return "valido";
    } else {
        return "incorrecto";
    }
}

function resultado(){
    $valido = validar();
    let resultado = document.getElementById('respuesta');
    let input = document.getElementById('email');
    let boton = document.getElementById('boton');
    let texto = document.getElementById('texto1');

    if ($valido == "valido"){
        resultado.innerText = "El correo introducido es correcto";
        input.style.display="none";
        boton.style.display="none";
        texto.style.display="none";
    } else {
        alert("El correo introducido no es válido");
        resultado.innerText = "El correo introducido es incorrecto";
    }
}