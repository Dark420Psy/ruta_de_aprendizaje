import style from './estilos.js';
import html from './template.js';
import numeros from './numeros.js';

class Digito extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${style}</style>${html} `;
        this._contenedorDigito = this.shadowRoot.querySelector('#contenedor-digito');
    }
    connectedCallback() {
        this.numero = 0;
        setInterval(() => {
            this.avanzar(this.numero);
        }, 100);
    }
    get numero() {
        return parseFloat(this.getAttribute('numero'));
    }
    avanzar(numero) {
        this.numero = numero === 9 ? 0 : numero + 1;
    }
    set numero(numero) {
        this.setAttribute('numero', numero);
    }
    static get observedAttributes() {
        return ['numero'];
    }
    attributeChangedCallback(name, old, now) {
        switch (name) {
            case 'numero':
                if (old != now) {
                    this.renderNumero();
                }
        }

    }

    renderNumero() {
        Array.from(this._contenedorDigito.children).forEach((child) => {
            child.classList.add('white');
        });
        numeros.get(this.numero).forEach((identificador) => {
            this._contenedorDigito.querySelector('#' + identificador).classList.remove('white');
        })
    }
}

export default Digito;