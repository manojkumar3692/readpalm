import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET!;

type VerifyPayload = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  result?: {
    personality: string;
    love: string;
    career: string;
  };
};

export async function POST(req: NextRequest) {
  try {
    if (!KEY_SECRET) {
      return NextResponse.json(
        { error: "Razorpay secret not configured" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as VerifyPayload;

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      result,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing verification fields" },
        { status: 400 }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", KEY_SECRET)
      .update(payload)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      result,
    });
  } catch (err) {
    console.error("verify payment error", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}