import styles from "./contact.module.css"

export default function Contact() {
    return(
        <div className={styles.main_container_contact}>
            <div className={styles.main_container_card_contact}>
                <div className={styles.txt_info_card_contact}>
                    <div className={styles.txt_theme}>
                        <h5>Contact Us</h5>
                        <h2>Make an Appointment</h2>
                    </div>
                    <div className={styles.grid_form_contact}>
                        <input type="text" name="full name" placeholder="Full Name" className={styles.txt_input}/>
                        <input type="email" name="email" placeholder="Email" className={styles.txt_input}/>
                        <select className={styles.text_select}>
                            <option value="take1">Please Select</option>
                            <option value="take2">take 2</option>
                            <option value="take3">take 3</option>
                            <option value="take4">take 4</option>
                            <option value="take5">take 5</option>
                        </select>
                        <select className={styles.text_select}>
                            <option value="take1">4:00 Available</option>
                            <option value="take2">take 2</option>
                            <option value="take3">take 3</option>
                            <option value="take4">take 4</option>
                            <option value="take5">take 5</option>
                        </select>
                    </div>
                    <textarea name="message" placeholder="Message" className={styles.textarea_container}></textarea>
                    <button className={styles.button_form}>
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    )
}