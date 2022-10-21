window.customElements.define('shadow-dom',
    class extends HTMLElement {
        constructor() {
            super();
            //buscamos el contenido del template
            let content = document.querySelector('#template').content;

            let shadowRoot = this.attachShadow({
                mode: 'open'
            });

            shadowRoot.appendChild(document.importNode(
                content, true
            ));

            this.addEventListener('click',
                function () {
                    alert('Si inspecionas el codigo podras encontrar el shadowdom')
                });
        }
    });