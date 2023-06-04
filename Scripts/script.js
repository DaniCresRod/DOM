//Mostrar en consola todo el documento
console.log(document);

//Seleccionar todas las imagenes y mostrarlas
let todasLasImagenes=document.querySelectorAll("img");
//console.log(todasLasImagenes);

//Mostrar el nodo con etiqueta img que tiene un atributo src="Resources/aragorn.jpg"
console.log(document.querySelector("img[src='Resources/aragorn.jpg']"));

//Creo un array
let arrayCompañia=["Gandalf", "Aragorn", "Boromir", "Legolas", "Frodo", "Pippin", "Sam", "Merry", "Gimli"];

//Eliminar el primer nodo ul que es hijo del mismo padre que una etiqueta h2
//let objetivo=document.querySelector("h2").parentNode.removeChild(document.querySelector("ul"));
//console.log(objetivo);

//Seleccionar el primer nodo que sea padre de una etiqueta h2
let padreDeListas=document.querySelector("h2").parentNode;

//Mostrar el siguiente hermano del primer hijo del primer nodo que sea padre de una etiqueta h2
//console.log(padreDeListas.firstElementChild.nextElementSibling);

//Crear un nodo ul, y situarlo como siguiente hermano del primer hijo del primer elemento que tenga un hijo h2
//let nuevoObjetivo=padreDeListas.insertBefore(document.createElement("ul"),padreDeListas.firstElementChild.nextElementSibling);
/*
arrayCompañia.forEach(function(x){
    let nuevoLi=nuevoObjetivo.appendChild(document.createElement("li"));
    nuevoLi.textContent=x;
    nuevoLi.style.color="blue";
});*/