import { ToolboxItemProps } from "./types";

const ToolboxItem = ({ image, title, subtitle }: ToolboxItemProps) => (
  <div className="flex w-full items-center gap-[18px] mt-[18px]">
    <div className="self-stretch w-[159px] my-auto rounded-lg">
      <img
        src={image}
        className="aspect-[1.71] object-contain w-[159px] rounded-lg"
        alt={title}
      />
    </div>
    <div className="self-stretch tracking-[-0.5px] flex-1 shrink basis-[0%] my-auto">
      <h3 className="text-[rgba(207,207,207,1)] text-xl font-medium">
        {title}
      </h3>
      <p className="text-[rgba(152,152,152,1)] text-[15px] font-normal mt-[5px]">
        {subtitle}
      </p>
    </div>
  </div>
);

export const ToolboxSection = () => {
  return (
    <section className="bg-[rgba(46,11,78,1)] min-w-60 grow shrink w-[309px] p-5 rounded-[10px]">
      <div className="flex w-full gap-[40px_100px] tracking-[-1px] justify-between">
        <h2 className="text-[rgba(212,191,232,1)] text-lg font-medium">
          Werkzeugkasten
        </h2>
        <button className="text-purple-50 text-base font-bold">
          Alles anzeigen
        </button>
      </div>

      <ToolboxItem
        image="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/2a415802fc824ebc138c23521b67a9cbdbc55fe8c533efebd4da69efba92e50c?placeholderIfAbsent=true"
        title="Smart-Prinzip"
        subtitle="Schlauer Ziele setzen"
      />

      <ToolboxItem
        image="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/5388ef11b80b8b5ce9cbd25fadcbaf94909eb976445761fb5a0bb695854eb062?placeholderIfAbsent=true"
        title="SWOT-Analyse"
        subtitle="Ein wertvolles Tool für lokale Politiker"
      />
    </section>
  );
};
