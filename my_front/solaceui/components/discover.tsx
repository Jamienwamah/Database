import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./discover.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/solace-health-club1");
  }, [router]);

  return (
    <section className={[styles.solaceHealthClubInner, className].join(" ")}>
      <div className={styles.textParent}>
        <h1 className={styles.text}>
          Discover why you or your elderly loved ones should join Solace Health
          Club now.
        </h1>
        <div className={styles.solaceShc}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.shcCard}>
              <div className={styles.top}>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-48096814-1.svg"
                    />
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameContainer}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/group-48096815-1.svg"
                        />
                        <div className={styles.cardTypeWrapper}>
                          <div className={styles.cardType}>SHC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.siliconChipParent}>
                        <img
                          className={styles.siliconChip}
                          loading="lazy"
                          alt=""
                          src="/silicon-chip.svg"
                        />
                        <div className={styles.rfidWrapper}>
                          <img
                            className={styles.rfidIcon}
                            loading="lazy"
                            alt=""
                            src="/rfid.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardType1}>Debit Card</div>
                  </div>
                </div>
                <img className={styles.patternIcon} alt="" src="/pattern.svg" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.div}>1520 0100 3356 6888</div>
                <div className={styles.cardHolderNameParent}>
                  <div className={styles.cardHolderName}>CARD HOLDER NAME</div>
                  <div className={styles.cardholderName}>
                    AKIN JOHN FOTUROTI
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.ornament12Parent}>
                    <img
                      className={styles.ornament12Icon}
                      loading="lazy"
                      alt=""
                      src="/ornament-12.svg"
                    />
                    <div className={styles.validThruParent}>
                      <div className={styles.validThru}>VALID THRU</div>
                      <b className={styles.b}>13/27</b>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.validThruGroup}>
                        <div className={styles.validThru1}>VALID THRU</div>
                        <b className={styles.b1}>13/27</b>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.cardIssuerLogo}
                    loading="lazy"
                    alt=""
                    src="/card-issuer-logo.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.textGroup}>
              <div className={styles.text1}>₦1,000.00</div>
              <div className={styles.text2}>{`Per Month, Paid Annually `}</div>
            </div>
            <div className={styles.features}>
              <div className={styles.eachAdditionalFeature}>
                <img
                  className={styles.check1Traced}
                  loading="lazy"
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p className={styles.text3}>
                  Get cashback of up to 25% on all medical expenses made with
                  SHC card in all partner Pharmacies, Hospitals and Labs.
                </p>
              </div>
              <div className={styles.eachAdditionalFeature1}>
                <img
                  className={styles.check1Traced1}
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p className={styles.text4}>
                  Card is linked seamlessly to your Solace mobile wallet for
                  easy medical expense management.
                </p>
              </div>
              <div className={styles.eachAdditionalFeature2}>
                <img
                  className={styles.check1Traced2}
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p
                  className={styles.text5}
                >{`Get priority services at partner Pharmacies Hospitals & Labs nationwide, including on partner online medical stores .`}</p>
              </div>
              <div className={styles.eachAdditionalFeature3}>
                <img
                  className={styles.check1Traced3}
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p className={styles.text6}>
                  Effortlessly manage prescriptions, doctors appointments,
                  eating and sleeping routine of the elderly with Lace AI
                  assistant.
                </p>
              </div>
              <div className={styles.eachAdditionalFeature4}>
                <img
                  className={styles.check1Traced4}
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p className={styles.text7}>
                  Get dedicated account manager and priority customer care
                  service at a click of a button on the Solace app.
                </p>
              </div>
              <div className={styles.eachAdditionalFeature5}>
                <img
                  className={styles.check1Traced5}
                  alt=""
                  src="/check-1-traced.svg"
                />
                <p
                  className={styles.text8}
                >{`Get free membership card replacement in the case of misplacement or damaged after the first 365 days of issuance. `}</p>
              </div>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.submitApplication}>
                Join Solace Health Club
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
