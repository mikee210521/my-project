import styles from "./investmentbar.module.css"
export default function InvestmentBar() {
    return(
        <div className={styles.main_container_investment}>
            <div className={styles.container_background}>
                <div className={styles.title_container_investment}>
                    <span className={styles.title_bar_investment}>Amount of Investment</span>
                </div>
                <div>
                    <span>aqui va la barra</span>
                </div>
                <div className={styles.price_container}>
                    <span className={styles.txt_price}>Profit</span>
                </div>
            </div>
        </div>
    )
}