import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./partner-with-us-page-with-for2.module.css";

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
      </section>
      <section className={styles.registrationFormForRegisterWrapper}>
        <div className={styles.registrationFormForRegister}>
          <form className={styles.frameGroup}>
            <div className={styles.registrationFormForRegisterParent}>
              <div className={styles.registrationFormFor}>
                Registration Form for Registered Pharmacies
              </div>
              <div className={styles.placeholderWrapper}>
                <div className={styles.placeholder}>
                  Nigerian Businesses Only
                </div>
              </div>
            </div>
            <div className={styles.variousdivider}>
              <div className={styles.componentsdivider} />
            </div>
            <div className={styles.inputFilled}>
              <div className={styles.label}>Enter Name of Pharmacy*</div>
              <div className={styles.placeholder1}>
                Enter name of your pharmacy here
              </div>
              <div className={styles.variousdivider1}>
                <div className={styles.componentsdivider1} />
              </div>
              <img
                className={styles.icons24pxdropdown}
                alt=""
                src="/icons24pxdropdown19.svg"
              />
            </div>
            <div className={styles.inputFilled1}>
              <div className={styles.label1}>Enter CAC Registration Number</div>
              <div className={styles.placeholder2}>
                Enter CAC registration Number
              </div>
              <div className={styles.variousdivider2}>
                <div className={styles.componentsdivider2} />
              </div>
              <img
                className={styles.icons24pxdropdown1}
                alt=""
                src="/icons24pxdropdown19.svg"
              />
            </div>
            <div className={styles.dragAndDropField}>
              <div className={styles.uploadWrapper}>
                <img className={styles.uploadIcon} alt="" src="/upload.svg" />
              </div>
              <input
                className={styles.labelText}
                placeholder="Click to Upload Photo of CAC Certificate of Registration here"
                type="text"
              />
            </div>
            <div className={styles.inputFilled2}>
              <div className={styles.label2}>First Name of Owner*</div>
              <img
                className={styles.icons24pxdropdown2}
                alt=""
                src="/icons24pxdropdown2.svg"
              />
              <div className={styles.placeholder3}>Enter first name here</div>
              <div className={styles.variousdivider3}>
                <div className={styles.componentsdivider3} />
              </div>
            </div>
            <div className={styles.inputFilled3}>
              <div className={styles.label3}>Last Name of Owner*</div>
              <img
                className={styles.icons24pxdropdown3}
                alt=""
                src="/icons24pxdropdown2.svg"
              />
              <div className={styles.placeholder4}>Enter last name here</div>
              <div className={styles.variousdivider4}>
                <div className={styles.componentsdivider4} />
              </div>
            </div>
            <div className={styles.inputFilled4}>
              <div className={styles.label4}>Email Address of Owner*</div>
              <img
                className={styles.icons24pxdropdown4}
                alt=""
                src="/icons24pxdropdown2.svg"
              />
              <div className={styles.placeholder5}>
                Enter valid email address
              </div>
              <div className={styles.variousdivider5}>
                <div className={styles.componentsdivider5} />
              </div>
            </div>
            <div className={styles.inputFilled5}>
              <div className={styles.label5}>Phone Number of Owner*</div>
              <img
                className={styles.icons24pxdropdown5}
                alt=""
                src="/icons24pxdropdown2.svg"
              />
              <div className={styles.placeholder6}>
                Enter valid phone number
              </div>
              <div className={styles.variousdivider6}>
                <div className={styles.componentsdivider6} />
              </div>
            </div>
            <div className={styles.inputFilled6}>
              <div className={styles.label6}>Enter PCN Number*</div>
              <img
                className={styles.icons24pxdropdown6}
                alt=""
                src="/icons24pxdropdown2.svg"
              />
              <div className={styles.placeholder7}>
                Enter pharmacy license number
              </div>
              <div className={styles.variousdivider7}>
                <div className={styles.componentsdivider7} />
              </div>
            </div>
            <div className={styles.labelParent}>
              <div className={styles.label7}>
                National Identification Number of Owner*
              </div>
              <div className={styles.placeholder8}>Enter your NIN number</div>
              <div className={styles.variousdivider8}>
                <div className={styles.componentsdivider8} />
              </div>
            </div>
            <div className={styles.dragAndDropField1}>
              <div className={styles.uploadContainer}>
                <img className={styles.uploadIcon1} alt="" src="/upload.svg" />
              </div>
              <input
                className={styles.labelText1}
                placeholder="Click to Upload Photo of Your PCN License Here "
                type="text"
              />
            </div>
            <div className={styles.inputFilled7}>
              <div className={styles.label8}>Number of Pharmacy Stores*</div>
              <div className={styles.placeholderParent}>
                <div className={styles.placeholder9}>
                  Select numbers of stores
                </div>
                <img
                  className={styles.heroiconsOutlinechevronDown}
                  alt=""
                  src="/heroiconsoutlinechevrondown.svg"
                />
              </div>
              <img
                className={styles.icons24pxdropdown7}
                alt=""
                src="/icons24pxdropdown20.svg"
              />
              <div className={styles.variousdivider9}>
                <div className={styles.componentsdivider9} />
              </div>
            </div>
            <div className={styles.inputfield}>
              <div className={styles.label9}>
                Store Location in How Many States?
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.placeholderGroup}>
                  <div className={styles.placeholder10}>
                    Enter number of states
                  </div>
                  <img
                    className={styles.heroiconsOutlinechevronDown1}
                    alt=""
                    src="/heroiconsoutlinechevrondown-12.svg"
                  />
                </div>
                <div className={styles.variousdivider10}>
                  <div className={styles.componentsdivider10} />
                </div>
              </div>
            </div>
            <div className={styles.inputfield1}>
              <div className={styles.label10}>
                State Where Pharmacy is Located*
              </div>
              <div className={styles.placeholderContainer}>
                <div className={styles.placeholder11}>Select a state</div>
                <img
                  className={styles.heroiconsOutlinechevronDown2}
                  alt=""
                  src="/heroiconsoutlinechevrondown-1.svg"
                />
              </div>
              <div className={styles.variousdivider11}>
                <div className={styles.componentsdivider11} />
              </div>
            </div>
            <div className={styles.inputfield2}>
              <div className={styles.label11}>
                City Where Pharmacy is Located*
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.placeholderParent1}>
                  <div className={styles.placeholder12}>Select a city</div>
                  <img
                    className={styles.heroiconsOutlinechevronDown3}
                    alt=""
                    src="/heroiconsoutlinechevrondown-12.svg"
                  />
                </div>
                <div className={styles.variousdivider12}>
                  <div className={styles.componentsdivider12} />
                </div>
              </div>
            </div>
            <div className={styles.labelGroup}>
              <div className={styles.label12}>Address of Pharmacy*</div>
              <input
                className={styles.placeholder13}
                placeholder="Enter your valid residential address"
                type="text"
              />
              <div className={styles.variousdivider13}>
                <div className={styles.componentsdivider13} />
              </div>
            </div>
            <div className={styles.heroiconsSolidplusCircleParent}>
              <img
                className={styles.heroiconsSolidplusCircle}
                loading="lazy"
                alt=""
                src="/heroiconssolidpluscircle.svg"
              />
              <div className={styles.addAnotherPharmacyAddressWrapper}>
                <div
                  className={styles.addAnotherPharmacy}
                >{`Add Another Pharmacy Address `}</div>
              </div>
              <div className={styles.heroiconsSolidarrowLeftCirParent}>
                <img
                  className={styles.heroiconsSolidarrowLeftCir}
                  loading="lazy"
                  alt=""
                  src="/heroiconssolidarrowleftcircle.svg"
                />
                <div className={styles.back}>Back</div>
              </div>
            </div>
            <div className={styles.dragAndDropField2}>
              <div className={styles.uploadFrame}>
                <img className={styles.uploadIcon2} alt="" src="/upload.svg" />
              </div>
              <input
                className={styles.labelText2}
                placeholder="Click to Upload Proof of Pharmacy Address. i.e NEPA Bill"
                type="text"
              />
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <b className={styles.submitApplication}>Submit Form</b>
            </button>
          </form>
          <img
            className={styles.icons24pxdropdown8}
            alt=""
            src="/icons24pxdropdown37.svg"
          />
          <img
            className={styles.icons24pxdropdown9}
            alt=""
            src="/icons24pxdropdown.svg"
          />
          <img
            className={styles.icons24pxdropdown10}
            alt=""
            src="/icons24pxdropdown42.svg"
          />
          <img
            className={styles.icons24pxdropdown11}
            alt=""
            src="/icons24pxdropdown43.svg"
          />
        </div>
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
