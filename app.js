// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre !== "") {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el campo de texto
        actualizarLista(); // Muestra la lista en pantalla
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra el contenido anterior

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para sortear.");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert("El amigo secreto es: " + sorteado);

    // Limpiar la lista de amigos después del sorteo
    amigos = []; 
    actualizarLista();
}
