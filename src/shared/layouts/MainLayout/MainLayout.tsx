import styles from "./MainLayout.module.css";
import { LayoutComponentProps } from "@shared/types";
import NavBar from "@shared/components/NavBar/NavBar";
import Footer from "@shared/components/Footer/Footer";

const MainLayout = ({ children }: LayoutComponentProps) => {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
