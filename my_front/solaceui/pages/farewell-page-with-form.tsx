import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import FarewellContent from "../components/farewell-content";
import PersonalSolaceUserForm from "../components/forms/personal_solace_user";
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
      <FarewellContent
        onSolaceLogoContainerClick={() => navigateTo("/")}
        onNavlinksTextClick={() => navigateTo("/about-us-page")}
        onNavlinksText1Click={() => navigateTo("/farewell-page-quarterly-payme")}
        onNavlinksText2Click={() => navigateTo("/lace-a-i-page")}
        onNavlinksText3Click={() => navigateTo("/career-page")}
        onNavlinksText4Click={() => navigateTo("/f-a-q-page")}
        onNavlinksText5Click={() => navigateTo("/blog-page")}
        onNavButtonWrapperClick={() => navigateTo("/healthy-elders-club")}
      />
      <PersonalSolaceUserForm />
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
