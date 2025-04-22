const Projects = () => {
    return (
        <section id="projects" className="projects">
            <span className="tit"><i className="bi bi-file-earmark-bar-graph"></i> Mis Proyectos</span>
            <div className="projects-div">
                    <div className="proy">
                        <div className="title">
                        <img className="imgsl" src="/imgs/python.webp" alt="P1"/>
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
            </div>
           
        </section>
    );
};

export default Projects;
