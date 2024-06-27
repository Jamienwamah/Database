import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import PlanSelector from "../components/plan-selector";
import MarketButton1 from "../components/market-button1";
import MarketButton from "../components/market-button";
import NewFooter from "../components/footer";
import styles from "./farewell-page-bi-annual-payme.module.css";

const FarewellPageBiAnnualPayme: NextPage = () => {
  const router = useRouter();

  const onSolaceLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavlinksTextClick = useCallback(() => {
    router.push("/about-us-page");
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

  const onButtonDefaultClick = useCallback(() => {
    router.push("/farewell-page-with-form");
  }, [router]);

  const onButtonDefault1Click = useCallback(() => {
    router.push("/farewell-page-with-form");
  }, [router]);

  const onButtonDefault2Click = useCallback(() => {
    router.push("/farewell-page-with-form");
  }, [router]);

  const onMenuItemsContainerClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  const onMenuItemsContainer2Click = useCallback(() => {
    router.push("/lace-a-i-page");
  }, [router]);

  const onMenuItemsContainer3Click = useCallback(() => {
    router.push("/career-page");
  }, [router]);

  const onMenuItemsContainer4Click = useCallback(() => {
    router.push("/f-a-q-page");
  }, [router]);

  const onMenuItemsContainer5Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onItemContainerClick = useCallback(() => {
    router.push("/farewell-page-quarterly-payme");
  }, [router]);

  const onItemContainer1Click = useCallback(() => {
    router.push("/farewell-page-annual-payment");
  }, [router]);

  return (
    <div className={styles.farewellPageBiAnnualPayme}>
      {/* <FrameComponent
        onSolaceLogoContainerClick={onSolaceLogoContainerClick}
        onNavlinksTextClick={onNavlinksTextClick}
        onNavlinksText2Click={onNavlinksText2Click}
        onNavlinksText3Click={onNavlinksText3Click}
        onNavlinksText4Click={onNavlinksText4Click}
        onNavlinksText5Click={onNavlinksText5Click}
        onNavButtonWrapperClick={onNavButtonWrapperClick}
      /> */}
      <div className={styles.segmentControlWrapper}>
        <div className={styles.segmentControl}>
          <div className={styles.item} onClick={onItemContainerClick}>
            <div className={styles.label}>{`Quarterly Payment `}</div>
          </div>
          <button className={styles.item1}>
            <b className={styles.label1}>Bi-Annual Payment</b>
          </button>
          <div className={styles.item2} onClick={onItemContainer1Click}>
            <div className={styles.label2}>Annual Payment</div>
          </div>
        </div>
      </div>
      <PlanSelector
        text="₦60,000.00"
        perQuarter="Per Bi-Annual "
        text1="₦90,000.00"
        perQuarter1="Per Bi-Annual "
        text2="₦150,000.00"
        perQuarter2="Per Bi-Annual "
        onButtonDefaultClick={onButtonDefaultClick}
        onButtonDefault1Click={onButtonDefault1Click}
        onButtonDefault2Click={onButtonDefault2Click}
      />
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
          <div className={styles.cTATitleParent}>
            <h1 className={styles.cTA}>Lets take stress off you!</h1>
            <div className={styles.cTADescriptionWrapper}>
              <p className={styles.cTA1}>
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
                <div className={styles.inputPlaceholder}>
                  Subscribe to our newsletter
                </div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
            <div className={styles.downloadButtons}>
              <MarketButton1 />
              {/* <MarketButton propPadding="var(--padding-xs) var(--padding-xl) var(--padding-xs) var(--padding-lgi)" /> */}
            </div>
          </div>
        </div>
      </section>
      <NewFooter />
    </div>
  );
};

export default FarewellPageBiAnnualPayme;
