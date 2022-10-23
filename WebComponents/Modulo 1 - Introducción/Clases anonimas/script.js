window.customElements.define('mi-componente',
class extends HTMLElement{
    constructor(){
        super();
        /*Busqueda por ID*/
        let template = document.querySelector('#template').content;
        /*Clonar template*/
        let templateClone = document.importNode(template, true);
        /*Inyectar en el DOM*/
        document.body.appendChild(templateClone);
    }
});