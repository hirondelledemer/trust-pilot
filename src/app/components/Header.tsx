export default function Header() {
  return (
    <header className="bg-[rgb(28,28,28)] relative w-[1905px] z-[90] font-normal box-border">
      <div
        data-navigation="true"
        className="items-center flex h-[72px] max-w-[1360px] font-normal box-border mx-[272.5px] my-0 px-[80px] py-0"
      >
        <a
          href="/"
          target="_self"
          data-company-logo-link="true"
          className="text-black block h-[37px] w-[140px] flex-[0_0_auto] font-normal box-border"
        >
          <img
            alt="Trustpilot reviews"
            width={140}
            src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
            className="font-normal box-border"
          />
        </a>
        <div className="items-center flex flex-1 min-w-0 font-normal box-border pl-[32px] pr-[16px] py-0" />
      </div>
    </header>
  );
}
