import styles from "../page.module.css";

export function Nav() {
    return (
        <ul className={styles.nav}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/trivia">Trivia</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    );
}
