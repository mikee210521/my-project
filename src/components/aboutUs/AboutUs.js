import styles from "./aboutus.module.css";
import YoutubeVideo from "@/components/videoYoutube/YoutubeVideo";

export default function AboutUs() {
    return(
        <div className={styles.behind_section_about_us}>
            <div className={styles.paragraph_container}>
                <h1>About Us</h1>
                <span>
                    Problems trying to resolve the conflict between <br/>
                    the two major realms of Classical physics: Newtonian mechanics
                </span>
            </div>
            <div className={styles.row_media_txt}>
                <div>
                    <YoutubeVideo videoId='lNdOtlpmH5U'/>
                </div>
                <div className={styles.column_txt_us}>
                    <div className={styles.paragraph_container}>
                        <h3>Most trusted in our field</h3>
                        <p>
                            Most calendars are designed for teams. Slate is designed for
                            freelancers who want a  simple way to plan their schedule.
                        </p>
                    </div>
                    <div className={styles.txt_quick_fox}>
                        <span>
                            <b>
                                the quick fox jumps over the lazy dog
                            </b><br/>
                            things on a very small scale...
                        </span>
                        <span>
                            <b>
                                the quick fox jumps over the lazy dog
                            </b><br/>
                            things on a very small scale...
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}