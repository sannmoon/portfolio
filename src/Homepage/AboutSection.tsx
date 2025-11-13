import { GiCyberEye } from "react-icons/gi";
import { GiCyborgFace } from "react-icons/gi";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import Cyborg from "../assets/Cyborg.png";
import Glitch from "../assets/Glitch.gif";

function AboutSection() {
  return (
    <div className="md:flex justify-between gap-8 max-w-6xl mx-10 md:mx-auto md:w-auto">
      <div className="flex-1 border-solid	border-2 border-sky-500 max-w-2xl text-[20px] p-4 mb-4 md:mb-0">
        <p className="mb-4">
          Hello, I’m Sandar <GiCyborgFace className="inline" /> a former
          accountant who made the leap into web development. In 2024, I decided
          to step away from the world of balance sheets to follow my true
          interests <GiCyberEye className="inline" />I wanted a career where I
          could build, create and solve problems, so I dedicated myself to
          learning code and developing my own projects.
        </p>
        <p className="mb-4">
          I began with <TiHtml5 className="inline" /> and{" "}
          <MdCss className="inline" />.
        </p>
        <p>
          While studying, I also worked with
          <IoLogoJavascript className="inline" /> to create pages and small
          applications. Once comfortable with JS, I moved on to{" "}
          <IoLogoReact className="inline" />. As I delved deeper into
          programming, I wanted to go beyond frontend, so I started learning
          Node.js, Express.js and databases.
        </p>
      </div>
      <div className="relative flex-none border-solid border-2 border-sky-500 p-3 overflow-hidden ">
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-cover bg-center opacity-30 mix-blend-difference"
          style={{
            backgroundImage: `url(${Glitch})`,
          }}
        ></div>
        <h2 className="bg-pink-600 text-center text-pink-300 font-bold mb-4 glow-effect">
          IDENTIFICATION
        </h2>
        <img
          src={Cyborg}
          alt="Profile"
          className="flex justify-center items-center"
        />
      </div>
    </div>
  );
}

export default AboutSection;
