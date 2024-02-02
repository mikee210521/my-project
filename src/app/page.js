import styles from "./page.module.css";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Presentation from "@/components/presentation/Presentation";


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

      </section>
      <footer>

      </footer>
    </>
  );
}
