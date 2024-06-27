import type { NextPage } from "next";
import styles from "./form-content.module.css";

export type FormContentType = {
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

const FormContent: NextPage<FormContentType> = ({
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
              <a className={styles.navlinks} onClick={onNavlinksTextClick}>
                About
              </a>
              <a className={styles.navlinks1} onClick={onNavlinksText1Click}>
                Cover
              </a>
              <a className={styles.navlinks2} onClick={onNavlinksText2Click}>
                Lace AI
              </a>
              <a className={styles.navlinks3} onClick={onNavlinksText3Click}>
                Career
              </a>
              <a className={styles.navlinks4} onClick={onNavlinksText4Click}>
                FAQ
              </a>
              <a className={styles.navlinks5} onClick={onNavlinksText5Click}>
                Blog
              </a>
            </nav>
            <button
              className={styles.navButtonWrapper}
              onClick={onNavButtonWrapperClick}
            >
              <a className={styles.navButtonText}>Join Healthy Elders Club</a>
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default FormContent;
