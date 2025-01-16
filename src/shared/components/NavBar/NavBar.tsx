import styles from "./NavBar.module.css";
import Logo from "@shared/components/Logo/Logo";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";
import { Link } from "react-router";
import Avatar from "@assets/images/image-avatar.png";
import { useState } from "react";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__innerWrapper}>
        <div className={styles.header__leftSection}>
          <MobileMenu />
          <Link to="/" className={styles.logo__container}>
            <Logo className={styles.logo} />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.nav__linkList}>
              <li>
                <Link to="/" className={styles.nav__link}>
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav__link}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/ " className={styles.nav__link}>
                  Women
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav__link}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.nav__link}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.header__rightSection}>
          <button className={styles.cartButton}>
            <CartIcon className={styles.cartButton__icon} />
            <span className={styles.cartButton__count}>3</span>
          </button>
          <button className={styles.profileButton}>
            <img
              src={Avatar}
              alt="Profile Picture"
              className={styles.profileButton__image}
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import { MenuIcon, CloseIcon } from "@shared/components/SvgIcons/SvgIcons";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["nav--mobile"]}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <MenuIcon className={styles.menuButton__icon} />
      </button>

      {isOpen && (
        <div className={styles.nav__menuWrapper}>
          <div className={styles.nav__menuBackdrop}></div>

          <nav className={styles.nav__menu}>
            <button onClick={toggleMenu} className={styles.menuButton}>
              <CloseIcon className={styles.menuButton__icon} />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
