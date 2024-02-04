import styles from "./madeinfo.module.css";

export default function MadeInfoFooter() {
    return(
        <div className={styles.main_info_made}>
            <span id={styles.made_info}>
                Made With Love By Figmaland All Right Reserved
            </span>
        </div>
    )
}