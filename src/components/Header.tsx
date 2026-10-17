import Link from "next/link";
import styles from "../styles/Header.module.css";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styles.navlinks}>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}