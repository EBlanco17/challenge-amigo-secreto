let amigos = [];

const amigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  if (amigo.value === "") {
    alert("Por favor ingrese un nombre valido");
    return;
  }
  if (amigos.includes(amigo.value)) {
    alert("Este amigo ya ha sido agregado.");
    return;
  }
  amigos.push(amigo.value);
  amigo.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length < 4 || amigos.length % 2 !== 0) {
    alert(
      "Debe haber al menos 4 amigos y un número par de amigos para sortear."
    );
    return;
  }

  let disponibles = [...amigos];
  let resultadoSorteo = [];

  while (disponibles.length > 0) {
    // Selecciona el primer amigo al azar
    let idx1 = Math.floor(Math.random() * disponibles.length);
    let amigo1 = disponibles.splice(idx1, 1)[0];

    // Selecciona el segundo amigo al azar
    let idx2 = Math.floor(Math.random() * disponibles.length);
    let amigo2 = disponibles.splice(idx2, 1)[0];

    resultadoSorteo.push(`${amigo1} <-> ${amigo2}`);
  }

  mostrarResultadoFinal(resultadoSorteo);
}

function mostrarResultadoFinal(resultadoSorteo) {
  resultado.innerHTML = "";
  for (let i = 0; i < resultadoSorteo.length; i++) {
    let li = document.createElement("li");
    li.textContent = resultadoSorteo[i];
    resultado.appendChild(li);
  }
}

function resetearLista() {
  amigos = [];
  amigo.value = "";
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";
}
