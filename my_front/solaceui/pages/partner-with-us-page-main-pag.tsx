import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/testimonial";
import FrameComponent from "../components/frame-component";
import MarketButton1 from "../components/market-button1";
import MarketButton from "../components/market-button";
import NewFooter from "../components/new-footer";
import styles from "./partner-with-us-page-main-pag.module.css";

const PartnerWithUsPageMainPag: NextPage = () => {
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

  const onText13Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for2");
  }, [router]);

  const onText14Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for");
  }, [router]);

  const onText15Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for1");
  }, [router]);

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
    <div className={styles.partnerWithUsPageMainPag}>
      {/* <FrameComponent1
        onSolaceLogoContainerClick={onSolaceLogoContainerClick}
        onNavlinksTextClick={onNavlinksTextClick}
        onNavlinksText1Click={onNavlinksText1Click}
        onNavlinksText2Click={onNavlinksText2Click}
        onNavlinksText3Click={onNavlinksText3Click}
        onNavlinksText4Click={onNavlinksText4Click}
        onNavlinksText5Click={onNavlinksText5Click}
        onNavButtonWrapperClick={onNavButtonWrapperClick}
      /> */}
      {/* <FrameComponent
        onText13Click={onText13Click}
        onText14Click={onText14Click}
        onText15Click={onText15Click}
      /> */}
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
            <h1 className={styles.text}>Lets take stress off you!</h1>
            <div className={styles.textWrapper}>
              <p className={styles.text1}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.textContainer}>
                <div className={styles.text2}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.text3}>Subscribe to our newsletter</div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <MarketButton1 />
              <MarketButton />
            </div>
          </div>
        </div>
      </section>
      <NewFooter />
    </div>
  );
};

export default PartnerWithUsPageMainPag;
