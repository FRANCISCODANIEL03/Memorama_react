const Projects = () => {
    return (
        <section id="projects" className="projects">
            <span className="tit"><i className="bi bi-file-earmark-bar-graph"></i> Mis Proyectos</span>
            <div className="projects-div">
                <div className="proy">
                    <div className="title">
                        <img className="imgsl" src="/imgs/python.webp" alt="P1" />
                        <h2>Python</h2>
                    </div>
                    <div className="project-description">
                        <h3>Videojuego Basado en Pygame <br /> <br /></h3>
                        <p>Este proyecto esta basado en el videojuegos Space Invaders
                            creado a partir de la libreria pygame, utlizando esta libreria
                            se pueden manipular trazos y objetos dentro de una pantalla, agregando
                            funcionalidad y adaptabilidad, ademas de agregar nuevas funciones
                            y mecanismos tambien se implementa un sistema de guardado de puntos.
                        </p>
                    </div>
                </div>
                <div className="proy">
                    <div className="title">
                        <img className="imgsl" src="/imgs/nodejs.webp" alt="P2" />
                        <img className="imgsl" src="/imgs/postgresql.webp" alt="P2" />
                        <h2>Node.js PostgreSQL</h2>
                    </div>
                    <div className="project-description">
                        <h3>API creada con Nodejs utlizando una base de datos PostgreSQL</h3>
                        <p>Esta API esta creada con Nodejs y utliza una base de datos
                            PostgreSQL para almacenar los datos.
                            Esta diseñada para insertar, modificar, extraer y eliminar tareas.
                        </p>
                    </div>
                </div>
                <div className="proy">
                    <div className="title">
                        <img className="imgsl" src="/imgs/all.webp" alt="P2" />
                        <img className="imgsl" src="/imgs/nest.webp" alt="P2" />
                        <h2>HTML Javascript CSS Nest</h2>
                    </div>
                    <div className="project-description">
                        <h3>Punto de venta con API en Nest y front utlizando CSS y Javascript</h3>
                        <p>Este proyecto esta diseñado para poder administrar un punto de venta que
                            incluye varias tiendas y productos. Cuenta con registro de usuarios,
                            un seguimiento de todas las ventas realizadas y una
                            pagina especial para el administrador, el cual tiene control total sobre los productos,
                            tiendas, usuarios y compras.
                        </p>
                    </div>
                </div>
                <div className="proy">
                    <div className="title">
                        <img className="imgsl" src="/imgs/java.webp" alt="P2" />
                        <h2>Java</h2>
                    </div>
                    <div className="project-description">
                        <h3>Analizador Lexico y Sintatico en español basado en el lenguaje Java</h3>
                        <p>En este proyecto se uliza la libreria de JFlex y JCup para realizar
                            un analizador lexico y sintatico, el cual esta basado en el lenguaje
                            de programacion Java, este analizador reconoce palabras y estructuras en
                            español, se tiene pensado implementar el analizador semantico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
