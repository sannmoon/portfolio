import React from "react";
import ContactBox from "../assets/ContactBox.png";

type Props = {
  icon: React.ReactElement;
};

function ContactSection({ icon }: Props) {
  return (
    <div className="inline-block relative p-5 custom-cursor">
      <img src={ContactBox} alt="" className="relative padding" width={90} />
      <div className="absolute top-[33%] left-[34%]">{icon}</div>
    </div>
  );
}

export default ContactSection;
