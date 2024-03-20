function encriptarTexto() {
  var entrada = document.getElementById("entradaTXT").value;
  if (verificarTexto(entrada)) {
    var salida = encriptar(entrada);
    mostrarResultado(salida);
  } else {
    pulsarAdvertencia();
  }
}

function desencriptarTexto() {
  var entrada = document.getElementById("entradaTXT").value;
  if (verificarTexto(entrada)) {
    var salida = desencriptar(entrada);
    mostrarResultado(salida);
  } else {
    pulsarAdvertencia();
  }
}

function copiarTexto() {
  var texto = obtenerTextoResultado();
  copiarAlPortapapeles(texto);
}

function mostrarResultado(resultado) {
  ocultarElemento(".derecha img");
  ocultarElemento(".texto");
  mostrarElemento(".btnCopiar");
  mostrarElemento(".resultadoTexto");
  var info = document.querySelector(".info");
  info.style.justifyContent = "space-between";
  document.querySelector(".resultadoTexto").innerHTML =
    "<p>" + resultado + "</p>";
}

function obtenerTextoResultado() {
  return document.querySelector(".resultadoTexto p").innerText;
}

function ocultarElemento(selector) {
  var elemento = document.querySelector(selector);
  if (elemento) {
    elemento.style.display = "none";
  }
}

function mostrarElemento(selector) {
  var elemento = document.querySelector(selector);
  if (elemento) {
    elemento.style.display = "block";
  }
}

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function verificarTexto(texto) {
  var regex = /^[A-ZáéíóúÁÉÍÓÚ\s]*$/;
  return !regex.test(texto);
}

function pulsarAdvertencia() {
  var advArea = document.getElementById("advArea");
  advArea.classList.add("pulsar");

  setTimeout(function () {
    advArea.classList.remove("pulsar");
  }, 1000);
}

function copiarAlPortapapeles(texto) {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      mostrarAlerta();
      setTimeout(function () {
        cerrarAlerta();
      }, 2000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

function mostrarAlerta() {
  var alerta = document.getElementById("miAlerta");
  alerta.style.display = "block";
  alerta.style.opacity = "1";
}

function cerrarAlerta() {
  var alerta = document.getElementById("miAlerta");
  alerta.style.opacity = "0"; 
  setTimeout(function () {
    alerta.style.display = "none"; 
  }, 1000); 
}
