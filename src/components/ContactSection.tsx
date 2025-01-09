import React from "react";
import ContactBox from "../assets/ContactBox.png";

type Props = {
  icon: React.ReactElement;
};

function ContactSection({ icon }: Props) {
  return (
    <div className="flex justify-end items-center relative p-4 custom-cursor">
      <div className="relative inline-block">
        <img src={ContactBox} alt="Contact Border" width={70} />
        <div className="absolute inset-0 left-[11px] top-[16px]">
          {React.cloneElement(icon, { className: "w-19 h-9" })}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
