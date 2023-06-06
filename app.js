let listadecontactos =[
    "Luis Cubillos",
    "Mauricio Leyva",
    "Grace Rodriguez"
    
]
function añadircontacto (nuevo){
    listadecontactos.push(nuevo);
}

añadircontacto("Isaac Leyva");


function eliminar (){
    listadecontactos.shift();
}

eliminar();

console.log(listadecontactos);





