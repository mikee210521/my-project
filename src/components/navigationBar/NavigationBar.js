import styles from "./navbar.module.css";

export default function NavigationBar() {
    return(
        <div className={styles.main_bar_position}>
            <div className={styles.bar_container_txt}>
                <h1 className={styles.brand}>PlaceHolder</h1>
                <div className={styles.nav_page}>
                    <span><a href="">Home</a></span>
                    <span><a href="">About Us</a></span>
                    <span><a href="">Pricing</a></span>
                    <span><a href="">Contact</a></span>
                </div>
            </div>
        </div>
    )
}