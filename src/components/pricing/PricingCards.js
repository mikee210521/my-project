import styles from "./pricing.module.css"

export default function PricingCards() {
    return(
        <div className={styles.row_package_pricing}>
            {/*first-card*/}
            <div className={styles.card_container_package}>
                <h3 className={styles.title_txt_card}>FREE</h3>
                <h5 className={styles.sub_txt_card}>Organize across all apps by hand</h5>
                <span className={styles.cost_package_mounth}>
                    <h2 className={styles.number_cost_card}>0</h2>
                    <div>
                        <h3 className={styles.price_sing}>$</h3>
                        <h5 className={styles.txt_date_package}>
                        Per Month
                        </h5>
                    </div>
                </span>
                <div className={styles.container_benefits}>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>1GB Cloud Storage</h6>
                    <h6 className={styles.package_benefits}>Email and Community Support</h6>
                </div>
                <button className={styles.package_button}>
                    Try for free
                </button>
            </div>
            {/*second-card*/}
            <div className={styles.card_container_package}>
                <h3 className={styles.title_txt_card}>STANDARD</h3>
                <h5 className={styles.sub_txt_card}>Organize across all apps by hand</h5>
                <span className={styles.cost_package_mounth}>
                    <h2 className={styles.number_cost_card}>19</h2>
                    <div>
                        <h3 className={styles.price_sing}>$</h3>
                        <h5 className={styles.txt_date_package}>Per Month</h5>
                    </div>
                </span>
                <div className={styles.container_benefits}>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>Unlimited product updates</h6>
                    <h6 className={styles.package_benefits}>1GB Cloud Storage</h6>
                    <h6 className={styles.package_benefits}>Email and Community Support</h6>
                </div>
                <button className={styles.package_button}>
                    Buy Now
                </button>
            </div>
        </div>
    )
}
