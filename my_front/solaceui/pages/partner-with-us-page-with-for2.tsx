import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./partner-with-us-page-with-for2.module.css";
import Pharmacies from "../components/forms/pharmacistform";

const PartnerWithUsPageWithFor2: NextPage = () => {
  const router = useRouter();

  const onSolaceLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavlinksTextClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onNavlinksText1Click = useCallback(() => {
    router.push("/farewell-page-quarterly-payme");
  }, [router]);

  const onNavlinksText2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onNavlinksText3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onNavlinksText4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onNavlinksText5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onNavButtonWrapperClick = useCallback(() => {
    router.push("/solace-health-club");
  }, [router]);

  const onText14Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for");
  }, [router]);

  const onText15Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for1");
  }, [router]);

  const onButtonClick = useCallback(() => {
    // Please sync "Success Screen" to the project
  }, []);

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
    <div className={styles.partnerWithUsPageWithFor}>
      <div className={styles.headerSectionWrapper}>
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
            <h1 className={styles.text}>
              <p
                className={styles.partnerWithSolace}
              >{`Partner with Solace to give the elderly special `}</p>
              <p className={styles.privilegesAndBenefits}>
                privileges and benefits for their comfort.
              </p>
            </h1>
            <p className={styles.text1}>
              <span
                className={styles.weOfferA}
              >{`We offer a prestigious Solace Smart Membership Card to over 500,000 members nationwide to unlock exclusive `}</span>
              <span
                className={styles.benefitsSuchAs}
              >{`benefits such as priority services, cashback on medical expenses and other privileges at partner `}</span>
              <span
                className={styles.pharmaciesHospitalsAnd}
              >{`pharmacies, hospitals and laboratories nationwide.  `}</span>
            </p>
          </div>
        </div>
      </div>
      <section className={styles.targetAudienceCategoriesWrapper}>
        <div className={styles.targetAudienceCategories}>
          <div className={styles.frameParent}>
            <div className={styles.eachContactInfoWrapperParent}>
              <div className={styles.eachContactInfoWrapper}>
                <div className={styles.pharmacyIconWrapper}>
                  <img
                    className={styles.pharmacyIcon}
                    loading="lazy"
                    alt=""
                    src="/pharmacy-icon.svg"
                  />
                </div>
                <div className={styles.text2}>Pharmacies</div>
                <div className={styles.text3}>Register Here</div>
              </div>
              <div className={styles.lineWrapper}>
                <img
                  className={styles.lineIcon}
                  loading="lazy"
                  alt=""
                  src="/line3.svg"
                />
              </div>
            </div>
            <div className={styles.eachContactInfoWrapperGroup}>
              <div className={styles.eachContactInfoWrapper1}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className={styles.text4}>{`Hospitals & Clinics`}</div>
                <div className={styles.textWrapper}>
                  <div className={styles.text5} onClick={onText14Click}>
                    Register Here
                  </div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <img className={styles.lineIcon1} alt="" src="/line3.svg" />
              </div>
            </div>
            <div className={styles.eachContactInfoWrapper2}>
              <div className={styles.labIconWrapper}>
                <img
                  className={styles.labIcon}
                  loading="lazy"
                  alt=""
                  src="/lab-icon.svg"
                />
              </div>
              <div className={styles.text6}>Laboratories</div>
              <div className={styles.textContainer}>
                <div className={styles.text7} onClick={onText15Click}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pharmacies />
      </section>
      
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.iconFrameWrapper}>
            <img
              className={styles.iconFrame}
              loading="lazy"
              alt=""
              src="/icon-frame.svg"
            />
          </div>
          <div className={styles.textParent}>
            <h1 className={styles.text8}>Lets take stress off you!</h1>
            <div className={styles.textFrame}>
              <p className={styles.text9}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.textWrapper1}>
                <div className={styles.text10}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.text11}>Subscribe to our newsletter</div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <div className={styles.marketButton}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <div className={styles.textButton}>
                  <b className={styles.downloadOnThe}>Download on the</b>
                  <div className={styles.appStore}>App Store</div>
                </div>
              </div>
              <div className={styles.marketButton1}>
                <img
                  className={styles.icnSvgIcnIcnLg}
                  loading="lazy"
                  alt=""
                  src="/icn-svgicn-icnlg.svg"
                />
                <div className={styles.textButton1}>
                  <b className={styles.downloadOnThe1}>Download on the</b>
                  <div className={styles.googlePlay}>Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.newFooter}>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.solaceLogo1}>
            <img
              className={styles.solaceLogoInner}
              alt=""
              src="/group-48096814.svg"
            />
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-48096815.svg"
            />
          </div>
          <div className={styles.footerMenu}>
            <div
              className={styles.aboutWrapper}
              onClick={onFrameContainerClick}
            >
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
            <div
              className={styles.faqsWrapper}
              onClick={onFrameContainer4Click}
            >
              <div className={styles.faqs}>FAQs</div>
            </div>
            <div className={styles.div4}>|</div>
            <div
              className={styles.blogWrapper}
              onClick={onFrameContainer5Click}
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
            <p
              className={styles.plot750Aminu}
            >{`Plot 750, Aminu Kano Crescent, Wuse 2, Abuja.  `}</p>
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
              <img className={styles.vectorIcon2} alt="" src="/vector-7.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-8.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector-9.svg" />
              <img className={styles.vectorIcon5} alt="" src="/vector-10.svg" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnerWithUsPageWithFor2;
