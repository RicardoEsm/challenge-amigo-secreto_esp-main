// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaNombres=[];

function agregarAmigo(){
    let nombre=document.getElementById("amigo").value.trim();
    console.log(nombre);
    if(!validarLista(nombre)){
        return;//
    }
    listaNombres.push(nombre);
    document.getElementById("botonAñadir").addEventListener("click",verLista);
}

function validarLista(nombre){
    
    let respuesta = document.getElementById("mensaje");
    if(nombre===""){
        respuesta.innerText ="El nombre no puede estar vacio";
        console.log("Vacio")
        document.getElementById("amigo").value = ""
        return;
    }if(listaNombres.includes(nombre)){
        respuesta.innerText = "Nombre ya incluido";
        console.log("Duplicado");
        document.getElementById("amigo").value = ""
        return;
    }
    
    respuesta.innerText = "";
    return true;
}

function verLista(){
    
    let nombres=document.getElementById("listaAmigos").innerText =`Los participantes son: ${listaNombres}`;
    console.log(nombres);
}


function sortearAmigo(){
    let sorteado= parseInt(Math.floor(Math.random()*listaNombres.length));  // Genero numero entero aleatorio entre 0 y 1 con maximo igual al largo del array.
    console.log(sorteado);
    console.log(listaNombres[sorteado]);
    document.getElementById("resultado").innerHTML = ` El ganador del sorteo es: ${listaNombres[sorteado]} ¡Felicidades!`;
    document.getElementById("resultado").style.color = "green";
}
document.getElementById("botonSorteo").addEventListener("click",sortearAmigo);

