import type { NextPage } from "next";
import { useState } from "react";
import styles from "./laceaiform.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    stateOfResidence: "",
    cityOfResidence: "",
    interestReason: "",
    howDidYouHear: "",
  });

  const joinWaitingList = async (
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    stateOfResidence: string,
    cityOfResidence: string,
    interestReason: string,
    howDidYouHear: string
  ) => {
    const response = await fetch(`${process.env.BASE_URL}/waiting-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        stateOfResidence,
        cityOfResidence,
        interestReason,
        howDidYouHear,
      }),
    });

    if (response.ok) {
      alert(
        "Thank you for joining the waiting list. You will receive an email shortly."
      );
    } else {
      alert("Failed!.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    joinWaitingList(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phoneNumber,
      formData.stateOfResidence,
      formData.cityOfResidence,
      formData.interestReason,
      formData.howDidYouHear
    );
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className={[styles.laceAiPageInner, className].join(" ")}>
      <div className={styles.contentWrapperParent}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionTagWrapperWrapper}>
            <button className={styles.sectionTagWrapper}>
              <div className={styles.heading}>Join the waiting list</div>
            </button>
          </div>
          <h1 className={styles.text}>
            {`Join hundreds on the waiting list to experience Lace AI in Africa `}
          </h1>
          <div className={styles.textWrapper}>
            <p className={styles.text1}>
              Fill the form below and you will be among the first to enjoy our
              freebies when we launch Lace AI.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.waitingListFormWrapper}>
          <div className={styles.waitingListForm}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>First Name*</div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>Email Address*</div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter valid email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>State of Residence*</div>
                    <select
                      name="stateOfResidence"
                      value={formData.stateOfResidence}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    >
                      <option value="">Select State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                    </select>
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>
                      Why are you interested in Lace AI?*
                    </div>
                    <select
                      name="interestReason"
                      value={formData.interestReason}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    >
                      <option value="">Select your reason</option>
                      <option value="reason1">Reason 1</option>
                      <option value="reason2">Reason 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

                <div className={styles.frameParent2}>
                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>Last Name*</div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.label1}>Phone Number*</div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter valid phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.labelParent3}>
                      <div className={styles.label1}>City of Residence*</div>
                      <input
                        type="text"
                        name="cityOfResidence"
                        placeholder="Enter your city of residence"
                        value={formData.cityOfResidence}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.labelContainer}>
                    <div className={styles.labelParent4}>
                      <div className={styles.label1}>
                        How did you hear about us?*
                      </div>
                      <select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                      >
                        <option value="">Select from the list</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className={styles.button}>
              <b className={styles.submitApplication}>{`Submit `}</b>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent1;
