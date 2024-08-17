//Valor del textArea de salida
const resultado = document.getElementById('ouput-text');
//texto del textArea de entrada
const texto = document.getElementById('input-text');

//Botones
const btnEncriptar = document.getElementById('btn-encriptar');
btnEncriptar.addEventListener('click', llamadaEncriptar);

const btnDesencriptar = document.getElementById('btn-desencriptar');
btnDesencriptar.addEventListener('click', llamadaDesencriptar);

const btnCopiar = document.getElementById('btn-copiar');
btnCopiar.addEventListener('click', copiarTexto);


function capturarTexto() {
    return document.getElementById('input-text').value;
}

function verificarTexto() {
    const texto = capturarTexto();
    // Expresiones regulares
    const tieneCaracteresPermitidos = /^[a-zñ0-9\s]+$/;

    // Verifica si cumple con todas las condiciones simultáneamente
    if (tieneCaracteresPermitidos.test(texto)) {
        console.log('El texto cumple');
        encriptarTexto(texto);
        desencriptarTexto(texto);
    }
    else {
        if (texto == '') {
            alert('El campo no puede estar vació por favor ingrese su texto');
            borrarTexto();
        }
        else {
            alert('El texto no cumple con todas las condiciones requeridas.');
            borrarTexto();
        }

    }
}

function borrarTexto() {
    resultado.value = '';
    texto.value = '';
}

function enviarTexto(texto) {
    return resultado.value = texto;
}

function encriptarTexto() {
    let resultado = '';
    let texto = capturarTexto();

    const llavesEncriptadas = {
        a: 'gbc',
        e: 'rtx',
        i: 'lnz',
        o: 'spt',
        u: 'mrv'
    };

    for (let letras of texto) {
        if (llavesEncriptadas[letras]) {
            resultado += llavesEncriptadas[letras];
        } else {
            resultado += letras;
        }
    }

    return resultado;
}

function desencriptarTexto() {
    let texto = capturarTexto();

    texto = texto.replaceAll('mrv', 'u');
    texto = texto.replaceAll('spt', 'o');
    texto = texto.replaceAll('lnz', 'i');
    texto = texto.replaceAll('rtx', 'e');
    texto = texto.replaceAll('gbc', 'a');

    return texto;
}

function llamadaEncriptar() {
    verificarTexto(capturarTexto());
    enviarTexto(encriptarTexto());
    mensaje(`${(texto.value == '') ? 'Ningún mensaje fue encontrado' : 'Texto encriptado correctamente'}`);
    texto.value = '';
}

function llamadaDesencriptar() {
    verificarTexto(capturarTexto());
    enviarTexto(desencriptarTexto());
    mensaje(`${(texto.value == '') ? 'Ningún mensaje fue encontrado' : 'Texto desencriptado correctamente'}`);
    texto.value = '';
}

function copiarTexto() {
    if (resultado.value != '') {
        navigator.clipboard.writeText(resultado.value);
        alert('Contenido copiado al portapapeles, limpiando campos');
        borrarTexto();
    } else {
        console.log('Ocurrió un error inesperado');
    }

}

function mensaje(texto) {
    const mensaje = document.getElementById('mensaje-encontrado');
    mensaje.innerHTML = texto;
}