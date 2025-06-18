import { PropsWithChildren, useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import Contact from "./Contact";

type Props = {
  selectedPopup: string;
  setSelectedPopup: (to: string) => void;
  isActive?: boolean;
};

function Navbar({ selectedPopup, setSelectedPopup }: Props) {
  const [open, setOpen] = useState(false);
  const [expandHeight, setExpandHeight] = useState(false);
  const [expandWidth, setExpandWidth] = useState(false);

  useEffect(() => {
    let timer: any;
    if (open) {
      setExpandHeight(true);
      timer = setTimeout(() => {
        setExpandWidth(true);
      }, 300);
    } else {
      setExpandWidth(false);
      timer = setTimeout(() => {
        setExpandHeight(false);
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [open]);

  const handleNavClick = (to: string) => {
    setSelectedPopup(to);
    setOpen(false);
  };

  const Link: React.FC<PropsWithChildren<{ to: string }>> = ({
    to,
    children,
  }) => {
    return (
      <div
        onClick={() => handleNavClick(to)}
        className={`${
          selectedPopup === to ? "text-[#3cb9ef]" : ""
        } custom-cursor mb-4`}
      >
        {children}
      </div>
    );
  };

  const navLinks = (
    <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="projects">Projects</Link>
      <Link to="skills">Skills</Link>
      <Link to="experience">Experience</Link>
    </>
  );

  return (
    <div>
      <div className="md:hidden">
        <div
          className={`relative w-full h-0.5 bg-transparent overflow-hidden ${
            open ? "before:left-1/2 before:right-1/2" : ""
          } before:content-[''] before:absolute before:inset-0 before:bg-[#fe50b1] 
          before:transition-[left,right] before:duration-500 before:ease-in-out`}
        ></div>
        <div
          className="absolute right-4 top-4 z-40 text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon isActive={open} />
        </div>
        <div
          className={`
          absolute top-0 left-1/2 -translate-x-1/2 z-30 bg-black
          transition-[height,width,opacity] duration-200 ease-in-out
          opacity-100 visible overflow-hidden
          border-x-[1px] border-[#fe50b1]
          flex justify-center items-center
          ${expandHeight ? "h-screen border-b-2 border-t-2" : "h-0"}
          ${expandWidth ? "w-screen border-x-[2px]" : "w-0.5"}
        `}
        >
          <div
            className={`
            text-4xl space-y-6 text-center p-5
            transition-opacity duration-200 ease-in-out
            ${expandWidth ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          >
            {navLinks}
            <div className="relative bottom-2 -translate-x-1/2 left-1/2 md:left-auto md:right-0 md:top-[55%] md:-translate-y-1/2">
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full text-center text-[40px] z-50 hidden md:block">
        <div className="flex items-center gap-4"></div>
        <div className="p-6 space-x-14 flex justify-center">{navLinks}</div>
      </div>
    </div>
  );
}

export default Navbar;
