import Header from "@/components/header";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div>
      <Header/>

      <main className={styles.dashboardContainer}>

        <Menu/>

      </main>

      <Footer/>
    </div>
  );
}

