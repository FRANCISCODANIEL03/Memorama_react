const Contact = () => {
    return (
        <footer id="contact" className="contact">
            <div className="contact-info">
            <span><i className="bi bi-person-lines-fill"></i> Contacto</span>
                <div className="info">
                <p><i className="bi bi-telephone"></i> 5543234522</p>
                <p><i className="bi bi-envelope"></i> francisco23#@gmail.com</p>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/francisco-daniel-gregorio-guevara-383b1a353?
                    utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank"><i className="bi bi-linkedin"></i> linkedIn</a>
                    <a href="https://github.com/FRANCISCODANIEL03" 
                    target="_blank"><i class="bi bi-github"></i> GitHub</a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Contact