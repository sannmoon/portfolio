import CyborgSan2 from "../assets/CyborgSan2.png";
import SkillsBox from "../components/SkillsBox";

function SkillsSection() {
  return (
    <div className="px-8">
      <h1 className="text-4xl text-center text-teal-400 font-extrabold mb-8 transform hover:scale-110 transition-all duration-300 drop-shadow-2xl">
        Skills & Expertise
      </h1>

      <div className="flex justify-between items-start gap-7">
        <div className="flex flex-col space-y-8 w-1/3">
          <SkillsBox header="Comfortable with" desc="HTML, CSS, JavaScript" />
          <SkillsBox header="Currently Practicing" desc="React, TypeScript" />
          <SkillsBox
            header="Exploring Next"
            desc="Python, Next.js, Cybersecurity"
          />
          <SkillsBox
            header="Tools & Environment"
            desc="Git, GitHub, Cypress, VS Code"
          />
        </div>

        <div className="flex justify-center w-1/3">
          <img
            src={CyborgSan2}
            alt="CyborgSan2"
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        <div className="flex flex-col w-1/3">
          <SkillsBox
            header="Growth & Learning"
            desc="I’m constantly evolving and learning. Currently focused on React and TypeScript, and exploring exciting new technologies like Python and Next.js. My experience in accounting has sharpened my analytical skills, which I now apply to code optimization and problem-solving. Driven by curiosity and a passion for technology. 🚀"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
