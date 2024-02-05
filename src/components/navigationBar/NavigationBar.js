import styles from "./navbar.module.css";


export default function NavigationBar({children}) {
    return(
        <div className={styles.main_bar_position}>
            <div className={styles.bar_container_txt}>
                <h1 className={styles.brand}>PlaceHolder</h1>
                <div className={styles.nav_page}>
                    <span><a href="#section1">Home</a></span>
                    <span><a href="#section2">About Us</a></span>
                    <span><a href="#section3">Pricing</a></span>
                    <span><a href="#section4">Contact</a></span>
                </div>
            </div>
        </div>
    )
}