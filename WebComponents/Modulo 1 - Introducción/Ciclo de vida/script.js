window.customElements.define('mi-comp', class extends HTMLElement {
    //Creación
    //Lanzado cuando el componente se crea
    constructor() {//1.1
        super();
        this.attachShadow({ mode: 'open' });
    }
    //Lanzado cuando el componente se adjunta al DOM
    connectedCallback() {
        console.log(document.body.querySelector('mi-comp'))
        console.log('estamos en connectedCallback');
        //ojo con estas comillas ``
        this.shadowRoot.innerHTML = `<h1>${this.getAttribute('titulo')}</h1>`
    }
    //actualización 
    //definir atributos que seran observados
    static get observedAttributes() {
        return ['titulo']
    }
    //definir la funcionalida que se ejecuta cuando alguno
    //de los atributos observados cambia su valor
    attributeChangedCallback(name, old, now) {
        console.log('el nombre del atributo es ' + name + 'Valor anterior: ' + old + 'valor nuevo: ' + now)
        console.log(document.body.querySelector('mi-comp'))
    }
    //Se lanza cuando el componente se elimina del DOM
    disconnectedCallback() {
        console.log('me voy a desconectar', this)
    }
});

setTimeout(()=>{
    let miComp = document.body.querySelector('mi-comp')
    document.body.removeChild(miComp)

}, 5000)