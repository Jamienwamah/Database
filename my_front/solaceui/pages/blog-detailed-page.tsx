import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Main from "../components/main";
import FrameComponent4 from "../components/subscribe";
import MarketButton1 from "../components/market-button1";
import MarketButton from "../components/market-button";
import NewFooter from "../components/new-footer";
import styles from "./blog-detailed-page.module.css";

const BlogDetailedPage: NextPage = () => {
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

  return (
    <div className={styles.blogDetailedPage}>
      <Main />
      <FrameComponent4 />
      <section className={styles.contentAndCTA}>
        <div className={styles.frameParent}>
          <div className={styles.postDateWrapper}>
            <p className={styles.postDate}>
              <span className={styles.whenShouldYou}>
                When should you begin to care for your mother? The answer is
                simple: start now, while you're still young. No blessing offers
                as much comfort in life as the heartfelt prayers from a
                contented mother who feels loved and cherished while she is
                alive.
              </span>
              <span className={styles.blankLine}>&nbsp;</span>
              <span className={styles.imagineTheCountless}>
                Imagine the countless sacrifices she made for you—carrying you
                in her womb for nine long months, enduring the pain of
                childbirth, and continually putting your needs before her own.
                These acts of love have shaped the person you are today, and now
                it's your turn to give back.
              </span>
            </p>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-1000002567@2x.png"
          />
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              <span className={styles.asYourMother}>
                As your mother enters her golden years, prioritizing her
                well-being, especially her health, becomes more important than
                ever. It’s never too late to start caring for her, regardless of
                how hectic your life may be. Picture the joy on her face and the
                peace in your heart when you show her how much she means to you.
              </span>
              <span className={styles.blankLine1}>&nbsp;</span>
              <span className={styles.takeAMoment}>
                Take a moment to reflect on her sacrifices and consider the
                profound impact your care can have on her life. Embrace this
                advice and start now. Your efforts will not only bring joy to
                your mother but also peace and fulfillment to your own heart.
              </span>
              <span className={styles.blankLine2}>&nbsp;</span>
              <span className={styles.thankYouIn}>
                Thank you in advance for embracing this advice. Share this
                message on your social media platforms and inspire others to
                honor their mothers. Together, we can spread a wave of love and
                appreciation for the incredible women who shaped our lives.
              </span>
            </p>
          </div>
        </div>
      </section>
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
          <div className={styles.textParent}>
            <h1 className={styles.text1}>Lets take stress off you!</h1>
            <div className={styles.description}>
              <p className={styles.text2}>
                Stay in the loop with updates from our team and community. Once
                a week.
              </p>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.inputLabel}>
                <div className={styles.inputLabel1}>Enter your email</div>
              </div>
              <button className={styles.input1}>
                <div className={styles.placeholder}>
                  Subscribe to our newsletter
                </div>
              </button>
            </div>
          </div>
          <div className={styles.downloadButtonsWrapper}>
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

export default BlogDetailedPage;
