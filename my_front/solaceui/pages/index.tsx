import type { NextPage } from "next";
import FeaturesContentWrapper from "../components/features-content-wrapper";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/testimonial";
import FrameComponent2 from "../components/partnership";
import FrameComponent3 from "../components/joinsolacecaregiver";
import FrameComponent4 from "../components/subscribe";
import FrameComponent5 from "../components/partnership2";
import FrameComponent6 from "../components/mission";
import FrameComponent7 from "../components/usp";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import NewFooter from "../components/footer";
import styles from "./index.module.css";


type FarewellPageWithForm1Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Homepage: NextPage<FarewellPageWithForm1Props> = ({
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div className={styles.homepage}>
      <section className={styles.headerSectionWrapper}>
        <div className={styles.headerSection}>
          <Header />
          <HeroSection />
        </div>
      </section>
      <section className={styles.homepageInner}>
        <div className={styles.frameParent}>
          <FrameComponent7 />
          <FeaturesContentWrapper />
        </div>
      </section>
      <FrameComponent6 />
      <FrameComponent5 />
      <section className={styles.homepageChild}>
        <div className={styles.frameGroup}>
          <div className={styles.sectionTagWrapperWrapper}>
            <button className={styles.sectionTagWrapper}>
              <b className={styles.text}>Our Services</b>
            </button>
          </div>
          <h1 className={styles.text1}>Our Unique Service Offerings</h1>
          <p className={styles.text2}>
            <span
              className={styles.ourServicesAre}
            >{`Our services are designed to provide the elderly with superior quality services that guarantee `}</span>
            <span className={styles.theHighestStandard}>
              the highest standard of holistic health and wellness care at the
              best price point.
            </span>
          </p>
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default Homepage;
