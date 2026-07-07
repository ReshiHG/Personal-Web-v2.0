import defaultImg from "/src/assets/default.png?url";

interface CardProps {
  cardImg: string;
  cardTitle: string;
}

export function Card({
  cardImg = defaultImg,
  cardTitle = "Titulo",
}: CardProps) {
  return (
    <div className="w-36 overflow-hidden rounded-2xl shadow-[0_2px_5px_rgba(14,11,22,0.3)] backdrop-blur-xs">
      <img className="my-auto p-4" src={cardImg} alt={cardTitle} />
      <h4 className="bg-jr-negro-a-500 py-2.5 text-center text-lg font-light text-white">
        {cardTitle}
      </h4>
    </div>
  );
}
