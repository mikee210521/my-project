import styles from "./page.module.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Presentation from "@/components/presentation/Presentation";
import InfoHome from "@/components/infoHome/InfoHome";
import InfoClients from "@/components/infoClients/InfoClients";
import AboutUs from "@/components/aboutUs/AboutUs";
import Pricing from "@/components/pricing/Pricing";
import InvestmentBar from "@/components/investmentBar/InvestmentBar";
import Contact from "@/components/contact/Contact";
import InfoFooter from "@/components/infoFooter/InfoFooter";
import MadeInfoFooter from "@/components/madeInfoFooter/MadeInfoFooter";



export default function Home() {
  return (
    <>
     <header>
         <NavigationBar/>
         <Presentation/>
     </header>
      <section>
          <div>
              <video
                  src={require("../../videos/first.mp4")}
                  autoPlay
                  loop
                  muted
                  className={styles.video}
              />
              <InfoHome/>
          </div>
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
        <section>
            <div>
                <video
                    src={require("../../videos/second.mp4")}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                />
                <InvestmentBar/>
            </div>
        </section>
      <footer>
          <div>
              <Contact/>
          </div>
          <InfoFooter/>
          <MadeInfoFooter/>
      </footer>
    </>
  );
}
