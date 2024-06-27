import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import MainContent from "../components/main-content";
import GroupComponent from "../components/group-component";
import FrameComponent from "../components/frame-component";
import NewFooter from "../components/footer";
import styles from "./join-caregivers-page-with-for.module.css";

const JoinCaregiversPageWithFor: NextPage = () => {
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

  const onText18Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for1");
  }, [router]);

  const onText20Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for1");
  }, [router]);

  const onText21Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for");
  }, [router]);

  const onItemsContainerClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onItemsContainer2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onItemsContainer3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onItemsContainer4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onItemsContainer5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onText19Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for2");
  }, [router]);

  const onText22Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for2");
  }, [router]);

  return (
    <div className={styles.joinCaregiversPageWithFor}>
      <MainContent
        onSolaceLogoContainerClick={onSolaceLogoContainerClick}
        onNavlinksTextClick={onNavlinksTextClick}
        onNavlinksText1Click={onNavlinksText1Click}
        onNavlinksText2Click={onNavlinksText2Click}
        onNavlinksText3Click={onNavlinksText3Click}
        onNavlinksText4Click={onNavlinksText4Click}
        onNavlinksText5Click={onNavlinksText5Click}
        onNavButtonWrapperClick={onNavButtonWrapperClick}
      />
      <section className={styles.targetAudienceCategoriesWrapper}>
        <div className={styles.targetAudienceCategories}>
          <div className={styles.frameParent}>
            <GroupComponent
              group48096821="/group-48096821.svg"
              infoTitle="Certified Doctors"
              propMinWidth="122px"
              propGap="20px"
              propFlex="unset"
              propPadding="0px var(--padding-34xl) 0px var(--padding-33xl)"
              propWidth="33.9px"
              propPadding1="0px var(--padding-4xl) 0px var(--padding-2xl)"
            />
            <GroupComponent
              group48096821="/group-48096822.svg"
              infoTitle="Certified Nurses"
              propMinWidth="117px"
              propGap="20px"
              propFlex="unset"
              propPadding="0px var(--padding-31xl)"
              propWidth="31px"
              propPadding1="0px var(--padding-lgi) 0px var(--padding-mid)"
              onText16Click={onText18Click}
            />
            <div className={styles.eachContactInfoWrapper}>
              <div className={styles.eachContactInfoWrapperInner}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-48096823.svg"
                />
              </div>
              <div className={styles.contactTitle}>Qualified Caregivers</div>
              <div className={styles.contactInfo}>
                <div className={styles.text} onClick={onText19Click}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <GroupComponent
              group48096821="/group1.svg"
              infoTitle="Certified Therapists"
              propMinWidth="117px"
              propGap="24.5px"
              propFlex="1"
              propPadding="0px var(--padding-41xl)"
              propWidth="35.2px"
              propPadding1="0px var(--padding-12xl) 0px var(--padding-10xl)"
              onText16Click={onText20Click}
            />
            <GroupComponent
              group48096821="/vector1.svg"
              infoTitle="Certified Nutritionist"
              propMinWidth="122px"
              propGap="22.5px"
              propFlex="1"
              propPadding="0px var(--padding-45xl)"
              propWidth="38px"
              propPadding1="0px var(--padding-17xl) 0px var(--padding-15xl)"
              onText16Click={onText21Click}
            />
            <div className={styles.eachContactInfoWrapper1}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
              <div className={styles.text1}>Qualified Undertakers</div>
              <div className={styles.textWrapper}>
                <div className={styles.text2} onClick={onText22Click}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FrameComponent /> */}
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.iconContainer}>
            <img
              className={styles.iconFrame}
              loading="lazy"
              alt=""
              src="/icon-frame.svg"
            />
          </div>
          <div className={styles.headingParent}>
            <h1 className={styles.heading}>Lets take stress off you!</h1>
            <div className={styles.textContainer}>
              <p className={styles.text3}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.fieldLabel}>
                <div className={styles.text4}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.text5}>Subscribe to our newsletter</div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <div className={styles.marketButton}>
                <img className={styles.appStoreIcon} alt="" src="/vector.svg" />
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
      <NewFooter />
    </div>
  );
};

export default JoinCaregiversPageWithFor;
