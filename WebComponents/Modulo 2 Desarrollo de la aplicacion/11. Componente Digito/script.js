
const style = `:host{
        all:initial;
        width: 65px;
        height: 124px;
        display: flex;
        }
        #contenedor-digito{
        display: inline-block;
        position: absolute;
        height: 126px;
        width: 65px;
        }
        .borde{
        border-style: solid;
        border-right-color:  #ffffff00;
        border-left-color:  #ffffff00;
        border-bottom-color:  #ffffff00;
        border-width: 5px;
        }
        #central-superior{
        position: absolute;
        width: 50px;
        left: 2px;
        top: 2px;
        }
        #central{
        position: absolute;
        border-bottom-color: black;
        border-width: 3px;
        top: 59.5px;
        width: 42px;
        left: 8px;
        border-color: black;
        }
        #central:before {
        content: " ";
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        left: -9px;
        border-width: 3px 6px 3px 0;
        border-color: transparent black transparent transparent;
        bottom: -3px;
        }
        #central:after {
        content: " ";
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        right: -9px;
        bottom: -3px;
        border-width: 3px 0 3px 6px;
        border-color: transparent transparent transparent black;
        }
        #izqui-superior{
        transform: rotate(-90deg);
        position: absolute;
        top: 28px;
        left: -24px;
        width: 50px;
        }
        #dere-superior{
        transform: rotate(90deg);
        position: absolute;
        top: 28px;
        left: 28px;
        width: 50px;
        }
        #izqui-inferior{
        transform: rotate(-90deg);
        position: absolute;
        top: 87px;
        left: -24px;
        width: 50px;
        }
        #dere-inferior{
        transform: rotate(90deg);
        position: absolute;
        top: 87px;
        left: 28px;
        width:50px;
        }
        #central-inferior{
        transform: rotate(180deg);
        position: absolute;
        top: 113px;
        width: 50px;
        left:2px;
        }
        .white{
        display:none;
        }`;

const html = `
        <div id="contenedor-digito">
            <div id="central-superior" class="borde"></div>
            <div id="izqui-superior" class="borde"></div>
            <div id="dere-superior" class="borde"></div>
            <div id="central" class="borde"></div>
            <div id="izqui-inferior" class="borde"></div>
            <div id="dere-inferior" class="borde"></div>
            <div id="central-inferior" class="borde"></div>
        </div>`;
class Digito extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${style}</style>${html} `;
    }
}
window.customElements.define('wc-digito', Digito);