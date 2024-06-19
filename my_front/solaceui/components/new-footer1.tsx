import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./new-footer1.module.css";

export type NewFooterType = {
  className?: string;
};

const NewFooter: NextPage<NewFooterType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

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
          <div className={styles.aboutWrapper} onClick={onFrameContainerClick}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.div}>|</div>
          <div className={styles.coverWrapper}>
            <div className={styles.cover}>Cover</div>
          </div>
          <div className={styles.div1}>|</div>
          <div
            className={styles.laceAiWrapper}
            onClick={onFrameContainer2Click}
          >
            <div className={styles.laceAi}>Lace AI</div>
          </div>
          <div className={styles.div2}>|</div>
          <div
            className={styles.carrierWrapper}
            onClick={onFrameContainer3Click}
          >
            <div className={styles.carrier}>Carrier</div>
          </div>
          <div className={styles.div3}>|</div>
          <div className={styles.faqsWrapper} onClick={onFrameContainer4Click}>
            <div className={styles.faqs}>FAQs</div>
          </div>
          <div className={styles.div4}>|</div>
          <div className={styles.blogWrapper} onClick={onFrameContainer5Click}>
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
              <div className={styles.div5}>(+234 ) 802 7564 943</div>
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
        <div className={styles.companyDetailsWrapperInner}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector-9.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector-10.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
