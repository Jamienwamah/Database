import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./our-goals.module.css";
import Header from "./header";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.headerSectionWrapper, className].join(" ")}>
      <div className={styles.headerSection}>
        <Header />

        <div className={styles.heroSection}>
          <div className={styles.heroHeadingWrapper}>
            <h1 className={styles.text}>
              Our goal is to become the leading provider of wellness and
              farewell services to 14.8 million Nigerians aged 60 years and
              above.
            </h1>
          </div>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
