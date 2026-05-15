const testimonials = [
    {
      name: "Priya",
      location: "Chennai",
      text: "The reading felt surprisingly personal. I loved how it explained my emotions and career direction in a calm way.",
    },
    {
      name: "Aarav",
      location: "Mumbai",
      text: "The palm report was beautifully written and easy to understand. The love and personality sections really connected with me.",
    },
    {
      name: "Meera",
      location: "Dubai",
      text: "I tried it out of curiosity, but the report gave me a lot to reflect on. The PDF looked premium and meaningful.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
              User Experiences
            </p>
  
            <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-6xl">
              Loved by Palm Reading Seekers
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
              Real-style experiences from people exploring palmistry for
              self-reflection, clarity, and curiosity.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-[#eadcc6] bg-white/75 p-7 shadow-xl shadow-orange-100/30"
              >
                <div className="text-[#f36b05]">★★★★★</div>
  
                <p className="mt-5 leading-8 text-[#823616]">“{item.text}”</p>
  
                <div className="mt-6 border-t border-[#eadcc6] pt-5">
                  <p className="font-bold text-[#421b0d]">{item.name}</p>
                  <p className="text-sm text-[#823616]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }