import styles from "./MobileMenu.module.css";
import { navLinks } from "@shared/constants/navLinks";
import { Link } from "react-router";
import { motion, Variants } from "motion/react";
import Backdrop from "@shared/components/Backdrop/Backdrop";
import { CloseIcon } from "@shared/components/SvgIcons/SvgIcons";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <Backdrop>
      <motion.nav
        className={styles.menu}
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <button
          onClick={onClose}
          className={styles.menuButton}
          aria-label="Close navigation menu"
        >
          <CloseIcon className={styles.menuButton__icon} />
        </button>
        <ul className={styles.menu__linkList}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={styles.menu__link}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </Backdrop>
  );
};

const menuVariants: Variants = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      type: "tween",
    },
  },
};
