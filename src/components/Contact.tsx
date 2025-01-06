import ContactSection from "./ContactSection";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TbFileCv } from "react-icons/tb";

function Contact() {
  return (
    <div className="contact">
      <ContactSection icon={<FaGithub />} />

      <ContactSection icon={<TiSocialLinkedinCircular />} />
      <ContactSection icon={<TbFileCv />} />
    </div>
  );
}

export default Contact;
