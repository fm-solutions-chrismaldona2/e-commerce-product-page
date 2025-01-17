import styles from "./ToggleMobileMenu.module.css";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { MenuIcon } from "@shared/components/SvgIcons/SvgIcons";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const ToggleMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}
        aria-label="Open navigation menu"
      >
        <MenuIcon className={styles.menuButton__icon} />
      </button>

      <AnimatePresence>
        {isOpen && <MobileMenu onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};
