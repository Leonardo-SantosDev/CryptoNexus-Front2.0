import React from "react";
import "../../styles/Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">CryptoNexus</h2>
                <div className="footer-contact">
                    <p>Email: <a href="mailto:cryptonexusinvestimentos@gmail.com" className="footer-email">cryptonexusinvestimentos@gmail.com</a></p>
                    <p>Telefones: 
                        <span className="footer-phone"> +55 (81) 98993-6229, +55 (81) 9763-2462, +55 (81) 9395-3509, +55 (81) 8534-8133</span>
                    </p>
                </div>
            </div>
            <p className="footer-rights">© 2024 CryptoNexus. Todos os direitos reservados.</p>
        </footer>
    );
}
