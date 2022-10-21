/*
1. Usar sintaxis de clase extendiendo de la
etiqueta interface: "HTMLElement"

*/
class CustomButton extends HTMLElement{

}

/*
2. Definimos el nombre de la etiqueta que va a pener nuestro custom
elemet y la clase clase a la que esta asociada.
>> Formato de etiqueta: dos palabras separadas por un -
>> Es el estandard
*/
window.customElements.define('custom-button', CustomButton);

/*
3. Creamos nuestro constructor
*/

constructor() {//Crear constructor
    // Referencia al contructor de la clase padre
    super();
    //funcionalidad
};

/*
4.
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
En este caso usaremos la función addEventListener
addEventListener función que se llamará 
cada vez que el evento sea escuchado
*/
//al pusar click el el elemento despliega mensaje de alerta
this.addEventListener('click');

/*
5. Declarar la funcionalidad
Ojo, ira dentro
*/
function(){
    alert('Boton pulsado')
}

/* 
********************************************
* Finamelte nuestro elemento personalizado *
* quedaría de la siguiente forma           *
********************************************
*/

class CustomButton extends HTMLElement{//1. Clase
    constructor() {//3. Constructor + super
        super();
        //4. método
        this.addEventListener('click', 
        function(){//5. funcionalidad 
            alert('pulsaste click')
        });
    };
}
//2. nombre etiqueta
window.customElements.define('custom-button', CustomButton);

/*
Mandar a llamar nuestro custom element
en nuestro HTML
*/

/*Ignorar*/<>
/*
Mandar a llamar nuestro custom element
en nuestro HTML
*/
<custom-button></custom-button>

/*
Agregamos un texto el cual
sera detectado por el evento
addEventListener
*/
<custom-button>
    <h1>
        dame ** click** 
    </h1>
</custom-button>

</>/*Ignorar*/

/*
Creamos un shadow dom
*/

let documentoDomOculto = elementRef.attachShadow({mode:'open'})

/*
Conectamos el nodeo del shadow-dom al nodo del shadow-root
*/
let miArbolRaiz = elementRef.shadowRoot;

/*
Clases anonimas
Encapsulación de una clase en una misma linea
1. Definimos el nombre de nuestro customElements
*/
window.customElements.define('mi-saludo')

/*
2. Encalsulamos en la misma linea una clase anonima junto a su constructos

*/
window.customElements.define('mi-saludo', class extends HTMLElement{
    constructor(){
        super();
        
    }
})

/*
3. Buscamos el id de nuestro template para obtener 
su contenido
let = variable local
*/
window.customElements.define('mi-saludo', class extends HTMLElement{
    constructor(){
        super();
        //.content llama al contenido del template
        let content = document.querySelector('#template').content;
                
    }
})

/*
Establecer shadowroot
con la palabra reservada this hacemos
referencia al objeto que se está creando
en ese momento osea el custom element

Metodo attachShadow crea el shadowdom
modo abierto para poder acceder desde afuera

Al shadowroot le adjunto una copia del contenido
del template
*/
/*
Recomentado si se va a interactuar con otras
partes del shadowroot
*/
window.customElements.define('mi-saludo', class extends HTMLElement{
    constructor(){
        super();
        let content = document.querySelector('#template').content;

        let shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.appendChild(document.importNode(content,true));
                
    }
});

/*
Otra forma de definirlo es mediante el elemento
que se está generando
*/

//en vez de guardarlo en una variable local
/*
Esto sirve si solo estamos creando definición 
*/ 
window.customElements.define('mi-saludo', class extends HTMLElement{
    constructor(){
        super();
        let content = document.querySelector('#template').content;
        
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(document.importNode(content, true));
    }
});