import styles from "./footer.module.css"

export default function InfoFooter() {
    return(
        <div className={styles.main_container_footer}>
           <div className={styles.grid_row_links_padding}>
               <div className={styles.info_txt_links}>
                   <h3>Get in touch</h3>
                   <p>the quick fox jumps over the <br/>lazy dog</p>
                   <div>

                   </div>
               </div>

               <div className={styles.info_txt_links}>
                   <h3>Company info</h3>
                   <a href="#">About Us</a>
                   <a href="#">Carrier</a>
                   <a href="#">We are Hiring</a>
                   <a href="#">Blog</a>
               </div>

               <div className={styles.info_txt_links}>
                   <h3>Features</h3>
                   <a href="#">Business Marketing</a>
                   <a href="#">User Analytic</a>
                   <a href="#">Live Chat</a>
                   <a href="#">Unlimited Support</a>
               </div>

               <div className={styles.info_txt_links}>
                   <h3>Resources</h3>
                   <a href="#">IOS & Android</a>
                   <a href="#">Watch a Demo</a>
                   <a href="#">Customers</a>
                   <a href="#">API</a>
               </div>
           </div>
        </div>
    )
}