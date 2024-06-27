import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import PlanSelector1 from "../components/plan-selector1";
import MarketButton1 from "../components/market-button1";
import MarketButton from "../components/market-button";
import NewFooter from "../components/footer";
import styles from "./farewell-page-annual-payment.module.css";

const FarewellPageAnnualPayment: NextPage = () => {
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

  const onItemContainerClick = useCallback(() => {
    router.push("/farewell-page-quarterly-payme");
  }, [router]);

  const onItemContainer1Click = useCallback(() => {
    router.push("/farewell-page-bi-annual-payme");
  }, [router]);

  return (
    <div className={styles.farewellPageAnnualPayment}>
      <div className={styles.main}>
        <div className={styles.segmentControl}>
          <div className={styles.item} onClick={onItemContainerClick}>
            <div className={styles.label}>{`Quarterly Payment `}</div>
          </div>
          <div className={styles.item1} onClick={onItemContainer1Click}>
            <div className={styles.label1}>Bi-Annual Payment</div>
          </div>
          <button className={styles.item2}>
            <b className={styles.label2}>Annual Payment</b>
          </button>
        </div>
      </div>
      <PlanSelector1 />
    </div>
  );
};

export default FarewellPageAnnualPayment;
