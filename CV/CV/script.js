window.customElements.define('click-button',
class extends HTMLElement{
    constructor(){
        super();
        
        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.appendChild(
            this.addEventListener('click',
            function(){
                alert('Hola');
            })
        );
    }
});