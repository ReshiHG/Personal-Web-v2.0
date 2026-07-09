import defaultImg from "/src/assets/default.png";

interface Props {
  img: string;
  title: string;
  content: string;
  projectURL: string;
}

export default function CarouselSwiperSlide({
  img = defaultImg,
  title = "Proyecto",
  content = "Lorem Ipsum",
  projectURL = "#",
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_0_10px_rgba(255,255,255,0.4)]">
      <img src={img} alt={title} />
      <div className="bg-jr-blanco-100 p-6">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="pt-3 text-sm font-light">{content}</p>
      </div>
      <a
        className="block w-full bg-jr-logo-naranja-500 py-2 text-center text-xl font-semibold text-white"
        href={projectURL}
      >
        Visitar
      </a>
    </div>
  );
}
