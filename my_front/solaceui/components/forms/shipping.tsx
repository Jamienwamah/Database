import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./shipping.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    // Please sync "Success Screen" to the project
  }, []);

  return (
    <section
      className={[styles.addShippingAddressWrapper, className].join(" ")}
    >
      <div className={styles.addShippingAddress}>
        <div className={styles.addShippingAddressParent}>
          <div className={styles.addShippingAddress1}>Add Shipping Address</div>
          <div className={styles.variousdivider}>
            <div className={styles.componentsdivider} />
          </div>
        </div>
        <img
          className={styles.icons24pxdropdown}
          alt=""
          src="/icons24pxdropdown.svg"
        />
        <img
          className={styles.icons24pxdropdown1}
          alt=""
          src="/icons24pxdropdown6.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.labelParent}>
            <div className={styles.label}>First Name of Reciever*</div>
            <div className={styles.streetInputWrapperParent}>
              <div className={styles.streetInputWrapper}>
                <div className={styles.placeholder}>
                  Enter first name of receiver
                </div>
                <div className={styles.variousdivider1}>
                  <div className={styles.componentsdivider1} />
                </div>
              </div>
              <div className={styles.label1}>Detailed Address of Receiver*</div>
            </div>
          </div>
          <div className={styles.cityInput}>
            <div className={styles.label2}>Last Name of Reciever*</div>
            <div
              className={styles.placeholder1}
            >{`Enter last name of receiver `}</div>
            <div className={styles.variousdivider2}>
              <div className={styles.componentsdivider2} />
            </div>
          </div>
        </div>
        <div className={styles.stateInput}>
          <p className={styles.placeholder2}>
            Enter your detailed and valid address of receiver with house number
          </p>
          <div className={styles.variousdivider3}>
            <div className={styles.componentsdivider3} />
          </div>
        </div>
        <img
          className={styles.icons24pxdropdown2}
          alt=""
          src="/icons24pxdropdown2.svg"
        />
        <img
          className={styles.icons24pxdropdown3}
          alt=""
          src="/icons24pxdropdown2.svg"
        />
        <div className={styles.countryDropdown}>
          <div className={styles.frameGroup}>
            <div className={styles.labelGroup}>
              <div className={styles.label3}>
                State Where Receiver is Located*
              </div>
              <div className={styles.placeholder3}>Select State</div>
              <img
                className={styles.heroiconsOutlinechevronDown}
                alt=""
                src="/heroiconsoutlinechevrondown1.svg"
              />
              <div className={styles.variousdivider4}>
                <div className={styles.componentsdivider4} />
              </div>
            </div>
            <div className={styles.dropdownItems}>
              <div className={styles.label4}>Email Address of Receiver</div>
              <div className={styles.placeholder4}>
                Enter valid email address
              </div>
              <div className={styles.variousdivider5}>
                <div className={styles.componentsdivider5} />
              </div>
            </div>
          </div>
          <div className={styles.additionalFields}>
            <div className={styles.additionalFieldsInner}>
              <div className={styles.labelContainer}>
                <div className={styles.label5}>Local Government Area*</div>
                <div className={styles.placeholder5}>{`Select LGA `}</div>
                <img
                  className={styles.heroiconsOutlinechevronDown1}
                  alt=""
                  src="/heroiconsoutlinechevrondown1.svg"
                />
                <div className={styles.variousdivider6}>
                  <div className={styles.componentsdivider6} />
                </div>
              </div>
            </div>
            <div className={styles.zipCode}>
              <div className={styles.label6}>Phone Number of Receiver*</div>
              <div className={styles.placeholder6}>
                Enter valid phone number
              </div>
              <div className={styles.variousdivider7}>
                <div className={styles.componentsdivider7} />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.submitApplication}>Next</b>
        </button>
        <img
          className={styles.icons24pxdropdown4}
          alt=""
          src="/icons24pxdropdown7.svg"
        />
        <img
          className={styles.icons24pxdropdown5}
          alt=""
          src="/icons24pxdropdown8.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent5;
