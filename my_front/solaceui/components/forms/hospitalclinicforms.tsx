import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./content1.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    // Please sync "Success Screen" to the project
  }, []);

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.registrationFormForRegister}>
        <form className={styles.formContainer}>
          <div className={styles.inputFields}>
            <div
              className={styles.registrationFormFor}
            >{`Registration Form for Registered Hospitals & Clinics`}</div>
            <div className={styles.placeholders}>
              <div className={styles.placeholder}>Nigerian Businesses Only</div>
            </div>
          </div>
          <div className={styles.variousdivider}>
            <div className={styles.componentsdivider} />
          </div>
          <div className={styles.inputFilled}>
            <div className={styles.label}>
              Enter Name of Hospital or Clinic*
            </div>
            <div className={styles.placeholder1}>
              Enter name of hospital or clinic
            </div>
            <div className={styles.variousdivider1}>
              <div className={styles.componentsdivider1} />
            </div>
            <svg
              className={styles.icons24pxdropdown}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
          </div>
          <div className={styles.inputFilled1}>
            <div className={styles.label1}>Enter CAC Registration Number</div>
            <div className={styles.placeholder2}>
              Enter CAC registration Number
            </div>
            <div className={styles.variousdivider2}>
              <div className={styles.componentsdivider2} />
            </div>
            <svg
              className={styles.icons24pxdropdown}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
          </div>
          <div className={styles.dragAndDropField}>
            <div className={styles.uploadWrapper}>
              <svg
                className={styles.uploadIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use href="/icons24pxdropdown19.svg#Layer_1" />
              </svg>
            </div>
            <input
              className={styles.labelText}
              placeholder="Click to Upload Photo of CAC Certificate of Registration here"
              type="text"
            />
          </div>
          <div className={styles.inputFilled2}>
            <div className={styles.label2}>First Name of Owner*</div>
            <svg
              className={styles.icons24pxdropdown2}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div className={styles.placeholder3}>Enter first name here</div>
            <div className={styles.variousdivider3}>
              <div className={styles.componentsdivider3} />
            </div>
          </div>
          <div className={styles.inputFilled3}>
            <div className={styles.label3}>Last Name of Owner*</div>
            <svg
              className={styles.icons24pxdropdown3}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div className={styles.placeholder4}>Enter last name here</div>
            <div className={styles.variousdivider4}>
              <div className={styles.componentsdivider4} />
            </div>
          </div>
          <div className={styles.inputFilled4}>
            <div className={styles.label4}>Email Address of Owner*</div>
            <svg
              className={styles.icons24pxdropdown4}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div className={styles.placeholder5}>Enter valid email address</div>
            <div className={styles.variousdivider5}>
              <div className={styles.componentsdivider5} />
            </div>
          </div>
          <div className={styles.inputFilled5}>
            <div className={styles.label5}>Phone Number of Owner*</div>
            <svg
              className={styles.icons24pxdropdown5}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div className={styles.placeholder6}>Enter valid phone number</div>
            <div className={styles.variousdivider6}>
              <div className={styles.componentsdivider6} />
            </div>
          </div>
          <div className={styles.inputFilled6}>
            <div className={styles.label6}>Enter Operation License Number</div>
            <svg
              className={styles.icons24pxdropdown6}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div
              className={styles.placeholder7}
            >{`Enter your license number `}</div>
            <div className={styles.variousdivider7}>
              <div className={styles.componentsdivider7} />
            </div>
          </div>
          <div className={styles.imputfild}>
            <div className={styles.label7}>
              National Identification Number of Owner*
            </div>
            <div className={styles.placeholder8}>Enter your NIN number</div>
            <div className={styles.variousdivider8}>
              <div className={styles.componentsdivider8} />
            </div>
          </div>
          <div className={styles.dragAndDropField1}>
            <div className={styles.uploadContainer}>
              <svg
                className={styles.uploadIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use href="/icons24pxdropdown19.svg#Layer_1" />
              </svg>
            </div>
            <div
              className={styles.labelText1}
            >{`Click to Upload Photo of License to Operate a Hospital or Clinic `}</div>
          </div>
          <div className={styles.inputFilled7}>
            <div className={styles.label8}>Number of Hospital/Clinic*</div>
            <div className={styles.placeholderParent}>
              <div className={styles.placeholder9}>
                Select numbers of stores
              </div>
              <svg
                className={styles.heroiconsOutlinechevronDown}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <use href="/icons24pxdropdown19.svg#Layer_1" />
              </svg>
            </div>
            <svg
              className={styles.icons24pxdropdown7}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <use href="/icons24pxdropdown19.svg#Layer_1" />
            </svg>
            <div className={styles.variousdivider9}>
              <div className={styles.componentsdivider9} />
            </div>
          </div>
          <div className={styles.inputfield}>
            <div className={styles.label9}>
              Hospital/Clinic Location in How Many States?
            </div>
            <div className={styles.frameParent}>
              <div className={styles.placeholderGroup}>
                <div className={styles.placeholder10}>
                  Enter number of states
                </div>
                <svg
                  className={styles.heroiconsOutlinechevronDown1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
              <div className={styles.variousdivider10}>
                <div className={styles.componentsdivider10} />
              </div>
            </div>
          </div>
          <div className={styles.inputfield1}>
            <div className={styles.label10}>
              State Where Hospital/Clinic is Located*
            </div>
            <div className={styles.placeholderContainer}>
              <div className={styles.placeholder11}>Select a state</div>
              <svg
                className={styles.heroiconsOutlinechevronDown2}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
            <div className={styles.variousdivider11}>
              <div className={styles.componentsdivider11} />
            </div>
          </div>
          <div className={styles.inputfield2}>
            <div className={styles.label11}>
              City Where Hospital/Clinic is Located*
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.placeholder12}>Select a city</div>
                <svg
                  className={styles.heroiconsOutlinechevronDown3}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
              <div className={styles.variousdivider12}>
                <div className={styles.componentsdivider12} />
              </div>
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.label12}>Address of Hospital or Clinic*</div>
            <input
              className={styles.placeholder13}
              placeholder="Enter your valid residential address"
              type="text"
            />
            <div className={styles.variousdivider13}>
              <div className={styles.componentsdivider13} />
            </div>
          </div>
          <div className={styles.inputFields1}>
            <svg
              className={styles.heroiconsSolidplusCircle}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 9v6h6v-2h-4v-4h-2zm-1 3v4h-4v2h6v-6h-2zm-3-4v2h4v-6h-2v4h-4v-2h2zm-2 7v2h4v-4h-2v-2h-2v4h-4zm11 0v-2h-4v-4h-2v-2h6v6h4v-2h2v4h-6zm-4 6v-2h2v-2h-2v-2h-2v2h-4v2h4zm-1-3v4h-2v-4h2zm-1-4v-4h-4v4h-2v2h6v-2h-2zm-1-5v-2h-4v-2h-2v4h2v-2h4zm11 0v2h-2v2h2v4h2v-4h-2zm1-3v-4h-2v-2h-2v4h2v2h-4v-4h-2v4h2v2h-2v4h2v4h-2v2h-2v-6h-2v6h-2v2h4v-4h2v-2h2v4h2v-4h4v-2h2v-6h2v-2h-2zm-5 4v-2h2v2h-2zm-6-2v-2h-2v-2h-2v2h-2v-2h2v-2h2v2h2v-2h-2zm7-4h-2v-2h-2v-2h2v2h2v-2h-2zm-5 4v-4h-2v-2h-2v4h2v-2h2zm-4-7v-2h-2v2h2zm7-2h2v-2h-2v2zm2 0h2v-2h-2v2zm1-2h2v-2h-2v2z" />
            </svg>
            <div className={styles.addAnotherPharmacyAddressWrapper}>
              <div
                className={styles.addAnotherPharmacy}
              >{`Add Another Pharmacy Address `}</div>
            </div>
            <div className={styles.heroiconsSolidarrowLeftCirParent}>
              <svg
                className={styles.heroiconsSolidarrowLeftCir}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 16l6-6-6-6v12z" />
              </svg>
              <div className={styles.back}>Back</div>
            </div>
          </div>
          <div className={styles.dragAndDropField2}>
            <div className={styles.uploadFrame}>
              <svg
                className={styles.uploadIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 16l6-6-6-6v12z" />
              </svg>
            </div>
            <input
              className={styles.labelText2}
              placeholder="Click to Upload Proof of Hospital/Clinic Address. i.e NEPA Bill"
              type="text"
            />
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <b className={styles.submitApplication}>Submit Form</b>
          </button>
        </form>
        <svg
          className={styles.icons24pxdropdown8}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
        <svg
          className={styles.icons24pxdropdown9}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
        <svg
          className={styles.icons24pxdropdown10}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
        <svg
          className={styles.icons24pxdropdown11}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </section>
  );
};

export default Content;
