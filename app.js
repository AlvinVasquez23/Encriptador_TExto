let btnEncriptar = document.querySelector(".btnEncriptar");
let textEncriptar = document.querySelector(".textUsuario");
let textFinal = document.querySelector(".textFinal");
let contenido = document.querySelector(".resultado");
let btnCopiar = document.querySelector(".btnCopiar");
let btnDesencriptar = document.querySelector(".btnDesencriptar");


btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let caracteresEspeciales = /^[a-z0-9 ]+$/;

    if (texto == ""){
        alert('Debes escribir un texto');
        textEncriptar.value = "";
    } 

    else if (caracteresEspeciales.test(texto)== false) {
        alert ("El texto solo debe contener letras minúsculas y sin acentos") 
        textEncriptar.value = "";
    } 
    else if (caracteresEspeciales.test(texto)== true) {
        
       texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        textFinal.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "Inherit";
        textEncriptar.value = "";

    }

});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let caracteresEspeciales = /^[a-z0-9 ]+$/;

    if (texto == ""){
        alert('Debes escribir un texto');
        textEncriptar.value = "";
    } 

    else if (caracteresEspeciales.test(texto)== false) {
        alert ("El texto solo debe contener letras minúsculas y sin acentos") 
        textEncriptar.value = "";
    } 
    else if (caracteresEspeciales.test(texto)== true) {
        
       texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        textFinal.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "Inherit";
        textEncriptar.value = "";
    }

});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();

   let copiar = textFinal;
    copiar.select();
    document.execCommand("copy");
    
});