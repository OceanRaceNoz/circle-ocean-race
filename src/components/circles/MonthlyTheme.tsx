export const MonthlyTheme = () => {
  return (
    <section className="w-full mt-[54px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col relative min-h-96 w-full px-[77px] py-[33px] rounded-lg max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/0e109f5f63862c582f049713330a9b6117c73151015ddc5577cd2614486e93b2?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Monthly theme background"
        />
        <div className="relative self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="max-md:max-w-full">
            <h2 className="text-[rgba(224,206,190,1)] text-2xl font-medium tracking-[2px]">
              Kommunalpolitik
            </h2>
            <div className="text-[rgba(212,191,232,1)] text-4xl font-normal mt-2.5">
              Der Monatsthema
            </div>
          </div>
          <div className="bg-[rgba(215,209,237,1)] flex min-h-[54px] items-center gap-2.5 text-xl text-[rgba(102,67,217,1)] font-bold text-center mt-1 pl-[30px] pr-2.5 py-[15px] rounded-lg max-md:pl-5">
            <div className="self-stretch my-auto">Januar 2025</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/46c367f18d78e7683e861042ad51356c619a12ff03908c65c6ed278a22ca253c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Calendar icon"
            />
          </div>
        </div>
        <h3 className="relative text-white text-[52px] font-bold tracking-[3px] mt-16 max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          "Gute Entscheidungen treffen"
        </h3>
        <button className="relative bg-[rgba(226,106,0,1)] min-h-16 w-[329px] max-w-full text-2xl text-[rgba(248,248,248,1)] font-medium text-center mt-[43px] px-[70px] py-[18px] rounded-[10px] max-md:mt-10 max-md:px-5">
          Thema entdecken
        </button>
      </div>
    </section>
  );
};
