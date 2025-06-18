type Props = {
  image: string;
  title: string;
  description: string;
  linkGh: string;
  linkSite?: string;
};

export default function ProjectsBox({
  image,
  title,
  description,
  linkGh,
  linkSite,
}: Props) {
  return (
    <div className="flex flex-col h-full p-5">
      <div className="flex-grow">
        <img
          src={image}
          alt="Project preview"
          className="w-full h-20 object-cover"
        />
        <h1 className="text-center text-sky-300 my-3">{title}</h1>
        <p className="text-[16px] whitespace-normal">{description}</p>
      </div>

      <div className="flex gap-3 text-xs text-sky-300 justify-center mt-4">
        <a href={linkGh} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        {linkSite && (
          <a href={linkSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
