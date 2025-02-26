import { ArticleCardProps } from "./types";

export const ArticleCard = ({
  image,
  title,
  description,
  tag,
  isTopArticle = false,
  imageAspectRatio = "aspect-[1.49]",
}: ArticleCardProps) => {
  return (
    <div className="relative flex w-full items-stretch gap-[18px] rounded-lg">
      <div
        className={`min-w-60 w-[285px] rounded-lg ${isTopArticle ? "" : "w-[217px]"}`}
      >
        <img
          src={image}
          className={`${imageAspectRatio} object-contain w-full rounded-lg`}
          alt={title}
        />
      </div>
      <div className="flex min-w-60 flex-col items-stretch tracking-[-0.5px] justify-center flex-1 shrink basis-3 my-auto pr-3 pb-2.5">
        <div className="flex w-full flex-col items-stretch justify-center pt-[18px]">
          <h3 className="text-[rgba(207,207,207,1)] text-[22px] font-medium leading-[25px]">
            {title}
          </h3>
          <p className="text-[rgba(152,152,152,1)] text-base font-normal mt-[5px]">
            {description}
          </p>
        </div>
        <div className="rounded bg-[rgba(46,11,78,1)] text-[15px] text-[rgba(212,191,232,1)] font-normal mt-[18px] px-3 py-1.5">
          <span className="italic">Januar:</span>
          <span className="font-bold"> {tag}</span>
        </div>
      </div>
      {isTopArticle && (
        <div className="rounded bg-[rgba(224,208,62,1)] absolute z-0 flex min-h-10 items-center gap-1 text-sm font-bold text-center tracking-[-0.5px] justify-center w-48 h-10 p-3 left-1 top-1">
          <div className="self-stretch flex w-4 shrink-0 h-4 my-auto" />
          <div className="bg-clip-text bg-[linear-gradient(180deg,#8C8C8C_0%,#000_100%)] self-stretch my-auto">
            Top-Artikel des Januars
          </div>
        </div>
      )}
    </div>
  );
};
