var boxOne = document.querySelector(".box-grupo-1");
var boxTwo = document.querySelector(".ocultar");


function stylos () {
    boxOne.classList.add("ocultar");
    boxTwo.classList.remove("ocultar");
    boxTwo.classList.add("box-grupo-2");
}

function btnEncrip () {
    stylos ();
    let datoTexto = document.getElementById("campoTexto").value.toLowerCase();
     console.log(datoTexto);
    let textoEncriptadoA = datoTexto.replace(/e/img, "enter");
     console.log(textoEncriptadoA + "   e");
     textoEncriptadoA = textoEncriptadoA.replace(/i/img, "imes");
     console.log(textoEncriptadoA + "   i");
     textoEncriptadoA = textoEncriptadoA.replace(/a/img, "ai");
     console.log(textoEncriptadoA + "    a") ;
     textoEncriptadoA = textoEncriptadoA.replace(/o/img, "ober");
     console.log(textoEncriptadoA + "    o");
     textoEncriptadoA = textoEncriptadoA.replace(/u/img, "ufat");
     console.log(textoEncriptadoA + "   u");

    let textoProcesadoEncrip = document.getElementById("textoModificado").innerHTML = textoEncriptadoA;

    return textoProcesadoEncrip;
}

function btnDesencri () {
    let datoTexto = document.getElementById("campoTexto").value.toLowerCase();

    
    let textoEncriptadoB = datoTexto.replace(/enter/img, "e");
    console.log(textoEncriptadoB + '    e');
    textoEncriptadoB = textoEncriptadoB.replace(/imes/img, "i");
    console.log(textoEncriptadoB + '     i');
    textoEncriptadoB = textoEncriptadoB.replace(/ai/img, "a");
    console.log(textoEncriptadoB + '    a');
     textoEncriptadoB = textoEncriptadoB.replace(/ober/img, "o");
     console.log(textoEncriptadoB + '    o');
     textoEncriptadoB = textoEncriptadoB.replace(/ufat/img, "u");
     console.log(textoEncriptadoB + '      u');
    let textoProcesado = document.getElementById("textoModificado").innerHTML = textoEncriptadoB;



    return textoProcesado;
}

function copy() {
    let textcopy = document.getElementById("textoModificado").value;
    navigator.clipboard.writeText(textcopy);
    alert("fue copiado")
    
    
    
}


