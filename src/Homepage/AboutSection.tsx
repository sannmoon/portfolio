import { GiCyberEye } from "react-icons/gi";
import { GiCyborgFace } from "react-icons/gi";
import { IoLogoReact } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import Cyborg from "../assets/Cyborg.png";
import Glitch from "../assets/Glitch.gif";

function AboutSection() {
  return (
    <div className="flex justify-between gap-8 max-w-6xl mx-auto">
      <div className="flex-1 border-solid	border-2 border-sky-500 max-w-2xl text-[20px] p-4">
        <p className="mb-4">
          Hello, I’m Sandar <GiCyborgFace className="inline" /> a former
          accountant who made the leap into web development. In 2023, I decided
          to step away from the world of balance sheets to follow my true
          interests. <GiCyberEye className="inline" />I wanted a career where I
          could build, create, and solve problems, so I dedicated myself to
          learning code and developing my own projects.
        </p>
        <p className="mb-4">
          I began with <TiHtml5 className="inline" /> and{" "}
          <MdCss className="inline" />.
        </p>
        <p>
          As I was studying, I also worked on JS algorithms on the{" "}
          <IoLogoReact className="inline" /> and I created pages and small
          applications. When I felt comfortable working with JS i went on to
          learn <IoLogoReact className="inline" /> As i went deeper into
          programming i wanted to do more than just front-end so i started
          learning , Express.js, MongoDB.
        </p>
      </div>
      <div className="relative flex-none border-solid border-2 border-sky-500 w-[280px] h-[430px] p-3 overflow-hidden ">
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
          className="h-[310px]flex justify-center items-center"
        />
      </div>
    </div>
  );
}

export default AboutSection;
