'use client'

import styles from "./infoclients.module.css"
import CarouselClients from "@/components/carousel/CarouselClients";

export default function InfoClients() {
    return(
        <div className={styles.info_container}>
            <div className={styles.txt_client}>
                <h1>What Clients Say</h1>
                <p>Problems trying to resolve the conflict between <br/>
                    the two major realms of Classical physics: Newtonian Mechanics
                </p>
            </div>
            <div>
                <CarouselClients/>
            </div>
        </div>
    )
}