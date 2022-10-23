class Componente extends HTMLElement {
    constructor() {
        super();
        /*Busqueda por ID*/
        const template = document.querySelector('#template').content;
        /*Clonar template*/
        const templateClone = document.importNode(template, true);
        /*Inyectar en el DOM*/
        document.body.appendChild(templateClone)
    }
}
window.customElements.define('mi-componente', Componente);
