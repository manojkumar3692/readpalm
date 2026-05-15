export default function Header() {
  const navLinks = [
    ["Free Reading", "#upload"],
    ["How It Works", "#how-it-works"],
    ["Palm Lines", "#palm-lines"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcc6]/70 bg-[#fff8e8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#087c54] text-xl shadow-lg">
            ✋
          </div>

          <div>
            <p className="text-lg font-bold tracking-[0.22em] text-[#421b0d]">
              PALM
            </p>

            <p className="text-xs text-[#823616]">
              Modern Palmistry Experience
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#823616] lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition hover:text-[#087c54]"
            >
              {label}
            </a>
          ))}

          {/* SEO Pages */}
          <a
            href="/free-palm-reading"
            className="transition hover:text-[#087c54]"
          >
            Free Palm Reading
          </a>

          <a
            href="/online-palm-reading"
            className="transition hover:text-[#087c54]"
          >
            Online Palm Reading
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#upload"
          className="rounded-full bg-[#087c54] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-200/40 transition hover:bg-[#066b48]"
        >
          Start Reading
        </a>
      </div>
    </header>
  );
}