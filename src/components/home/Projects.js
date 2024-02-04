import styles from "./infohome.module.css"

export default function Projects() {
    return(
        <div className={styles.container_data_projects}>
            <div className={styles.size_card_project}>
                <h2>978 +</h2>
                <h5>Projects Done</h5>
            </div>

            <div className={styles.size_card_project}>
                <h2>181 +</h2>
                <h5>Satisfied Custumers</h5>
            </div>

            <div className={styles.size_card_project}>
                <h2>0,98</h2>
                <h5>Succesful Projects</h5>
            </div>

            <div className={styles.size_card_project}>
                <h2>746 +</h2>
                <h5>Cases</h5>
            </div>
        </div>
    )
}