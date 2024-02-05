import styles from "./investmentbar.module.css";
import InvestmentBar from "@/components/investmentBar/InvestmentBar";

export default function SectionInvestment() {
    return(
        <div>
            <video
                src={require("../../../videos/second.mp4")}
                autoPlay
                loop
                muted
                className={styles.video}
            />
            <InvestmentBar/>
        </div>
    )
}