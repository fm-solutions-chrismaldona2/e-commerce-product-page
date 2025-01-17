import styles from "./MainLayout.module.css";
import { LayoutComponentProps } from "@/shared/types";
import NavBar from "@/shared/components/NavBar/NavBar";

const MainLayout = ({ children }: LayoutComponentProps) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
