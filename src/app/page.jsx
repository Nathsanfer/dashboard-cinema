import Header from "@/components/header";
import styles from "./page.module.css";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import DashboardContent from "@/components/dashboardContent/indexx";

export default function Home() {
  return (
    <div>
      <Header/>

      <main className={styles.dashboardContainer}>

        <Menu/>

        <DashboardContent/>

      </main>

      <Footer/>
    </div>
  );
}

