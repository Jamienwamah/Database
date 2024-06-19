import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cashback.module.css";

export type FrameComponent3Type = {
  className?: string;

  /** Style props */
  navButtonTextPadding?: CSSProperties["padding"];

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

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  navButtonTextPadding,
  onSolaceLogoContainerClick,
  onNavlinksTextClick,
  onNavlinksText1Click,
  onNavlinksText2Click,
  onNavlinksText3Click,
  onNavlinksText4Click,
  onNavlinksText5Click,
  onNavButtonWrapperClick,
}) => {
  const navButtonWrapperStyle: CSSProperties = useMemo(() => {
    return {
      padding: navButtonTextPadding,
    };
  }, [navButtonTextPadding]);

  return (
    <section className={[styles.headerSectionWrapper, className].join(" ")}>
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
              style={navButtonWrapperStyle}
              onClick={onNavButtonWrapperClick}
            >
              <a className={styles.navButtonText}>Join Solace Health Club</a>
            </button>
          </div>
        </header>
        <div className={styles.heroHeadingWrapper}>
          <h1 className={styles.text}>
            {" "}
            Solace Health Club gives the elderly special privileges and benefits
            for their comfort.
          </h1>
          <p className={styles.text1}>
            <span className={styles.joiningTheClubYourselfOrR}>
              <span>{`Joining the Club yourself or registering your elderly as a beneficiary of SHC is easy; pay a monthly membership fee of ₦1,000. Afterwards, a prestigious membership card will be delivered to your doorstep within a few days. This card unlocks exclusive benefits at partner pharmacies, hospitals and laboratories nationwide, including priority services, `}</span>
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

export default FrameComponent3;
