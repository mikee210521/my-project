import styles from "./infohome.module.css"

export default function Projects() {
    return(
        <div className={styles.projects}>
            <div className={styles.txt_container}>Projects Done</div>
            <div className={styles.txt_container}>Satisfied Customers</div>
            <div className={styles.txt_container}>Successful Projects</div>
            <div className={styles.txt_container}>Cases</div>
        </div>
    )
}