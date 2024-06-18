import type { NextPage } from "next";
import styles from "./frame-component.module.css";
import MarketButton from "./market-button";
import MarketButton1 from "./market-button1";

export type FrameComponentType = {
  className?: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.ctaSection}>
          <div className={styles.form}>
            <svg
              className={styles.iconFrame} 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2v20M4 10l16-8M4 14l16 8" />
            </svg>
          </div>
          <div className={styles.content}>
            <h1 className={styles.text}>Lets take stress off you!</h1>
            <div className={styles.buttons}>
              <div className={styles.inputs}>
                <div className={styles.textWrapper}>
                  <p className={styles.text1}>
                    Stay in the loop with updates from our team and community.
                    Once a week.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className={styles.input}>
                  <div className={styles.textContainer}>
                    <input
                      type="email"
                      id="email"
                      className={styles.emailInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.input1}>
                    <b className={styles.text3}>Subscribe to our newsletter</b>
                  </button>
                </form>
                <div className={styles.input2}>
                  <div className={styles.downloadButtons}>
                    <MarketButton1 />
                    <MarketButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
