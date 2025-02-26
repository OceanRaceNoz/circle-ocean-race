import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  return (
    <section className="bg-[rgba(46,11,78,1)] min-w-60 grow shrink w-[715px] pl-5 pr-[19px] py-5 rounded-[10px] max-md:max-w-full">
      <div className="flex w-full gap-[40px_100px] tracking-[-1px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[rgba(212,191,232,1)] text-lg font-medium">
          Die neuesten Artikel
        </h2>
        <button className="text-purple-50 text-base font-bold">
          Alles anzeigen
        </button>
      </div>

      <div className="bg-[rgba(73,42,102,1)] relative flex w-full items-stretch gap-[18px] mt-[30px] rounded-lg border-[rgba(241,233,204,0.3)] border-solid border-[6px] max-md:max-w-full">
        <ArticleCard
          image="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/29401f7a1f4a2d202504e30c8f75998b6d1e3aff2cb773a56c76ae7a3f437c20?placeholderIfAbsent=true"
          title="Gute Entscheidungen basieren auf guten Fragen – welche Sie kennen sollten"
          description="Sie können nicht alles wissen. Aber sie sollten wissen, welche Fragen sie stellen müssen, um kluge Entscheidungen zu treffen. Drei Professoren vom IMD haben erforscht, um welche es sich handelt."
          tag="Gute Entscheidungen treffen"
          isTopArticle={true}
        />
      </div>

      <hr className="border-t border-[rgba(73,42,102,1)] my-[30px]" />

      <ArticleCard
        image="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/51d931cb84b43dbe47fea49732624ae0e3e578e18281fde34f619d463fbb1449?placeholderIfAbsent=true"
        title="Wie Sie richtig gute digitale Botschaften senden – und Menschen besser erreichen"
        description="In der politischen Arbeit, aber auch privat kommunizieren wir immer mehr über E-Mail, WhatsApp und Co. Wie wir über digitale Kanäle den richtigen Ton treffen."
        tag="Gute Entscheidungen treffen"
        imageAspectRatio="aspect-[1.61]"
      />

      <hr className="border-t border-[rgba(73,42,102,1)] my-[30px]" />

      <ArticleCard
        image="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/194a40f30e1b8f5bf0a89be009da94d01ba3d2ccdce09a9cdafed71300c0d0d0?placeholderIfAbsent=true"
        title="Guten Rat suchen und finden"
        description="In der politischen Arbeit, aber auch privat kommunizieren wir immer mehr über E-Mail, WhatsApp und Co. Wie wir über digitale Kanäle den richtigen Ton treffen."
        tag="Gute Entscheidungen treffen"
        imageAspectRatio="aspect-[1.97]"
      />
    </section>
  );
};
