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

const MainContent: NextPage<MainContentType> = ({
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
              <a className={styles.navButtonText}>Join Solace Health Club</a>
            </button>
          </div>
        </header>
        <div className={styles.heroHeadingWrapper}>
          <h1 className={styles.heroTitle}>
            Join Our Network of Caregivers Nationwide. Enjoy better pay package
            and more.
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.weOfferComprehensiveInHome}>
              <span>{`We offer comprehensive in-home care for the elderly across Africa through our certified network of caregivers. We recruit only qualified, vetted professionals and compensate them generously to ensure top-quality service. `}</span>
            </span>
            <span className={styles.joinUsInTransformingTheEl}>
              <span>
                Join us in transforming the elderly care sector in Africa.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
