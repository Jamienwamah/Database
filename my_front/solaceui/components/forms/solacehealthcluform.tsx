import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./solacehealth.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/solace-health-club2");
  }, [router]);

  return (
    <section
      className={[styles.subscriptionFormPersonalDeWrapper, className].join(
        " "
      )}
    >
      <div className={styles.subscriptionFormPersonalDe}>
        <img
          className={styles.icons24pxdropdown}
          alt=""
          src="/icons24pxdropdown.svg"
        />
        <img
          className={styles.icons24pxdropdown1}
          alt=""
          src="/icons24pxdropdown1.svg"
        />
        <img
          className={styles.icons24pxdropdown2}
          alt=""
          src="/icons24pxdropdown1.svg"
        />
        <img
          className={styles.icons24pxdropdown3}
          alt=""
          src="/icons24pxdropdown2.svg"
        />
        <img
          className={styles.icons24pxdropdown4}
          alt=""
          src="/icons24pxdropdown3.svg"
        />
        <img
          className={styles.icons24pxdropdown5}
          alt=""
          src="/icons24pxdropdown4.svg"
        />
        <img
          className={styles.icons24pxdropdown6}
          alt=""
          src="/icons24pxdropdown5.svg"
        />
        <img
          className={styles.icons24pxdropdown7}
          alt=""
          src="/icons24pxdropdown.svg"
        />
        <div className={styles.passwordFields}>
          <div className={styles.detailsWrapper}>
            <div className={styles.personalDetailsOf}>
              Personal Details of Solace User
            </div>
            <div className={styles.variousdividerParent}>
              <div className={styles.variousdivider}>
                <div className={styles.componentsdivider} />
              </div>
              <div className={styles.inputFields}>
                <div className={styles.inputRow}>
                  <div className={styles.nameFields}>
                    <div className={styles.nameInput}>
                      <div className={styles.label}>Enter First Name*</div>
                      <div className={styles.placeholder}>
                        Enter your first name
                      </div>
                      <div className={styles.variousdivider1}>
                        <div className={styles.componentsdivider1} />
                      </div>
                    </div>
                    <div className={styles.emailFields}>
                      <div className={styles.label1}>Enter Email Address*</div>
                      <div className={styles.placeholder1}>
                        Enter valid email address
                      </div>
                      <div className={styles.variousdivider2}>
                        <div className={styles.componentsdivider2} />
                      </div>
                    </div>
                    <div className={styles.phoneFields}>
                      <div className={styles.label2}>Referral Code</div>
                      <div className={styles.placeholder2}>
                        Enter referral code
                      </div>
                      <div className={styles.variousdivider3}>
                        <div className={styles.componentsdivider3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.nameFields1}>
                    <div className={styles.labelParent}>
                      <div className={styles.label3}>Enter Last Name*</div>
                      <div className={styles.placeholder3}>
                        Enter your last name
                      </div>
                      <div className={styles.variousdivider4}>
                        <div className={styles.componentsdivider4} />
                      </div>
                    </div>
                    <div className={styles.labelGroup}>
                      <div className={styles.label4}>Phone Number*</div>
                      <div className={styles.frameParent}>
                        <div className={styles.placeholderParent}>
                          <div className={styles.placeholder4}>+234</div>
                          <div className={styles.dropdownIcon}>
                            <img
                              className={styles.heroiconsOutlinechevronDown}
                              alt=""
                              src="/heroiconsoutlinechevrondown.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.placeholder5}>
                          Enter phone number
                        </div>
                      </div>
                      <div className={styles.variousdivider5}>
                        <div className={styles.componentsdivider5} />
                      </div>
                    </div>
                    <div className={styles.labelContainer}>
                      <div className={styles.label5}>
                        Where did you hear about us?*
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.placeholderGroup}>
                          <div className={styles.placeholder6}>
                            Select from options
                          </div>
                          <img
                            className={styles.heroiconsOutlinechevronDown1}
                            alt=""
                            src="/heroiconsoutlinechevrondown-1.svg"
                          />
                        </div>
                        <div className={styles.variousdivider6}>
                          <div className={styles.componentsdivider6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.passwordInput}>
                  <div className={styles.passwordWrapper}>
                    <div className={styles.placeholderWrapper}>
                      <div className={styles.passwordContainer}>
                        <div className={styles.strengthIndicator}>
                          <div className={styles.label6}>Create Password*</div>
                        </div>
                        <div className={styles.inputContainer}>
                          <div className={styles.inputWrapper}>
                            <div className={styles.inputFields1}>
                              <div className={styles.placeholder7}>
                                • • • • • • • • • • • • •
                              </div>
                              <img
                                className={styles.heroiconsOutlineeyeSlash}
                                loading="lazy"
                                alt=""
                                src="/heroiconsoutlineeyeslash.svg"
                              />
                            </div>
                            <div className={styles.dropdownIcon1}>
                              <div className={styles.variousdivider7}>
                                <div className={styles.componentsdivider7} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.passwordDivider}>
                            <div className={styles.strengthWrapper}>
                              <div className={styles.strengthMeter}>
                                <div className={styles.strengthCriteria}>
                                  <div className={styles.mustContainAt}>
                                    Must contain at least
                                  </div>
                                  <div className={styles.characterCheck}>
                                    <input
                                      className={styles.heroiconsOutlinecheck}
                                      type="checkbox"
                                    />
                                    <div
                                      className={styles.alpanumericCharacters}
                                    >{`8 alpanumeric characters `}</div>
                                  </div>
                                  <div className={styles.characterCheck1}>
                                    <input
                                      className={styles.heroiconsOutlinecheck1}
                                      type="checkbox"
                                    />
                                    <div
                                      className={styles.upperCaseCharacter}
                                    >{`1 upper case character `}</div>
                                  </div>
                                </div>
                                <div className={styles.strengthLevel}>
                                  <div className={styles.levelWrapper}>
                                    <div className={styles.passwordsStrength}>
                                      Passwords Strength
                                    </div>
                                    <div className={styles.strengthBar} />
                                  </div>
                                  <div className={styles.excellent}>
                                    Excellent
                                  </div>
                                </div>
                              </div>
                              <div className={styles.specialCheck}>
                                <input
                                  className={styles.heroiconsOutlinecheck2}
                                  type="checkbox"
                                />
                                <div
                                  className={styles.specialCharacter}
                                >{`1 special character `}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.variousdividerWrapper}>
                          <div className={styles.variousdivider8}>
                            <div className={styles.componentsdivider8} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.confirmFields}>
                      <div className={styles.label7}>Confirm Password*</div>
                      <div className={styles.confirmInput}>
                        <div className={styles.passwordDivider1}>
                          <div className={styles.placeholder8}>
                            • • • • • • • • • • • • •
                          </div>
                        </div>
                        <img
                          className={styles.heroiconsOutlineeyeSlash1}
                          alt=""
                          src="/heroiconsoutlineeyeslash.svg"
                        />
                      </div>
                      <div className={styles.variousdivider9}>
                        <div className={styles.componentsdivider9} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.submitApplication}>Next</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent4;
