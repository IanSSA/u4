let vector = new Array();

function put_element(){
    $input = document.getElementById("input");
    vector.push($input.value);
    $input.value = "";
}

function mostrar_vector(vector_selected){
    let respuesta = "";
    let label_resultado = document.getElementById("resultado");
    vector_selected.forEach(function (elemento) {
        if (respuesta == ""){
            respuesta = elemento;
        } else{
            respuesta = respuesta + ", " + elemento;
        }
      });
    label_resultado.innerText = respuesta;
    alert(respuesta);

}

function ver_vector(){
    mostrar_vector(vector);
}

function ordenar_vector(){
    let vector_ordenado = new Array();
    let filtrados = vector_ordenado.filter(vector_ordenado =>  Number.isInteger(vector_ordenado));
    alert(filtrados);
    vector_ordenado = vector_ordenado.sort();
    mostrar_vector(vector_ordenado);
}

function soloNumeros(array){
    var soloenteros = [];
    for (var i = 0; i < array.length; i++) {
      if (typeof(array[i])=="number") { 
  //       soloenteros[i] = array[i];
         soloenteros.push(array[i]);
      }; 
    }
   return soloenteros;
  }  
  
  console.log(soloNumeros(input));