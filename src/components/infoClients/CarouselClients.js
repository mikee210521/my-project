import styles from "./infoclients.module.css"
export default function CarouselClients() {
    return(
        <div className={styles.card_position}>
            <div className={styles.client_card}>
                <span className={styles.info_client}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
            </div>
        </div>
    )
}