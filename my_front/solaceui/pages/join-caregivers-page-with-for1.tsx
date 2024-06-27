import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import MainContent from "../components/main-content";
import FrameComponent1 from "../components/testimonial";
import NewFooter1 from "../components/footer";
import styles from "./join-caregivers-page-with-for1.module.css";

const JoinCaregiversPageWithFor1: NextPage = () => {
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

  const onText17Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for");
  }, [router]);

  const onText19Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for2");
  }, [router]);

  const onText20Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for1");
  }, [router]);

  const onText21Click = useCallback(() => {
    router.push("/join-caregivers-page-with-for");
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
            <div className={styles.eachContactInfoWrapperParent}>
              <div className={styles.eachContactInfoWrapper}>
                <div className={styles.eachContactInfoWrapperInner}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-48096821.svg"
                  />
                </div>
                <div className={styles.text}>Certified Doctors</div>
                <div className={styles.textWrapper}>
                  <div className={styles.text1} onClick={onText17Click}>
                    Register Here
                  </div>
                </div>
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
                <div className={styles.eachContactInfoWrapperChild}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-48096822.svg"
                  />
                </div>
                <div className={styles.text2}>Certified Nurses</div>
                <div className={styles.textContainer}>
                  <div className={styles.text3}>Register Here</div>
                </div>
              </div>
              <div className={styles.lineContainer}>
                <img className={styles.lineIcon1} alt="" src="/line3.svg" />
              </div>
            </div>
            <div className={styles.eachContactInfoWrapper2}>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-48096823.svg"
                />
              </div>
              <div className={styles.text4}>Qualified Caregivers</div>
              <div className={styles.textFrame}>
                <div className={styles.text5} onClick={onText19Click}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.eachContactInfoWrapperContainer}>
              <div className={styles.eachContactInfoWrapper3}>
                <div className={styles.groupWrapper}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group1.svg"
                  />
                </div>
                <div className={styles.text6}>Certified Therapists</div>
                <div className={styles.textWrapper1}>
                  <div className={styles.text7} onClick={onText20Click}>
                    Register Here
                  </div>
                </div>
              </div>
              <div className={styles.lineFrame}>
                <img className={styles.lineIcon2} alt="" src="/line3.svg" />
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.eachContactInfoWrapper4}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className={styles.text8}>Certified Nutritionist</div>
                <div className={styles.textWrapper2}>
                  <div className={styles.text9} onClick={onText21Click}>
                    Register Here
                  </div>
                </div>
              </div>
              <div className={styles.lineWrapper1}>
                <img className={styles.lineIcon3} alt="" src="/line3.svg" />
              </div>
            </div>
            <div className={styles.eachContactInfoWrapper5}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
              <div className={styles.text10}>Qualified Undertakers</div>
              <div className={styles.textWrapper3}>
                <div className={styles.text11} onClick={onText22Click}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
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
            <h1 className={styles.text12}>Lets take stress off you!</h1>
            <div className={styles.textWrapper4}>
              <p className={styles.text13}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.textWrapper5}>
                <div className={styles.text14}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.text15}>Subscribe to our newsletter</div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <div className={styles.marketButton}>
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
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
      <NewFooter1 />
    </div>
  );
};

export default JoinCaregiversPageWithFor1;
