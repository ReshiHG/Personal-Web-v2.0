import defaultImg from "/src/assets/default.png";

interface Props {
  img: string;
  title: string;
  content: React.ReactNode;
  projectURL: string;
  tecnologies: Tecnologies[];
}

interface Tecnologies {
  tecImg: string;
  altImg: string;
}

export default function CarouselSwiperSlide({
  img = defaultImg,
  title = "Proyecto",
  content = "Lorem Ipsum",
  projectURL = "#",
  tecnologies = [
    { tecImg: defaultImg, altImg: "default" },
    { tecImg: defaultImg, altImg: "default" },
  ],
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_0_10px_rgba(255,255,255,0.4)]">
      <img className="w-full" src={img} alt={title} />
      <div className="bg-jr-blanco-100 p-6 lg:p-10">
        <h4 className="text-lg font-bold lg:text-xl">{title}</h4>
        <p className="pt-3 text-justify text-sm font-light lg:text-base">
          {content}
        </p>
        <h6 className="my-3 text-base font-semibold text-jr-naranja-500 lg:text-lg">
          <i>Creado con:</i>
        </h6>
        <div className="flex w-full flex-wrap gap-4">
          {tecnologies.map(({ tecImg, altImg }) => {
            return <img className="w-7" src={tecImg} alt={altImg} />;
          })}
        </div>
      </div>
      {/* <a
        className="block w-full bg-jr-logo-naranja-500 py-2 text-center text-xl font-semibold text-white"
        href={projectURL}
      >
        Visitar
      </a> */}
    </div>
  );
}
