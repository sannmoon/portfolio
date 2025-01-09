type Props = {
  header: string;
  desc: string;
};

export default function ProjectsBox({ header, desc }: Props) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="flex items-center gap-4 mb-1">
        <div className="relative w-4 h-4 bg-blue-500 transform rotate-45 flex justify-center items-center">
          <div className="absolute w-2 h-2 bg-white rounded-full transform -rotate-45"></div>
        </div>
        <p className="text-sky-400 text-xl">{header}</p>
      </div>

      <p className="text-lg text-justify max-w-[85%]">{desc}</p>
    </div>
  );
}
