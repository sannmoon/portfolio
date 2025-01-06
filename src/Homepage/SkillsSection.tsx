import CyborgSan2 from "../assets/CyborgSan2.png";
import SkillsBox from "../components/SkillsBox";

// function SkillsSection() {
//   return (
//     <div className="skillsContainer">
//       <div className="mainSkills">
//         <h2>
//           Primary Skills: React.js, JavaScript, TypeScript, HTML, CSS,
//           Sass(scss),Tailwind CSS
//         </h2>
//         <p>
//           Additional Skills: Briefly mention transferable skills from your
//           accounting and audit experience, like attention to detail, analysis,
//           and problem-solving.
//         </p>
//         <p> Version Control: Git, GitHub</p>
//         <p>Testing: Cypress</p>
//         <p> Tools & Environments: VS Code</p>
//         <h2>Financial & Analytical Skills</h2>
//         <p>
//           Financial Accounting: Experienced in managing and analyzing financial
//           data
//         </p>
//         <p>
//           Auditing: Background in ensuring accuracy and compliance, which
//           supports attention to detail in my coding work
//         </p>
//         <p>
//           Data Analysis: Bringing analytical thinking from financial reporting
//           into code optimization
//         </p>
//         <h2>Additional Skills</h2>
//         <p>
//           Problem-Solving: Enjoy tackling challenges, whether troubleshooting
//           technical setups or debugging code. Attention to Detail: Careful with
//           details, thanks to my experience in financial tasks and accounting.
//           Adaptability: Eager to learn new tools and tech, transitioning my
//           skills from accounting to tech with curiosity and dedication 🤓
//         </p>
//         <h3>Learning & Adaptability</h3>
//         <p>
//           Quick Learner: Picking up new frameworks, libraries, and tech concepts
//           as I transition fully into coding
//         </p>
//         {/* or maybe not haha */}
//         <p>Curiosity & Growth Mindset: Driven by a passion to learn</p>
//       </div>
//     </div>
//   );
// }

// export default SkillsSection;
function SkillsSection() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-8 rounded-xl shadow-2xl space-y-8">
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
