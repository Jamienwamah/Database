import type { NextPage } from "next";
import styles from "./Subscriptions.module.css";
import Header from "./header";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.headerSectionWrapper, className].join(" ")}>
      <div className={styles.headerSection}>
        <Header />

        <div className={styles.heroHeadingWrapper}>
          <h1 className={styles.text}>
            <p
              className={styles.subscribeToSolace}
            >{`Subscribe to Solace Farewell Cover, Get `}</p>
            <p
              className={styles.upTo1200000}
            >{`Up To ₦1,200,000 Cashback on Every `}</p>
            <p className={styles.subscriptionsPaid}>5 Subscriptions Paid.</p>
          </h1>
          <p className={styles.text1}>
            <span
              className={styles.solaceFarewellCover}
            >{`Solace Farewell Cover (SFC) is a form of funeral management package that provides funeral expenses coverage to subscribers on behalf of their loved ones in the case of their demise. While your plan is active, we automatically reimburse you with up to ₦1,200,000 for every five subscriptions paid, depending on your plan type, `}</span>
            <span className={styles.ifNoLoss}>
              if no loss of a loved one occurs during that period.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
