import styles from '../../styles/Navbar.module.css';

export default function Header() {
    return (
        <nav className={styles.navbarcontainer}>
            <div className={styles.navwrapper}>
                <h2>emmanz95</h2>
                <ul className={styles.links}>
                    <li><a>About</a></li>
                </ul>
            </div>
        </nav>
    )
}
