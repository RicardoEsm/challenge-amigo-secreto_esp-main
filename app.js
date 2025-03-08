// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaNombres=[];

function agregarAmigo(){
    let nombre=document.getElementById("amigo").value;
    console.log(nombre);
    
    if(nombre===""){
        mensaje.innerText ="El nombre no puede estar vacio";
        console.log("Vacio")
        return;
    }
    
    listaNombres.push(nombre);
    document.getElementById("botonAñadir").addEventListener("click",verLista);
}




function verLista(){
    
    let nombres=document.getElementById("listaAmigos").innerText =listaNombres;
    console.log(nombres);
}


function sortearAmigo(){

}