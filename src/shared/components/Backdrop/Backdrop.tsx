import styles from "./Backdrop.module.css";
import { LayoutComponentProps } from "@shared/types";
import { motion, Variants } from "motion/react";

const Backdrop = ({ children }: LayoutComponentProps) => {
  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.backdrop}
      role="presentation"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;

const backdrop: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
};
