import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./new-footer2.module.css";

export type NewFooterType = {
  className?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onMenuLinksContainerClick?: () => void;
  onMenuLinksContainer2Click?: () => void;
  onMenuLinksContainer3Click?: () => void;
  onMenuLinksContainer4Click?: () => void;
  onMenuLinksContainer5Click?: () => void;
};

const NewFooter: NextPage<NewFooterType> = ({
  className = "",
  propTextDecoration,
  propWidth,
  propAlignSelf,
  onMenuLinksContainerClick,
  onMenuLinksContainer2Click,
  onMenuLinksContainer3Click,
  onMenuLinksContainer4Click,
  onMenuLinksContainer5Click,
}) => {
  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const socialIconsWrapperStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const socialIconsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <footer className={[styles.newFooter, className].join(" ")}>
      <div className={styles.footerLinkWrapper}>
        <div className={styles.solaceLogo}>
          <img
            className={styles.solaceLogoChild}
            alt=""
            src="/group-48096814.svg"
          />
          <img
            className={styles.solaceLogoItem}
            alt=""
            src="/group-48096815.svg"
          />
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.menuLinks} onClick={onMenuLinksContainerClick}>
            <a className={styles.about} style={aboutStyle}>
              About
            </a>
          </div>
          <div className={styles.menuLinks1}>|</div>
          <div className={styles.menuLinks2}>
            <div className={styles.cover}>Cover</div>
          </div>
          <div className={styles.menuLinks3}>|</div>
          <div
            className={styles.menuLinks4}
            onClick={onMenuLinksContainer2Click}
          >
            <div className={styles.laceAi}>Lace AI</div>
          </div>
          <div className={styles.menuLinks5}>|</div>
          <div
            className={styles.menuLinks6}
            onClick={onMenuLinksContainer3Click}
          >
            <div className={styles.carrier}>Carrier</div>
          </div>
          <div className={styles.menuLinks7}>|</div>
          <div
            className={styles.menuLinks8}
            onClick={onMenuLinksContainer4Click}
          >
            <div className={styles.faqs}>FAQs</div>
          </div>
          <div className={styles.menuLinks9}>|</div>
          <div
            className={styles.menuLinks10}
            onClick={onMenuLinksContainer5Click}
          >
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.footerDetailsWrapper}>
        <div className={styles.hoursOfOperationsWrapper}>
          <b className={styles.coverage}>Coverage</b>
          <div className={styles.companyWrapper}>
            <div className={styles.statesOfThe}>
              36 States of the Federation
            </div>
            <div className={styles.includingTheFct}>
              Including the FCT, Abuja.
            </div>
          </div>
        </div>
        <div className={styles.address}>
          <b className={styles.address1}>Address</b>
          <div
            className={styles.plot750Aminu}
          >{`Plot 750, Aminu Kano Crescent, Wuse 2, Abuja.  `}</div>
        </div>
        <div className={styles.contact}>
          <b className={styles.contact1}>Contact</b>
          <div className={styles.emailPhone}>
            <div className={styles.mailWrapper}>
              <img
                className={styles.mailOutlineIcon}
                loading="lazy"
                alt=""
                src="/mail-outline.svg"
              />
              <div className={styles.supportsolacecomng}>
                support@solace.com.ng
              </div>
            </div>
            <div className={styles.phoneWrapper}>
              <img
                className={styles.addIcCallIcon}
                loading="lazy"
                alt=""
                src="/add-ic-call.svg"
              />
              <div className={styles.phoneNumber}>(+234 ) 802 7564 943</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider1} />
      <div className={styles.companyDetailsWrapper}>
        <p className={styles.gmonieTechnologiesLtdContainer}>
          <span>{`© 2024 Gmonie Technologies Ltd. All rights reserved. Solace is a health technology platform, not an insurance company or a bank. All services are provided by our licensed partners. By using this website, you accept our `}</span>
          <span className={styles.termsOfUse}>Terms of Use</span>
          <span>{` and `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy.</span>
        </p>
        <div
          className={styles.socialIconsWrapper}
          style={socialIconsWrapperStyle}
        >
          <div className={styles.socialIcons} style={socialIconsStyle}>
            <img className={styles.socialIconList} alt="" src="/vector-7.svg" />
            <img
              className={styles.socialIconList1}
              alt=""
              src="/vector-8.svg"
            />
            <img
              className={styles.socialIconList2}
              alt=""
              src="/vector-9.svg"
            />
            <img
              className={styles.socialIconList3}
              alt=""
              src="/vector-10.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
