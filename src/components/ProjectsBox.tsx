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
    <div className="">
      <img src={image} />
      <h1 className="text-center text-sky-300 my-3">{title}</h1>
      <p className="text-[16px] text-justify ">{description}</p>
      <div className="flex gap-3 text-xs text-sky-300 justify-center mt-1">
        <a href={linkGh} target="_blank">
          Github
        </a>
        {linkSite && (
          <a href={linkSite} target="_blank">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}

// refer battlefield ui: the Github & Live Site- when you hover, it fills up from left to right(Not sure to add icons would be better)
