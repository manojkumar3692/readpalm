export default function PaymentErrorPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8e8] px-5 text-[#421b0d]">
        <div className="max-w-xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 text-center shadow-2xl shadow-orange-200/30">
          <p className="text-sm font-semibold text-red-600">Payment Issue</p>
  
          <h1 className="mt-4 text-4xl font-bold">
            We Could Not Confirm Your Payment
          </h1>
  
          <p className="mt-5 leading-8 text-[#823616]">
            If your payment was deducted, please send us a screenshot and payment
            ID. We will verify it and help you access your report or refund.
          </p>
  
          <a
            href="mailto:support@readpalm.in"
            className="mt-8 inline-flex rounded-full bg-[#087c54] px-6 py-3 font-semibold text-white"
          >
            Contact Support
          </a>
        </div>
      </main>
    );
  }