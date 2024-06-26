import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/partnership";
import NewFooter from "../components/footer";
import styles from "./farewell-page-with-form2.module.css";

const FarewellPageWithForm2: NextPage = () => {
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

  const onMenuLinksContainerClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onMenuLinksContainer2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onMenuLinksContainer3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onMenuLinksContainer4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onMenuLinksContainer5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  return (
    <div className={styles.farewellPageWithForm3}>
      {/* <FrameComponent
        onSolaceLogoContainerClick={onSolaceLogoContainerClick}
        onNavlinksTextClick={onNavlinksTextClick}
        onNavlinksText1Click={onNavlinksText1Click}
        onNavlinksText2Click={onNavlinksText2Click}
        onNavlinksText3Click={onNavlinksText3Click}
        onNavlinksText4Click={onNavlinksText4Click}
        onNavlinksText5Click={onNavlinksText5Click}
        onNavButtonWrapperClick={onNavButtonWrapperClick}
      /> */}
      <FrameComponent2 />
      <section className={styles.callToAction}>
        <div className={styles.ctaSection}>
          <div className={styles.iconFrameWrapper}>
            <img
              className={styles.iconFrame}
              loading="lazy"
              alt=""
              src="/icon-frame.svg"
            />
          </div>
          <div className={styles.ctaHeadingParent}>
            <h1 className={styles.ctaHeading}>Lets take stress off you!</h1>
            <div className={styles.cTADescription}>
              <p className={styles.ctaSubheading}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.inputLabelWrapper}>
                <div className={styles.inputLabel}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.text}>Subscribe to our newsletter</div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <div className={styles.marketButton}>
                <img
                  className={styles.appleIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
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

export default FarewellPageWithForm2;
