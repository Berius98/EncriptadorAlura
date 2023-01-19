//Leer el valor de la textarea 
let text;
let textbox1 = document.getElementById("textbox");
textbox1.addEventListener("input", function getText() {
  text = textbox1.value;
});


function encode(input) {
  // Cambia las letras "e", "i", "a", "o", and "u" con las palabras para codificarlas
  input = input.replace(/e/g, "enter");
  input = input.replace(/i/g, "imes");
  input = input.replace(/a/g, "ai");
  input = input.replace(/o/g, "ober");
  input = input.replace(/u/g, "ufat");

  // Regresa el valor codificado
  return input;
}

function decode(input) {
  // Remplaza las palabras con las letras "e", "i", "a", "o", y "u"
  input = input.replace(/enter/g, "e");
  input = input.replace(/imes/g, "i");
  input = input.replace(/ai/g, "a");
  input = input.replace(/ober/g, "o");
  input = input.replace(/ufat/g, "u");

  // Regresa el valor decodificado
  return input;
}

// Añadir funciones de codificar y decodificar a los botones
var encrypt = document.getElementById("button1");
let textarea2 = document.getElementById("output");
encrypt.addEventListener("click", () => {
    textarea2.value = encode(text);
})

var decrypt = document.getElementById("button2");
decrypt.addEventListener("click", () => {
  textarea2.value = decode(text);
} )

//Añadir la funcion de copiar
function copyText() {
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
}
