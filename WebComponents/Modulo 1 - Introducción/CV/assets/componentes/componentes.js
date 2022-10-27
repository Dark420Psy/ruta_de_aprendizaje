window.customElements.define('mi-body',class extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
        `
        <!-- Header -->
        <section id="header">
            <header>
                <span class="image avatar"><img src="images/Perfil.jpeg" alt="" /></span>
                <h1 id="logo">Francisco Reyes</h1>
                <p>
                    Desarrollador Analista Jr.<br />
                    franciscoalonso.reyes.contractor@bbva.com
                </p>
            </header>
            <nav id="nav">
                <ul>
                    <li><a href="#one" class="active">Biografía</a></li>
                    <li><a href="#two">Educación</a></li>
                    <li><a href="#three">Experiencia</a></li>
                    <li><a href="#four">Habilidades</a></li>
                </ul>
            </nav>
            <footer>
                <ul class="icons">
                    <li><a href="https://github.com/Dark420Psy" class="icon brands fa-github"><span
                                class="label">Github</span></a></li>
            </footer>
        </section>

        <!-- Wrapper -->
        <div id="wrapper">
            <!-- Main -->
            <div id="main">
                <!-- One -->
                <section id="one">
                    <div class="image main" data-position="center">
                        <img src="images/EstrellaNeutrones.jpeg" alt="" />
                    </div>
                    <div class="container">
                        <header class="major">
                            <h2>Biografía</h2>
                        </header>
                        <mi-bio></mi-bio>
                    </div>
                </section>

                <!-- Two -->
                <section id="two">
                    <div class="container">
                        <header class="major">
                            <h2>Educación</h2>
                        </header>
                        <mi-edu></mi-edu>
                    </div>
                </section>

                <!-- Three -->
                <section id="three">
                    <div class="container">
                        <header class="major">
                            <h2>Experiencia laboral</h2>
                        </header>
                        <mi-experiencia></mi-experiencia>
                    </div>
                </section>

                <!-- Four -->
                <section id="four">
                    <div class="container">
                        <header class="major">
                            <h2>Habilidades</h2>
                        </header>
                        <mi-habilidad></mi-habilidad>
                    </div>
                </section>

            </div>

            <!-- Footer -->
            <section id="footer">
                <div class="container">
                    <ul class="copyright">
                        <li>&copy; Untitled. All rights reserved.</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </section>
        </div>
        <!-- Scripts -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
    `
}});

window.customElements.define('mi-bio', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = `
            <p>
                Me presento: </br>
                Mi nombre es Francisco Alonso Reyes Martínez, tengo 27 años, recido en la CDMX, y estudié la carrera
                de ingeniería en sistemas computacionales.
            </p>
        `;
        this.shadowRoot.innerHTML = template;
    }
});

window.customElements.define('mi-edu', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = `
        <p>
            <ul>
                <li>
                    Universidad: UNITEC campus Sur
                </li>
                <li>
                    Carrera: Ingeniería en sistemas computacionales
                </li>
                <li>
                    Ubicación: Calle Nte. 67 2346, San Salvador Xochimanca, Azcapotzalco, 02870 Ciudad de
                    México, CDMX
                </li>
                <li>
                    Estatus: Título pendiente
                </li>
            </ul>
        </p>
        `;
        this.shadowRoot.innerHTML = template;
    }
});

window.customElements.define('mi-experiencia', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = `
        <p>
            <ul>
                <h1>Editorial Trillas S.A. de C.V.</h1>
                <li>
                    Puesto: Desarrollador
                </li>
                <li>
                    Estatus: Servicio liberado
                </li>
                <li>
                    Duración: 6 meses
                </li>
                <li>
                    Actividades:
                    <ul>
                        <li>Base de datos</li>
                        <li>Desarrollo en JAVA</li>
                        <li>Elaboración de reportes</li>
                        <li>Análisis de datos</li>
                    </ul>

                </li>
            </ul>
            </br>
            <ul>
                <h1>Catorce días S.A. de C.V.</h1>
                <li>Puesto: Validador</li>
                <li>Duración: 4 años</li>
                <li>
                    Actividades:
                    <ul>
                        <li>Validación de datos</li>
                        <li>Base de datos</li>
                        <li>Análisis de datos</li>
                        <li>Elaboración de reportes</li>
                    </ul>
                </li>
            </ul>
        </p>
        `;
        this.shadowRoot.innerHTML = template;
    }
});

window.customElements.define('mi-habilidad', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = `
        <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Bash</li>
            <li>Linux</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Web Componentes</li>
            <li>Git</li>
        </ul>
        `;
        this.shadowRoot.innerHTML = template;
    }
});



