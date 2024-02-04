import PricingCards from "@/components/pricing/PricingCards";
import styles from "./pricing.module.css"

export default function Pricing() {
    return(
        <div className={styles.column_container_main}>
            <div className={styles.section_pricing_container}>
                <h2 className={styles.txt_title_pricing}>Pricing</h2>
                <p className={styles.txt_paragraph_pricing}>
                    Problems trying to resolve the conflict between <br/>
                    the two major realms of Classical physics: Newtonian Mechanics
                </p>
            </div>
            <div>
                <PricingCards/>
            </div>
        </div>
    )
}