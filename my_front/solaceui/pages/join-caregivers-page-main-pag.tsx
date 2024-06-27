import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import MainContent from "../components/main-content";
import GroupComponent from "../components/group-component";
import NewFooter from "../components/footer";
import styles from "./join-caregivers-page-main-pag.module.css";
import FrameComponent from "../components/frame-component";

const JoinCaregiversPageMainPag: NextPage = () => {
  const router = useRouter();

  const navigateTo = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle submit logic, such as form submission
    console.log('Form submitted with email:', email);
  };

  return (
    <div className={styles.joinCaregiversPageMainPag}>
      <MainContent
        onSolaceLogoContainerClick={() => navigateTo("/")}
        onNavlinksTextClick={() => navigateTo("/about-us-page")}
        onNavlinksText1Click={() => navigateTo("/farewell-page-quarterly-payme")}
        onNavlinksText2Click={() => navigateTo("/lace-a-i-page")}
        onNavlinksText3Click={() => navigateTo("/career-page")}
        onNavlinksText4Click={() => navigateTo("/f-a-q-page")}
        onNavlinksText5Click={() => navigateTo("/blog-page")}
        onNavButtonWrapperClick={() => navigateTo("/join-healthy-elders-club")}
      />
      <section className={styles.targetAudience}>
        <div className={styles.targetAudienceCategories}>
          <div className={styles.audienceWrapper}>
            <GroupComponent
              group48096821="/group-48096821.svg"
              infoTitle="Certified Doctors"
              onText16Click={() => navigateTo("/doctors-form")}
            />
            <GroupComponent
              group48096821="/group-48096822.svg"
              infoTitle="Certified Nurses"
              propMinWidth="117px"
              propGap="20px"
              propFlex="unset"
              propPadding="0px var(--padding-31xl)"
              propWidth="31px"
              propPadding1="0px var(--padding-lgi) 0px var(--padding-mid)"
              onText16Click={() => navigateTo("/nurses-form")}
            />
            <div className={styles.eachContactInfoWrapper}>
              <div className={styles.infoWrapper}>
                <img
                  className={styles.infoWrapperChild}
                  loading="lazy"
                  alt=""
                  src="/group-48096823.svg"
                />
              </div>
              <div className={styles.infoTitle}>Qualified Caregivers</div>
              <div className={styles.infoDetailWrapper}>
                <div className={styles.infoDetail} onClick={() => navigateTo("/caregiver-form")}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.audienceWrapper1}>
            <GroupComponent
              group48096821="/group1.svg"
              infoTitle="Certified Therapists"
              propMinWidth="117px"
              propGap="24.5px"
              propFlex="1"
              propPadding="0px var(--padding-41xl)"
              propWidth="35.2px"
              propPadding1="0px var(--padding-12xl) 0px var(--padding-10xl)"
              onText16Click={() => navigateTo("/therapists-form")}
            />
            <GroupComponent
              group48096821="/vector1.svg"
              infoTitle="Certified Nutritionist"
              propMinWidth="122px"
              propGap="22.5px"
              propFlex="1"
              propPadding="0px var(--padding-45xl)"
              propWidth="38px"
              propPadding1="0px var(--padding-17xl) 0px var(--padding-15xl)"
              onText16Click={() => navigateTo("/nutritionist-form")}
            />
            <div className={styles.eachContactInfoWrapper1}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
              <div className={styles.text}>Qualified Undertakers</div>
              <div className={styles.textWrapper}>
                <div className={styles.text1} onClick={() => navigateTo("/undertakers-form")}>
                  Register Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default JoinCaregiversPageMainPag;
