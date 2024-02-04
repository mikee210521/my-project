import styles from "./page.module.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Presentation from "@/components/presentation/Presentation";
import InfoHome from "@/components/infoHome/InfoHome";
import InfoClients from "@/components/infoClients/InfoClients";
import AboutUs from "@/components/aboutUs/AboutUs";
import Pricing from "@/components/pricing/Pricing";



export default function Home() {
  return (
    <>
     <header>
         <div className={styles.header}>
             <NavigationBar/>
             <Presentation/>
         </div>
     </header>
      <section>
          <div>
              <video
                  src={require("../../videos/first.mp4")}
                  autoPlay
                  loop
                  muted
                  className={styles.video}
              />;
              <InfoHome/>
          </div>
          {/*<video*/}
          {/*    src={require("../../videos/second.mp4")}*/}
          {/*    autoPlay*/}
          {/*    loop*/}
          {/*    muted*/}
          {/*/>*/}
      </section>
        <section>
            <InfoClients/>
        </section>
        <section>
            <AboutUs/>
        </section>
        <section>
            <Pricing/>
        </section>
      <footer>

      </footer>
    </>
  );
}
