window.customElements.define('ultimo-ejemplo', 
class extends HTMLElement{
    constructor(){
        super();

        let contenido = document.querySelector('#template');

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(document.importNode(contenido), true);

        this.addEventListener('click', 
        function(){
            alert('pulsaste click');
        });
    }
});