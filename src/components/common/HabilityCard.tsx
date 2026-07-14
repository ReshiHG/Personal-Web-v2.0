import defaultImg from "/src/assets/default.png";

interface Props {
  img: string;
  title: string;
  content: string;
}

export function HabilityCard({
  img = defaultImg,
  title = "Habilidad",
  content = "Descripción",
}: Props) {
  return (
    <div className="h-fit w-3xs overflow-hidden rounded-4xl shadow-[0_2px_5px_rgba(14,11,22,0.3)] backdrop-blur-xs">
      <div className="flex items-center justify-center p-6">
        <img className="" src={img} alt="" />
      </div>
      <div className="bg-jr-negro-a-500/80 px-8 py-6 text-white">
        <h4 className="mx-auto border-b border-white pb-4 text-center text-lg font-normal">
          {title}
        </h4>
        <p className="pt-4 pb-4 text-justify text-sm font-light">{content}</p>
      </div>
    </div>
  );
}
