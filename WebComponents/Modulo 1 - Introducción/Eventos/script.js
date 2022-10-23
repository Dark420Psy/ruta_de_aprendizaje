//Interface generica HTMLElement
 class CustomButton extends HTMLElement{
    constructor() {
        super();
        this.addEventListener('click', 
        function(){
            alert('HTMLElement = interfaz generica')
        });
    };
}
window.customElements.define('componente-button', CustomButton);

//Interface HTMLButtonElement elemento boton
class CustomButton2 extends HTMLButtonElement{
    constructor() {
        super();
        //Agregamos el evento
        this.addEventListener('click', 
        //Agregamos la función al metodo HTMLButtonElement
        function(){
            //alert despliega una ventana de aleta en el navegador
            alert('HTMLButtonElement = interfaz específica')
        });
    };
}
//Definir nombre componente, adjuntar clase, 
//extender el elemento button de la inteface 
window.customElements.define('custom-button2', CustomButton2, 
{extends:'button'});