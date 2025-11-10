import ContactSection from "./ContactSection";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TbFileCv } from "react-icons/tb";
import CV from "../assets/SandarTunResume.pdf";

function Contact() {
  return (
    <div className="flex md:block">
      <ContactSection
        icon={<FaGithub />}
        href="https://www.github.com/sannmoon"
        wrapperClassName="left-[17.5px] top-[14.6px]"
        iconClassName="w-[37px] h-10"
      />
      <ContactSection
        icon={<TiSocialLinkedinCircular />}
        href="https://linkedin.com/in/sandartun"
        wrapperClassName="left-[12.5px] top-[2.5px]"
        iconClassName="w-[45px] h-16"
      />
      <ContactSection
        icon={<TbFileCv />}
        href={CV}
        wrapperClassName="left-[17.5px] top-[14px]"
        iconClassName="w-[37px] h-10"
      />
    </div>
  );
}

export default Contact;
