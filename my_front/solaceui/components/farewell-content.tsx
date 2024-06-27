import type { NextPage } from "next";
import styles from "./main-content.module.css";

export type MainContentType = {
  className?: string;

  /** Action props */
  onSolaceLogoContainerClick?: () => void;
  onNavlinksTextClick?: () => void;
  onNavlinksText1Click?: () => void;
  onNavlinksText2Click?: () => void;
  onNavlinksText3Click?: () => void;
  onNavlinksText4Click?: () => void;
  onNavlinksText5Click?: () => void;
  onNavButtonWrapperClick?: () => void;
};

const FarewellContent: NextPage<MainContentType> = ({
  className = "",
  onSolaceLogoContainerClick,
  onNavlinksTextClick,
  onNavlinksText1Click,
  onNavlinksText2Click,
  onNavlinksText3Click,
  onNavlinksText4Click,
  onNavlinksText5Click,
  onNavButtonWrapperClick,
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.headerSection}>
        <header className={styles.navigationDesktop}>
          <div className={styles.navigationWrapper}>
            <div
              className={styles.solaceLogo}
              onClick={onSolaceLogoContainerClick}
            >
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
            </div>
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
              <a className={styles.navlinks} href="/solace-health-club">Join Healthy Elders Club</a>
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default FarewellContent;
