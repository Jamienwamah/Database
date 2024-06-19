import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mission.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  const router = useRouter();

  const onBottomLeftContentWrapperClick = useCallback(() => {
    router.push("/about-us-page");
  }, [router]);

  return (
    <section
      className={[styles.missionStatementSectionWrapper, className].join(" ")}
    >
      <div className={styles.missionStatementSection}>
        <div className={styles.missionStatementMainWrapper}>
          <div className={styles.sectionTagWrapperParent}>
            <button className={styles.sectionTagWrapper}>
              <div className={styles.text}>Our Mission Statement</div>
            </button>
            <div className={styles.descriptionWrapperParent}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.text1}>
                  To provide outstanding elderly care services that guarantees
                  peace of mind to our customers all over the world.
                </p>
                <p className={styles.text2}>
                  We constantly offer seamless and top-notch service experience
                  to all our users, handling every client with care and
                  efficiency. By revolutionizing elderly care service delivery
                  in Africa, we aim to alleviate the burden of taking care of
                  the elderly, ensuring a proactive care that guarantees old age
                  enjoyment and a dignified farewell in the event of their
                  passing.
                </p>
              </div>
              <div
                className={styles.bottomLeftContentWrapper}
                onClick={onBottomLeftContentWrapperClick}
              >
                <b className={styles.navButton}>Learn more</b>
              </div>
            </div>
          </div>
          <div className={styles.maskGroupWrapper}>
            <svg
              className={styles.maskGroupIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <image href="/mask-group-1@2x.png" width="100%" height="100%" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
