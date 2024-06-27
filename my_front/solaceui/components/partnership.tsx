import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./partnership.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/partner-with-us-page-main-pag");
  }, [router]);

  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.sectionTagWrapperWrapper}>
          <button className={styles.sectionTagWrapper}>
            <div className={styles.text}>Partner With Us</div>
          </button>
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.text1}>
            <p
              className={styles.pharmaciesHospitalsAnd}
            >{`Pharmacies, Hospitals and Laboratories `}</p>
            <p className={styles.inNigeriaPartner}>
              in Nigeria, Partner with Us
            </p>
          </h1>
        </div>
        <div className={styles.testimonialContentWrapper}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className={styles.textParent}>
              <p className={styles.text2}>
                Join forces with us to elevate your business and make a
                meaningful impact! We are teaming up with licensed pharmacies,
                hospitals and laboratories across Nigeria to offer exclusive
                privileges and benefits to over 500,000 elders. Our members
                enjoy cashback on medical expenses, priority services and more
                at our partner locations. Become a Solace Partner and provide
                elderly Nigerians the exceptional care they deserve while
                boosting your patronage. Together, let's give the elders of
                Nigeria the Solace they truly need.
              </p>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.clickHereTo}>
                  Click Here to Become a Solace Partner
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
