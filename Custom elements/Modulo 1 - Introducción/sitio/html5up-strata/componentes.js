window.customElements.define('learn-more', 
        class extends HTMLElement{
            constructor(){
                super();
                let content = document.querySelector('#learnMore').content;

                this.attachShadow({mode: 'open'});
                this.shadowRoot.appendChild(document.importNode(content, true));
                
                this.addEventListener('click', 
                function(){
                    alert('Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.')
                });
            }
        });