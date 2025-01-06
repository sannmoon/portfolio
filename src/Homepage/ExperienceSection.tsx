import TimelineBox from "../components/TimelineBox";

const experiences = [
  {
    title: "2021- 2023",
    subtitle: "Account Executive | Syarikat Samling Timber Sdn. Bhd.",
    description:
      "Worked for Sabah Sarawak Gas Pipeline Project. Management accounts preparation and monthly cost analysis, contributing to project budgeting and vendor relations. Collaborated with Cost Accountant and auditors to ensure timely reporting and compliance. Software: Microsoft Dynamics AX, Smart GEP - Petronas (Procurement).",
  },
  {
    title: "2017-2021",
    subtitle: "Auditor, Account Associate | Hii King Hiong & Co.",
    description: "Auditing, Full set accounts preparations",
  },
  {
    title: "2021",
    subtitle: "Digital Marketing | The Cake Maker ",
    description: "Finance Dept, Sales & Marketing Dept",
  },
  {
    title: "2010",
    subtitle: "SMK Marudi",
    description: "SPM",
  },
  {
    title: "2016",
    subtitle: "Internship | Miri Marriott Resort & Spa",
    description: "Finance Dept, Sales & Marketing Dept",
  },
];

function ExperienceSection() {
  return (
    <div className="pt-20 relative max-w-[1000px] my-0 mx-auto">
      <div className="relative after:content-[''] after:absolute after:w-[2px] after:bg-pink-600 after:top-0 after:bottom-0 after:left-1/2 after:ml-[-1px]">
        {experiences.map((experience, index) => (
          <div key={index} className="relative h-64">
            <TimelineBox
              item={experience}
              side={index % 2 === 0 ? "left" : "right"}
            />
            <div className="absolute w-5 h-5 bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-blue-300 shadow-md shadow-blue-500/50 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
