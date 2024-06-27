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
      </div >
    </section >
  );
};

export default MainContent;
