import { PropsWithChildren } from "react";

type Props = {
  selectedPopup: string;
  setSelectedPopup: (to: string) => void;
};

function Navbar({ selectedPopup, setSelectedPopup }: Props) {
  const Link: React.FC<PropsWithChildren<{ to: string }>> = ({
    to,
    children,
  }) => {
    return (
      <span
        onClick={() => setSelectedPopup(to)}
        className={`${
          selectedPopup === to ? "text-[#3cb9ef]" : ""
        } custom-cursor`}
      >
        {children}
      </span>
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
    <div className="fixed w-full text-center text-[40px] z-50">
      <div className="flex items-center gap-4	"></div>
      <div className=" p-6 space-x-14">{navLinks}</div>
    </div>
  );
}

export default Navbar;
