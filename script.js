const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar() {
    const textoDesncriptado = desencriptar(texArea.value)
    mensaje.value = textoDesncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado

}

function desencriptar(stringDesncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesncriptado = stringDesncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesncriptado.includes(matrizCodigo[i][1])) {
            stringDesncriptado = stringDesncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesncriptado

}


function copiarTexto() {
    let texto = mensaje.value; 
    navigator.clipboard.writeText(texto) //guarda en portapapel el texto
    console.log("funciona copiar") 




}











