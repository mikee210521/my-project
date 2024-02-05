import styles from "./page.module.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Presentation from "@/components/presentation/Presentation";
import InfoClients from "@/components/infoClients/InfoClients";
import AboutUs from "@/components/aboutUs/AboutUs";
import Pricing from "@/components/pricing/Pricing";
import Contact from "@/components/contact/Contact";
import InfoFooter from "@/components/infoFooter/InfoFooter";
import MadeInfoFooter from "@/components/madeInfoFooter/MadeInfoFooter";
import HomeCover from "@/components/home/HomeCover";
import SectionInvestment from "@/components/investmentBar/SectionInvestment";




export default function Home() {
  return (
    <>
     <header>
         <NavigationBar/>
         <Presentation/>
     </header>
      <section>
          <div id="section1">
              <HomeCover/>
          </div>
      </section>
        <section>
            <InfoClients/>
        </section>
        <section>
            <div id="section2">
                <AboutUs/>
            </div>
        </section>
        <section>
            <div id="section3">
                <Pricing/>
            </div>
        </section>
        <section>
            <SectionInvestment/>
        </section>
      <footer>
          <div id="section4">
              <Contact/>
          </div>
          <InfoFooter/>
          <MadeInfoFooter/>
      </footer>
    </>
  );
}
