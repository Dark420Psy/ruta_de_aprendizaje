const html =
    `<div>
        <div></div>
        <div></div>
    </div>`;
const style =
    `
    div > div{
        border-style: solid;
        border-width: 3px;
        margin: 4px;
        margin-bottom: 15px;
        position: relative;
        top: 44px;
    };`;
class Puntos extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${style}</style>${html}`;
    }
}
export default Puntos; 