import Link from "next/link";

export default function InternalLinks() {
  const pages = [
    {
      title: "AI Palm Reading",
      href: "/ai-palm-reading",
    },
    {
      title: "Palm Reading Report",
      href: "/palm-reading-report",
    },
    {
      title: "Online Palm Reading",
      href: "/online-palm-reading",
    },
    {
      title: "Palm Reading By Photo",
      href: "/palm-reading-by-photo",
    },
    {
      title: "Career Palm Reading",
      href: "/career-palm-reading",
    },
    {
      title: "Love Palm Reading",
      href: "/love-palm-reading",
    },
  ];

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-[#421b0d]">
          Explore More Palm Readings
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}