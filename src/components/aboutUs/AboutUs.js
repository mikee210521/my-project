import styles from "./aboutus.module.css";

export default function AboutUs() {
    return(
        <div className={styles.behind_section_about_us}>
            <div>
                <h1>About Us</h1>
                <span>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics
                </span>
            </div>
            <div>
                <div>video</div>
                <div>
                    <h2>Most trusted in our field</h2>
                    <p>
                        Most calendars are designed for teams. Slate is designed for
                        freelancers who want a simple way to plan their schedule.
                    </p>
                    <div>
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