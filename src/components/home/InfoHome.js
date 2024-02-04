
import styles from "./infohome.module.css"
import Projects from "@/components/home/Projects";

export default function InfoHome() {
    return(
        <div className={styles.main_container_home}>
            <div className={styles.info_container}>
                <div className={styles.txt_size_info_projects}>
                    <h1>Better Strategy With <br/> Quality Business</h1>
                    <p>Problems trying to resolve the conflict between <br/>
                        the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>
                </div>
                <div>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}