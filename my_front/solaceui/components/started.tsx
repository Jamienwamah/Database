import type { NextPage } from "next";
import FrameComponent1 from "./testimonial";
import styles from "./started.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.solaceHealthClubInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionTagWrapperWrapper}>
              <div className={styles.sectionTagWrapper}>
                <div className={styles.text}>How To</div>
              </div>
            </div>
            <h1
              className={styles.text1}
            >{`Get started by following this easy steps `}</h1>
            <p className={styles.text2}>
              The process of joining the exclusive Solace Health Club is simple
              and straight forward. The benefits and privileges are carefully
              designed for older adults who wants premium care services and
              comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
