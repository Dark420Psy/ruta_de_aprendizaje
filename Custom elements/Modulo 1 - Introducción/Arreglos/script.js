/*Elementos del arreglo*/
const lista = [
    /*Lista de elementos*/
    'Briseida Anali Dorantes Ortiz',
    'Luis David Barragan Ramirez',
    'Billy Brandon Aparicio Ortega',
    'Maria Laura Tena Cruz',
    'Christian Andres Cervantes Moreno',
    'Alan Alexis Velasco Martinez',
    'Cristian Nicolai Hernandez Rios',
    'Gabriela Cruz Portilla',
    'Francisco Alonso Reyes Martinez'
]

/*Busqueda por ID*/
const template = document.querySelector('#template').content;

/*Recorrer elementos e inyectarlos en el DOM*/
lista.forEach((nombre) => {
    /*Clonar template*/
    const templateClone = document.importNode(template, true);
    /*Busqueda etiqueta span*/
    templateClone.querySelectorAll('span')[1].innerText = nombre;
    /*Inyectar en el DOM*/
    ul.appendChild(clonarLista);
});
