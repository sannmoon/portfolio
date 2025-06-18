import TimelineBox from "../components/TimelineBox";

const experiences = [
  {
    title: "2021- 2023",
    subtitle: "Account Executive | Syarikat Samling Timber Sdn. Bhd.",
    description:
      "Prepared management account reports, conducted cost analysis, account reconciliations and budgeting. <br/>Utilized Microsoft Dynamics AX and Smart GEP (Petronas) to manage system-driven workflows. <br/>Collaborated with auditors to support financial and tax compliance.",
  },
  {
    title: "2021",
    subtitle: "Digital Marketing & Graphic Design | The Cake Maker ",
    description:
      "Designed custom cakes using CorelDRAW and created visual content for Instagram and Facebook to promote products and attract customers.",
  },
  {
    title: "2017-2021",
    subtitle: "Auditor, Account Associate | Hii King Hiong & Co.",
    description:
      "Conducted audits, financial reconciliations and reporting using SPC software. <br/> Prepared full sets of accounts with UBS Sage and Autocount and supported intern training.",
  },
  {
    title: "2016",
    subtitle: "Internship | Miri Marriott Resort & Spa",
    description:
      "Finance Department:<br/> Performed financial tasks using SunSystems, including invoice checks and journal entries.<br/> Sales & Marketing Department:<br/>Supported digital marketing, content creation, and event coordination in PR and Sales, including fundraising and competitive analysis.",
  },
];

function ExperienceSection() {
  return (
    <div className="relative max-w-[1000px] my-0 mx-auto">
      <div className="relative after:content-[''] after:absolute after:w-[2px] after:bg-pink-600 after:top-0 after:bottom-0 after:right-[15%] md:after:left-1/2 md:after:ml-[-1px]">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex items-center">
            <TimelineBox
              item={experience}
              side={index % 2 === 0 ? "left" : "right"}
            />
            <div className="absolute w-5 h-5 bg-blue-600 rounded-full right-[13.5%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 border-4 border-blue-300 shadow-md shadow-blue-500/50 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
