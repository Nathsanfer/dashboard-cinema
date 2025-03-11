import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.footerInfo}>
                <p>&copy; 2025 Cinema Estrela - Todos os direitos reservados</p>
            </div>
            <div className={styles.footerLinks}>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Contato</a>
            </div>
        </footer>
    );
}

export default Footer;