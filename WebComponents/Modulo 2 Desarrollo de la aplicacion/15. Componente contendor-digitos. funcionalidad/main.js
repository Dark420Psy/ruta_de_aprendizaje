/*importar archivos */
import Digito from './digito/digito.js';
import ContenedorDigitos from './contenedor_digitos/contenedorDigitos.js';
import Punto from './punto/punto.js';

window.customElements.define('wc-digito', Digito);
window.customElements.define('wc-contenedor-digitos', ContenedorDigitos);
window.customElements.define('wc-punto', Punto);

