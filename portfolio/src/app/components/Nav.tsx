import Button from "@mui/material/Button";
import styles from "../page.module.css";

export function Nav() {
    return (
        <ul className={styles.nav}>
            <li>
                <Button href="/">Home</Button>
            </li>
            <li>
                <Button href="/portfolio">Portfolio</Button>
            </li>
            <li>
                <Button href="/photos">Photos</Button>
            </li>
            <li>
                <Button href="/contact">Contact</Button>
            </li>
        </ul>
    );
}
