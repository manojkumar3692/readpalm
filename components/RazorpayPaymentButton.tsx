"use client";

import { useEffect, useRef } from "react";

type Props = {
  visible: boolean;
  result: unknown;
};

export default function RazorpayPaymentButton({ visible, result }: Props) {
  const razorpayFormRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!visible) return;

    const form = razorpayFormRef.current;
    if (!form) return;

    sessionStorage.setItem(
      "palm_paid_report",
      JSON.stringify({
        paymentId: "Razorpay Payment Button",
        report: result,
      })
    );

    localStorage.setItem(
      "palm_paid_report_backup",
      JSON.stringify({
        paymentId: "Razorpay Payment Button",
        report: result,
      })
    );

    form.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_SpbfgX8NGBALMz");

    form.appendChild(script);

    return () => {
      try {
        form.innerHTML = "";
      } catch {}
    };
  }, [visible, result]);

  if (!visible) return null;

  return <form ref={razorpayFormRef} className="min-h-[52px] w-full" />;
}