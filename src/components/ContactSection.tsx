import React from "react";
import ContactBox from "../assets/ContactBox.png";
import ContactSound from "../assets/ContactSound.wav";

type Props = {
  icon: React.ReactElement;
  href: string;
  iconClassName: string;
  wrapperClassName: string;
};

function ContactSection({
  icon,
  href,
  iconClassName,
  wrapperClassName,
}: Props) {
  const playSound = () => {
    const audio = new Audio(ContactSound);
    audio.play();
  };
  return (
    <div
      className="flex justify-end items-center relative p-4 custom-cursor"
      onClick={playSound}
    >
      <a href={href} target="_blank">
        <div className="relative inline-block">
          <img
            src={ContactBox}
            alt="Contact Border"
            width={70}
            className="max-w-none md:max-w-full"
          />
          <div className={`absolute inset-0 ${wrapperClassName}`}>
            {React.cloneElement(icon, {
              className: iconClassName,
            })}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ContactSection;
