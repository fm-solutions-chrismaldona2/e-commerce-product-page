import styles from "./NavBar.module.css";
import Logo from "@shared/components/Logo/Logo";
import CartPopover from "@features/cart/components/CartPopover/CartPopover";
import { Link } from "react-router";
import { navLinks } from "@shared/constants/navLinks";
import { ToggleMobileMenu } from "./components/ToggleMobileMenu/ToggleMobileMenu";
import { ProfileAvatar } from "./components/ProfileAvatar/ProfileAvatar";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__innerWrapper}>
        <div className={styles.header__leftSection}>
          <div className={styles.menuToggle__container}>
            <ToggleMobileMenu />
          </div>

          <Link
            to="/"
            className={styles.logo__container}
            aria-label="Go to homepage"
          >
            <Logo className={styles.logo} />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.nav__linkList}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.nav__link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.header__rightSection}>
          <CartPopover />
          <ProfileAvatar />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
