const req = new XMLHttpRequest();

req.addEventListener('load', reqListener);
const scriptUrl = document.currentScript.src.replace(location.origin, '').split('/');
scriptUrl.pop();

req.open('GET', scriptUrl.join('/') + '/template.html');
req.send();

function reqListener(){
    const template = this.responseText;
    
    const div = document.createElement('div');
    div.innerHTML = template;

    window.customElements.define('mi-componente', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            let content = div.firstChild.content;
            this.shadowRoot.appendChild(content);
        }
    });
}

