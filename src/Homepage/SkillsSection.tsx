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
            desc="React, TypeScript, Next.js, Prisma, MySQL, Node.js, MongoDB, Google OAuth2.0, RESTful API"
          />
          <SkillsBox header="Exploring Next" desc="Python, Cybersecurity" />
          <SkillsBox
            header="Tools & Environment"
            desc="Git, GitHub, Cypress, VS Code, DBeaver, Postman, Thunder Client"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <SkillsBox
            header="Growth & Learning"
            desc="Curious and constantly learning & evolving.
            I enjoy tackling challenges, refining my coding skills and applying analytical mindset to build efficient, user-focused apps. Passionate about exploring new technologies and improving as a developer every day 🚀"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
