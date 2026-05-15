const steps = [
    {
      number: "1",
      title: "Capture",
      description:
        "Upload a clear photo of your palm in natural light for the best reading experience.",
      color: "from-[#ffb347] to-[#ff8a00]",
    },
    {
      number: "2",
      title: "Interpret",
      description:
        "PALM studies your palm lines, shapes, and patterns inspired by traditional palmistry.",
      color: "from-[#72dfb0] to-[#087c54]",
    },
    {
      number: "3",
      title: "Discover",
      description:
        "Receive personalized insights about personality, love, emotional patterns, and life direction.",
      color: "from-[#f6b94b] to-[#c77c12]",
    },
  ];
  
  export default function HowItWorks() {
    return (
            <section id="how-it-works" className="px-5 py-24">
            <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
              How PALM Works
            </p>
  
            <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-6xl">
              Three Simple Steps
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
              Experience modern palmistry through a simple guided process designed
              for clarity, reflection, and curiosity.
            </p>
          </div>
  
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-[2rem] border border-[#eadcc6] bg-white/70 p-8 shadow-xl shadow-orange-100/20"
              >
                <div
                  className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${step.color}`}
                />
  
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e8] text-2xl font-black text-[#421b0d] shadow-inner">
                  {step.number}
                </div>
  
                <h3 className="mt-6 text-3xl font-bold text-[#421b0d]">
                  {step.title}
                </h3>
  
                <p className="mt-5 leading-8 text-[#823616]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }