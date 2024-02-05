import styles from "./infohome.module.css";
import IconUsers from "../../../public/IconUsers.svg"
import Image from "next/image";


export default function Projects() {
    return(
        <div className={styles.container_data_projects}>
            <div className={styles.size_card_project}>
                <Image
                    src={IconUsers}
                    alt="SVG Users"
                    priority={true}
                    className={styles.icon_users}
                />
                <h2>978 +</h2>
                <h5>Projects Done</h5>
            </div>

            <div className={styles.size_card_project}>
                <Image
                    src={IconUsers}
                    alt="SVG Users"
                    priority={true}
                    className={styles.icon_users}
                />
                <h2>181 +</h2>
                <h5>Satisfied Customers</h5>
            </div>

            <div className={styles.size_card_project}>
                <Image
                    src={IconUsers}
                    alt="SVG Users"
                    priority={true}
                    className={styles.icon_users}
                />
                <h2>0,98</h2>
                <h5>Successful Projects</h5>
            </div>

            <div className={styles.size_card_project}>
                <Image
                    src={IconUsers}
                    alt="SVG Users"
                    priority={true}
                    className={styles.icon_users}
                />
                <h2>746 +</h2>
                <h5>Cases</h5>
            </div>
        </div>
    )
}