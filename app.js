// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Esta funcion limpia la caja de texto.

let listaAmigos = [];
let listaNombres = document.querySelector("#listaAmigos");

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function actualizarLista() {
                  // Limpiar la lista existente
    listaNombres.innerHTML = "";

              // Iterar sobre el arreglo y agregar elementos a la lista
       for (let i = 0; i < listaAmigos.length; i++) {
               const li = document.createElement('li');
              li.textContent = listaAmigos[i];
                listaNombres.appendChild(li);
}
}

function agregarAmigo() {
    let nombreIngresado = document.querySelector("#amigo").value;
        if (nombreIngresado == "") {
        alert("Ingrese un nombre válido");
    } 
    else{
          listaAmigos.push(nombreIngresado);
         console.log(listaAmigos);
        
                   // Actualizar la lista en el HTML
           actualizarLista();
        
        limpiarCaja();
    
}

}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
         alert("No hay amigos en la lista para sortear.");
            return;
}

                     // Generar un indice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

                   //obtener el nombre sorteado
     const amigoSorteado = listaAmigos[indiceAleatorio];

                     // Mostrar resultado
       const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
