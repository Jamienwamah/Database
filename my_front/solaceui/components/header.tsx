import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navigation-desktop.module.css";

export type NavigationDesktopType = {
  className?: string;
};

const Header: NextPage<NavigationDesktopType> = ({ className = "" }) => {
  const router = useRouter();

  const onNavButtonWrapperClick = useCallback(() => {
    router.push("/solace-health-club");
  }, [router]);

  return (
    <header className={[styles.navigationDesktop, className].join(" ")}>
      <div className={styles.navigationWrapper}>
        <a href="/" className={styles.solaceLogo}>
          <svg
            className={styles.solaceLogoChild}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <use href="/group-48096814.svg#Layer_1" />
          </svg>
          <svg
            className={styles.solaceLogoItem}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <use href="/group-48096815.svg#Layer_1" />
          </svg>
        </a>

        <nav className={styles.navlinksCollection}>
          <a className={styles.navlinks} href="/about-us">
            About
          </a>
          <a className={styles.navlinks} href="/cover">
            Cover
          </a>
          <a className={styles.navlinks} href="/lace-a-i">
            Lace AI
          </a>
          <a className={styles.navlinks} href="/career">
            Career
          </a>
          <a className={styles.navlinks} href="/f-a-q">
            FAQ
          </a>
          <a className={styles.navlinks} href="/blog">
            Blog
          </a>
        </nav>
        <button
          className={styles.navButtonWrapper}
          onClick={onNavButtonWrapperClick}
        >
          <span className={styles.navButtonText}>Join Solace Health Club</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
