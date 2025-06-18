import SkillsBox from "../components/SkillsBox";

function SkillsSection() {
  return (
    <div className="px-6">
      <h1 className="text-4xl text-center text-teal-400 font-extrabold mb-8 transform hover:scale-110 transition-all duration-300 drop-shadow-2xl">
        Skills & Expertise
      </h1>

      <div className="flex justify-between items-start gap-7 flex-wrap md:flex-nowrap px-4">
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <SkillsBox
            header="Comfortable with"
            desc="HTML, CSS, JavaScript, Tailwind"
          />
          <SkillsBox
            header="Currently Practicing"
            desc="React, TypeScript, Next.js, Prisma, MySQL, Node.js, Google OAuth2.0, RESTful API"
          />
          <SkillsBox header="Exploring Next" desc="Python, Cybersecurity" />
          <SkillsBox
            header="Tools & Environment"
            desc="Git, GitHub, Cypress, VS Code, DBeaver, Postman, Thunder Client, MongoDB"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <SkillsBox
            header="Growth & Learning"
            desc="I’m constantly evolving and learning. Currently focused on React and TypeScript and exploring exciting new technologies like Python and Next.js. My experience in accounting has sharpened my analytical skills, which I now apply to code optimization and problem-solving. Driven by curiosity and a passion for technology. 🚀"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
