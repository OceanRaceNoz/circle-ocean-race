export const Header = () => {
  return (
    <header className="w-[529px] max-w-full font-normal tracking-[-0.5px]">
      <h1 className="text-[rgba(232,232,232,1)] text-2xl max-md:max-w-full">
        <span className="text-[rgba(232,232,232,1)]">👋 Willkommen im</span>
        <span className="font-medium text-[rgba(212,191,232,1)]">
          {" "}
          Kommunalpolitik Circle
        </span>
        <span className="text-[rgba(232,232,232,1)]">,</span>
        <span className="font-medium text-[rgba(232,232,232,1)]"> Anna</span>!
      </h1>
      <p className="text-[rgba(152,152,152,1)] text-lg max-md:max-w-full">
        Hier beginnt Ihre Reise, lokale Politik einfacher und effektiver zu
        gestalten.
      </p>
    </header>
  );
};
