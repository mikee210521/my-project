'use client'
import styles from "./investmentbar.module.css"
import {useEffect, useState} from "react";
export default function InvestmentBar() {

    const [data,setData] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        const levelMapping = {
            0: "0",
            10: "100",
            20: "100",
            30: "500",
            40: "500",
            50: "1000",
            60: "1000",
            70: "2000",
            80: "4000",
            90: "8000",
            100: "8000",
        };
        setSelectedLevel(levelMapping[data] || "");
    }, [data]);


    return(
        <div className={styles.main_container_investment}>
            <div className={styles.container_background}>
                <div className={styles.title_container_investment}>
                    <span className={styles.title_bar_investment}>Amount of Investment</span>
                </div>
                <div className={styles.main_container_position}>
                    <div className={styles.data_txt_change}>
                        ${data}
                    </div>
                    <div>
                        <input
                            type="range"
                            className={styles.range_bar}
                            min="0"
                            max="100"
                            step="10"
                            value={data}
                            onChange={(event)=>
                                setData(event.target.value)
                        }
                        />
                    </div>
                    <div className={styles.prices_container_txt}>
                        <span>$0</span>
                        <span>$100</span>
                    </div>
                </div>
                <div className={styles.price_container}>
                    <span className={styles.txt_price}>Profit <br/><br/>${selectedLevel}</span>
                </div>
            </div>
        </div>
    )
}