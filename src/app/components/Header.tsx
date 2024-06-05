export default function Header() {
  return (
    <header className="bg-[rgb(28,28,28)] w-screen z-[90] flex justify-center">
      <div className="">
        <div
          data-navigation="true"
          className="items-center justify-start flex h-[72px] w-screen lg:w-[1360px] px-[80px]"
        >
          <a
            href="/"
            target="_self"
            data-company-logo-link="true"
            className="text-black block h-[37px] w-[140px] flex-[0_0_auto]"
          >
            <img
              alt="Trustpilot reviews"
              width={140}
              src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
            />
          </a>
          <div className="items-center flex flex-1 min-w-0 pl-[32px] pr-[16px]" />
        </div>
      </div>
    </header>
  );
}
