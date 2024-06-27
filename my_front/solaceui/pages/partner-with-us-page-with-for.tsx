import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/testimonial";
import FrameComponent from "../components/frame-component";
import Content from "../components/content";
import MarketButton1 from "../components/market-button1";
import MarketButton from "../components/market-button";
import NewFooter from "../components/footer";
import styles from "./partner-with-us-page-with-for.module.css";

const PartnerWithUsPageWithFor: NextPage = () => {
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

  const onText15Click = useCallback(() => {
    router.push("/partner-with-us-page-with-for1");
  }, [router]);

  const onFooterLinksContainerClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onFooterLinksContainer2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onFooterLinksContainer3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onFooterLinksContainer4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onFooterLinksContainer5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  return (
    <div className={styles.partnerWithUsPageWithFor}>
      {/* <FrameComponent1
        onSolaceLogoContainerClick={onSolaceLogoContainerClick}
        onNavlinksTextClick={onNavlinksTextClick}
        onNavlinksText1Click={onNavlinksText1Click}
        onNavlinksText2Click={onNavlinksText2Click}
        onNavlinksText3Click={onNavlinksText3Click}
        onNavlinksText4Click={onNavlinksText4Click}
        onNavlinksText5Click={onNavlinksText5Click}
        onNavButtonWrapperClick={onNavButtonWrapperClick}
      />
      <FrameComponent
        onText13Click={onText13Click}
        onText15Click={onText15Click}
      /> */}
      <Content />
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.iconWrapper}>
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
          <div className={styles.iconContainer}>
            <div className={styles.input}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.placeholder}>
                  Subscribe to our newsletter
                </div>
              </button>
            </div>
          </div>
          <div className={styles.inputContainer}>
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

export default PartnerWithUsPageWithFor;
