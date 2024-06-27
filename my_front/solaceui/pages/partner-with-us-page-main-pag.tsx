import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import PartnerContent from "../components/partner-content";
import GroupComponent from "../components/group-component";
import NewFooter from "../components/footer";
import styles from "./partner-with-us-page-main-pag.module.css";
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
      <PartnerContent
        onSolaceLogoContainerClick={() => navigateTo("/")}
        onNavlinksTextClick={() => navigateTo("/about-us-page")}
        onNavlinksText1Click={() => navigateTo("/farewell-page-quarterly-payme")}
        onNavlinksText2Click={() => navigateTo("/lace-a-i-page")}
        onNavlinksText3Click={() => navigateTo("/career-page")}
        onNavlinksText4Click={() => navigateTo("/f-a-q-page")}
        onNavlinksText5Click={() => navigateTo("/blog-page")}
        onNavButtonWrapperClick={() => navigateTo("/solace-health-club")}
      />
      <section className={styles.targetAudience}>
        <div className={styles.targetAudienceCategories}>
          <div className={styles.audienceWrapper}>
          <GroupComponent
              group48096821="/Pharmacy.svg"
              infoTitle="Pharmacies"
              propMinWidth="117px"
              propGap="20px"
              propFlex="unset"
              propPadding="0px var(--padding-31xl)"
              propWidth="31px"
              propPadding1="0px var(--padding-lgi) 0px var(--padding-mid)"
              onText16Click={() => navigateTo("/pharmacy-form")}
            />
            <GroupComponent
              group48096821="/Hospital.svg"
              infoTitle="Hospital & Clinics"
              onText16Click={() => navigateTo("/hospital-form")}
            />
            
            <div className={styles.eachContactInfoWrapper}>
              <div className={styles.infoWrapper}>
                <img
                  className={styles.infoWrapperChild}
                  loading="lazy"
                  alt=""
                  src="/Laboratory.svg"
                />
              </div>
              <div className={styles.infoTitle}>Laboratories</div>
              <div className={styles.infoDetailWrapper}>
                <div className={styles.infoDetail} onClick={() => navigateTo("/laboratory-form")}>
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
