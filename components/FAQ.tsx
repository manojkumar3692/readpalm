const faqs = [
    {
      question: "Can AI really read my palm?",
      answer:
        "PALM AI uses your palm image to create a palmistry-inspired reading for entertainment and self-reflection. It combines visual analysis with traditional palmistry concepts.",
    },
    {
      question: "Which hand should I upload?",
      answer:
        "Upload the palm you use most often. You can use your right or left hand, as long as the palm lines are clearly visible.",
    },
    {
      question: "How do I get my full report?",
      answer:
        "After your free preview, you can unlock the full report for ₹99. Once payment is successful, your detailed report appears instantly with a download option.",
    },
    {
      question: "Is my palm image stored?",
      answer:
        "Your palm image is used to generate your reading. We recommend keeping only what is required for service delivery and improving user experience.",
    },
    {
      question: "Is this a guaranteed prediction?",
      answer:
        "No. PALM AI readings are for entertainment, reflection, and personal insight only. They should not be treated as guaranteed predictions or professional advice.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Because this is a digital personalized report, refunds are generally not available after successful delivery. If payment is deducted but the report is not generated, contact support with your payment screenshot.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
              FAQ
            </p>
  
            <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-6xl">
              Questions Before Your Reading?
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
              Everything you need to know about PALM AI, your palm image, payment,
              and report delivery.
            </p>
          </div>
  
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-[#eadcc6] bg-white/75 p-6 shadow-lg shadow-orange-100/30"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-[#421b0d]">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-2xl text-[#087c54] group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
  
                <p className="mt-4 leading-8 text-[#823616]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }