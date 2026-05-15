import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Section = {
  heading: string;
  paragraphs: string[];
};

type Props = {
  badge: string;
  title: string;
  description: string;
  cta: string;
  sections: Section[];
};

export default function SEOLandingPage({
  badge,
  title,
  description,
  cta,
  sections,
}: Props) {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
            {badge}
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">{title}</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
            {description}
          </p>

          <a
            href="/#upload"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
          >
            {cta}
          </a>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-10 rounded-[2rem] border border-[#eadcc6] bg-white/75 p-8 leading-9 text-[#823616] shadow-xl shadow-orange-100/30">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-4xl font-bold text-[#421b0d]">
                {section.heading}
              </h2>

              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 pb-20">
  <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-[#fffaf0] p-6">
    <h2 className="text-2xl font-bold text-[#421b0d]">
      Explore More Palm Reading Topics
    </h2>

    <div className="mt-5 flex flex-wrap gap-3 text-sm">
      {[
        ["Free Palm Reading", "/free-palm-reading"],
        ["Online Palm Reading", "/online-palm-reading"],
        ["Palm Reading by Photo", "/palm-reading-by-photo"],
        ["Love Palm Reading", "/love-palm-reading"],
        ["Career Palm Reading", "/career-palm-reading"],
        ["Palm Reading India", "/palm-reading-india"],
        ["Palm Reading Chennai", "/palm-reading-chennai"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 font-medium text-[#087c54]"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}