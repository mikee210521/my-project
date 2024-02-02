import styles from "./page.module.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Presentation from "@/components/presentation/Presentation";
import InfoHome from "@/components/infoHome/InfoHome";


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
              <InfoHome/>
          </div>
      </section>
      <footer>

      </footer>
    </>
  );
}
