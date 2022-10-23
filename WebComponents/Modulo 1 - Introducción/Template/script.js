/*Busqueda por ID*/
const template = document.querySelector('#template').content;
/*Clonar template*/
const templateClone = document.importNode(template, true);
/*Inyectar en el DOM*/
document.body.appendChild(templateClone);