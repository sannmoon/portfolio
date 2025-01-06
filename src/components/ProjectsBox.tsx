type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function ProjectsBox({
  image,
  title,
  description,
  link,
}: Props) {
  return (
    <div>
      <img src={image} />
      <a href={link} target="_blank">
        <h1 className="text-center text-sky-300 my-3">{title}</h1>
      </a>
      <p className="text-[20px] text-justify">{description}</p>
    </div>
  );
}
