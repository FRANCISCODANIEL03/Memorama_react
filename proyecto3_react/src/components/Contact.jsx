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
                    <a href="https://www.facebook.com/share/1AEu33Z5x9/" 
                    target="_blank"><i className="bi bi-facebook"></i> Facebook</a>
                    <a href="https://www.instagram.com/fran031147?utm_source=qr&igsh=a253bWQzajZvcm5n" 
                    target="_blank"><i className="bi bi-instagram"></i> Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Contact