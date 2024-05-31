'use client'; // todo: do not use client

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <a href="/" target="_self">
          <img
            alt="Trustpilot reviews"
            width="140"
            src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
          />
        </a>
        <div className="midSection"></div>
      </div>
    </header>
  );
}
