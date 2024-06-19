import type { NextPage } from "next";
import styles from "./main.module.css";
import { useRouter } from "next/router";
import { useCallback } from "react";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  const router = useRouter();

  const onNavButtonWrapperClick = useCallback (() => {
    router.push("/solace-health-club");
  }, [router]);

  return (
    <header className={[styles.main, className].join(" ")}>
      <div className={styles.navigationDesktop}>
        <div className={styles.navigationWrapper}>
          <a href="/" className={styles.solaceLogo}>
            <img
              className={styles.solaceLogoChild}
              loading="lazy"
              alt=""
              src="/group-48096814.svg"
            />
            <img
              className={styles.solaceLogoItem}
              loading="lazy"
              alt=""
              src="/group-48096815.svg"
            />
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
            <a className={styles.navButtonText}>Join Solace Health Club</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Main;
