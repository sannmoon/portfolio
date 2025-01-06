type ExperienceItem = {
  title: string;
  subtitle: string;
  description: string;
};

type TimelineBoxProps = {
  item: ExperienceItem;
  side: "left" | "right";
};

function TimelineBox({ item, side }: TimelineBoxProps) {
  const { title, subtitle, description } = item;
  const sideClasses = side === "left" ? "pr-10 mr-auto" : "pl-10 ml-auto";

  return (
    <div className={`w-1/2 p-4 ${sideClasses}`}>
      <div className="p-[20px] px-[30px] bg-gray-900 border border-blue-500 relative rounded-[6px] text-blue-300 shadow-lg shadow-blue-500/50">
        <h2 className="text-2xl font-bold text-blue-400">{title}</h2>
        <h3 className="text-2xl font-semibold text-green-400">{subtitle}</h3>
        <p className="text-xl mt-2">{description}</p>
      </div>
    </div>
  );
}

export default TimelineBox;
