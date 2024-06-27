import type { NextPage } from "next";
import styles from "./main-content.module.css";

export type JoinContentType = {
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

const JoinContent: NextPage<JoinContentType> = ({
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
              <span className={styles.navButtonText}>Join Healthy Elders Club</span>
            </button>
          </div>
        </header>
        <div className={styles.heroHeadingWrapper}>
          <h1 className={styles.text}>
            {" "}
            Healthy Elders Club gives the elderly special privileges and benefits
            for their comfort.
          </h1>
          <p className={styles.text1}>
            <span className={styles.joiningTheClubYourselfOrR}>
              <span>{`Joining the Club yourself or registering your elderly as a beneficiary of 
              SHC is easy; pay a monthly membership fee of ₦1,000. Afterwards, 
              a prestigious membership card will be delivered to your doorstep within a few days. T
              his card unlocks exclusive benefits at partner pharmacies, hospitals and laboratories nationwide, 
              including priority services, `}</span>
            </span>
            <span className={styles.cashbackOnMedicalExpensesA}>
              <span>
                cashback on medical expenses and other privileges on the Solace
                app.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );

};

export default JoinContent;
