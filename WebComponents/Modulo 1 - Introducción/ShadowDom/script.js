//shadowRoot desde su método
window.customElements.define('mi-componente', class extends HTMLElement {
    constructor() {
        super();
        /*Busqueda por ID*/
        let content = document.querySelector('#template').content;
        /*Acceso al shadowRoot*/
        this.attachShadow({ mode: 'open' });
        /*Inyectar contenido en el shadowRoot*/
        this.shadowRoot.appendChild(document.importNode(content, true));
    }
});
