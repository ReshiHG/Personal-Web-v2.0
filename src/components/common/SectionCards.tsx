import { Card } from "./Card";
import htmlImg from "/src/assets/html1.png?url";
import cssImg from "/src/assets/CSS.png?url";
import jsImg from "/src/assets/Javascript.png?url";
import tsImg from "/src/assets/TypeScript.png?url";
import BootstrapImg from "/src/assets/Bootstrap.png?url";
import tailwindImg from "/src/assets/Tailwind.png?url";
import figmaImg from "/src/assets/Figma.png?url";
import reactImg from "/src/assets/React.png?url";
import gitImg from "/src/assets/Git.png?url";
import githubImg from "/src/assets/GitHub.png?url";
import illustratorImg from "/src/assets/Illustrator.png?url";
import mgdbImg from "/src/assets/MongoDB.png?url";
import netlifyImg from "/src/assets/Netlify.png?url";
import nodejsImg from "/src/assets/Nodejs.png?url";
import sqlImg from "/src/assets/SQLServer.png?url";
import wordPressImg from "/src/assets/WordPress.png?url";
import laravelImg from "/src/assets/Laravel.png?url";
import phpImg from "/src/assets/PHP.png?url";
import viteImg from "/src/assets/Vite.png?url";
import mysqlImg from "/src/assets/MYSQL.png?url";

interface SectionCardsProps {
  sectionId: string;
}

export function SectionCards({ sectionId = "" }: SectionCardsProps) {
  return (
    <div className="bg-[url(/src/assets/motivo-mobile.png)] bg-size-[100%] lg:bg-[url(/src/assets/motivo-desktop.png)]">
      <section
        id={sectionId}
        className="container mx-auto -mt-16 max-w-7xl p-8 pt-16"
      >
        <h2 className="border-b-3 p-4 text-center font-Noto text-3xl">
          Tecnologías que manejo
        </h2>
        <div className="my-8 flex flex-wrap justify-evenly gap-x-8 gap-y-12">
          <Card cardImg={htmlImg} cardTitle="HTML" />
          <Card cardImg={cssImg} cardTitle="CSS" />
          <Card cardImg={jsImg} cardTitle="JavaScript" />
          <Card cardImg={tsImg} cardTitle="TypeScript" />
          <Card cardImg={tailwindImg} cardTitle="Tailwind" />
          <Card cardImg={reactImg} cardTitle="React" />
          <Card cardImg={viteImg} cardTitle="Vite" />
          <Card cardImg={gitImg} cardTitle="Git" />
          <Card cardImg={githubImg} cardTitle="GitHub" />
          <Card cardImg={sqlImg} cardTitle="SQL Server" />
          <Card cardImg={figmaImg} cardTitle="Figma" />
          <Card cardImg={illustratorImg} cardTitle="Illustrator" />
          <Card cardImg={BootstrapImg} cardTitle="Bootstrap" />
          <Card cardImg={phpImg} cardTitle="PHP" />
          <Card cardImg={laravelImg} cardTitle="Laravel" />
          <Card cardImg={nodejsImg} cardTitle="Node.js" />
          <Card cardImg={netlifyImg} cardTitle="Netlify" />
          <Card cardImg={mysqlImg} cardTitle="MySQL" />
          <Card cardImg={mgdbImg} cardTitle="MongoDB" />
          <Card cardImg={wordPressImg} cardTitle="WordPress" />
        </div>
      </section>
    </div>
  );
}
