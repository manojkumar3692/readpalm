export default function TrustMetrics() {
    const metrics = [
      {
        value: "10,000+",
        label: "Palm Readings",
        color: "text-[#f36b05]",
      },
      {
        value: "4.8/5",
        label: "User Rating",
        color: "text-[#087c54]",
      },
      {
        value: "98%",
        label: "Satisfaction",
        color: "text-[#c77c12]",
      },
    ];
  
    return (
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#eadcc6] bg-white/70 p-6 shadow-xl shadow-orange-100/30 md:p-10">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
              Trusted Worldwide
            </p>
  
            <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-5xl">
              Thousands Explore Their Palm Story
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
              PALM combines traditional palmistry inspiration with modern digital
              interpretation to create a deeply personal experience.
            </p>
          </div>
  
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[2rem] border border-[#eadcc6] bg-[#fff8e8] p-8 text-center shadow-lg shadow-orange-100/20"
              >
                <p className={`text-5xl font-black ${metric.color}`}>
                  {metric.value}
                </p>
  
                <p className="mt-4 text-lg font-medium text-[#823616]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }