import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MonthlyTheme } from "./MonthlyTheme";
import { ArticleList } from "./ArticleList";
import { ToolboxSection } from "./ToolboxSection";

export const CircleLayout = () => {
  return (
    <div className="bg-[linear-gradient(158deg,#482767_9.47%,#33154F_89.03%)] relative flex flex-col overflow-hidden px-5 py-[23px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/5296b27caa8a0941cdd8d8a048a5782d9024fc52589cd26612264f92c6e51df0?placeholderIfAbsent=true"
        className="aspect-[16.95] object-contain w-full self-stretch z-0 max-md:max-w-full"
        alt="Background pattern"
      />
      <div className="z-0 flex gap-9 flex-wrap mt-[25px] max-md:max-w-full">
        <Sidebar />
        <main className="min-w-60 w-[1200px] pt-[50px] max-md:max-w-full">
          <Header />
          <nav className="w-full mt-14 max-md:max-w-full">
            <div className="flex w-full items-center gap-[30px] text-xl text-[rgba(207,207,207,1)] font-normal whitespace-nowrap tracking-[-0.5px] justify-between flex-wrap max-md:max-w-full">
              {[
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/b8d7bb94c8802e1be65f0cde2b036be75cd6c028db404a375755f0a76b4561d9?placeholderIfAbsent=true",
                  text: "Home",
                  active: true,
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/2953b9be84414402ff74418a59df2c944094d57bc911ba7c854086f7b772dfa8?placeholderIfAbsent=true",
                  text: "Artikel",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/7a8ab4741639bf9c5a5713f1068cb6a5bd50b9dcf65b494743082b3d6b0ce221?placeholderIfAbsent=true",
                  text: "Werkzeugkasten",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/8ecbdfdc9af3978617fbede7532f39b5ce867a3c516515ded8f405e56aa3abc6?placeholderIfAbsent=true",
                  text: "Veranstaltungen",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/a6e0b12e6be77d911c723f9cbfbdd07256f11d130599f68a1aa89d44b89b1b88?placeholderIfAbsent=true",
                  text: "Fallstudie",
                },
                {
                  icon: "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/cddb0e0debe9b21710815207c08f1c31ec33f60669bee47bb8b86658b81215d7?placeholderIfAbsent=true",
                  text: "Gemeinschaft",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`rounded ${item.active ? "bg-[rgba(102,67,217,1)] text-[rgba(248,248,248,1)]" : "border border-[rgba(102,67,217,1)] border-solid"} self-stretch flex items-center gap-2.5 justify-center my-auto px-[25px] py-2.5 max-md:px-5`}
                >
                  <img
                    src={item.icon}
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt={item.text}
                  />
                  <span className="self-stretch my-auto">{item.text}</span>
                </button>
              ))}
            </div>
          </nav>
          <section className="w-full mt-[22px] max-md:max-w-full">
            <article className="flex w-full flex-col items-stretch justify-center py-px max-md:max-w-full">
              <div className="bg-[rgba(248,248,248,1)] flex flex-col items-stretch pb-[35px] px-px rounded-lg max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/39410e7c3ec264ad1c47d268f1085ef83c035213b98cd8e6e53547a44c784630?placeholderIfAbsent=true"
                  className="aspect-[7.75] object-contain w-full rounded-[8px_8px_0px_0px] max-md:max-w-full"
                  alt="Editorial header"
                />
                <div className="self-center z-10 mt-[-103px] w-full max-w-[1034px] max-md:max-w-full">
                  <div className="w-[432px] max-w-full">
                    <h2 className="text-[32px] font-medium tracking-[2px]">
                      <span className="text-[rgba(46,11,78,1)]">
                        Kommunalpolitik im{" "}
                      </span>
                      <span className="font-bold text-[rgba(226,106,0,1)]">
                        Fokus
                      </span>
                    </h2>
                    <p className="text-[#434343] text-right text-xl italic font-normal tracking-[-1px] mt-[5px]">
                      Entscheidungen, die zählen
                    </p>
                  </div>
                  {/* Editorial content */}
                  <div className="w-full mt-[34px]">
                    <h3 className="text-[rgba(226,106,0,1)] text-xl font-medium">
                      Wo setze ich mein Kreuz? <br />
                      Welches Thema bringe ich in die nächste Sitzung ein?{" "}
                      <br />
                      Wem vertraue ich?
                    </h3>
                    <div className="flex w-full flex-col items-stretch text-base mt-[15px]">
                      <div className="flex w-full gap-5 text-[#434343] font-normal leading-[30px] flex-wrap">
                        {/* Editorial columns */}
                        <div className="min-w-60 grow shrink w-[406px]">
                          <p className="italic">
                            Manche Entscheidungen fallen leicht, andere können
                            sie aufreiben. Über Weltpolitiker wir Barack Obama
                            liest man, er habe sich von vielen kleinen
                            Entscheidungen befreit, um seinen Fokus auf das
                            Wesentliche legen zu können. Und das scheint
                            tatsächlich Mode unter den einflussreichen
                            amerikanischen Männern zu sein. Haben Sie sich schon
                            mal gefragt, warum Sie Apple-CEO Steve Jobs immer
                            nur im schwarzen Rollkragenpulli gesehen haben? Er
                            hat sich selbst von der täglichen
                            Outfit-Entscheidung erlöst, indem er den
                            unauffällige Pullover zur Routine gemacht hat.
                          </p>
                          <p className="mt-[15px]">
                            Die Entscheidungen, die Sie in der Kommunalpolitik
                            treffen, mögen vielleicht weniger Menschen betreffen
                            als jene des ehemaligen US-Präsidenten oder die des
                            Apple-Mitgründers. Das macht sie aber nicht weniger
                            wichtig.
                          </p>
                        </div>
                        <div className="min-w-60 grow shrink w-[406px]">
                          <p>
                            Was Sie beschließen, liebe Kommunalpolitiker*innen,
                            beeinflusst das Leben so vieler Menschen – und zwar
                            genau dort, wo es drauf ankommt. Dort, wo sie leben,
                            wo sie arbeiten, wo sie ihre Kinder großziehen.
                          </p>
                          <p className="mt-[15px]">
                            Aus gutem Grund widmen wir unsere erste Ausgabe des
                            Kommunalpolitik Circles der Frage, wie Sie gute
                            Entscheidungen treffen.
                          </p>
                          <p className="text-[#434343] mt-[15px]">
                            <strong className="text-[rgba(84,84,84,1)]">
                              Unser Ziel:
                            </strong>{" "}
                            Ihre Interessen und Fragen so gut verstehen, dass
                            unser Magazin ihr Engagement in der Kommunalpolitik
                            leichter macht.{" "}
                            <strong className="text-[rgba(51,102,142,1)]">
                              Und wir hoffen, dass auch wir eine gute
                              Entscheidung getroffen haben
                            </strong>
                            , als wir uns entschlossen, uns als erstes den
                            Lokalpolitiker*innen zu widmen.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 mt-4">
                        <div className="self-stretch w-[130px] my-auto">
                          <div className="text-[#434343] font-bold">
                            Clara Steinbach
                          </div>
                          <div className="text-[rgba(156,156,156,1)] font-normal">
                            Chefredakteurin
                          </div>
                        </div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/04dd52ac2b5b1393cbacbb1bf4d2aeed1a666877da3c541a47e73c5f28f44294?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-[49px] self-stretch shrink-0 my-auto rounded-[50%]"
                          alt="Clara Steinbach"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <MonthlyTheme />
          <div className="flex w-full gap-5 flex-wrap mt-[54px] max-md:max-w-full max-md:mt-10">
            <ArticleList />
            <ToolboxSection />
          </div>
        </main>
      </div>
    </div>
  );
};
