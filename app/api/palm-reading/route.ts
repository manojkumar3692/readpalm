import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const imageBase64 = body?.imageBase64;
    const user = body?.user;

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Palm image is required." },
        { status: 400 }
      );
    }

    if (!user?.name || !user?.dob || !user?.gender || !user?.uploadedHand) {
      return NextResponse.json(
        {
          error:
            "Name, date of birth, gender, and uploaded hand are required.",
        },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `
You are PALM, a modern palmistry-inspired report writer.

First validate the image:
- If the image does not clearly show a human open palm with visible palm lines, return:
{
  "isPalmImage": false,
  "error": "Please upload a clear photo of your palm. The image should show an open human palm with visible lines."
}

If it is a palm image, return JSON only in this exact structure:
{
  "isPalmImage": true,
  "teaser": {
    "greeting": "",
    "personality": "",
    "love": "",
    "career": "",
    "characterSignals": ["", "", ""],
    "conversionHook": ""
  },
  "fullReport": {
    "overview": "",
    "palmTraits": {
      "heartLine": "",
      "headLine": "",
      "lifeLine": "",
      "fateLine": "",
      "handShape": "",
      "mounts": ""
    },
    "personality": "",
    "love": "",
    "career": "",
    "wealth": "",
    "emotionalPattern": "",
    "lifePath": "",
    "guidance": ""
  }
}

User details:
- Name: ${user.name}
- Date of birth: ${user.dob}
- Gender: ${user.gender}
- Uploaded hand: ${user.uploadedHand}
- Traditionally recommended hand based on user's gender: ${user.recommendedHand}

Palmistry framing:
- Traditionally, for many palmistry traditions, men are often asked to show the right palm and women the left palm.
- If uploaded hand differs from the recommended hand, do not reject. Mention gently that the reading is based on the uploaded hand and may reflect a different aspect.
- Use the user's name naturally.
- Use DOB only for age/life-stage personalization, not exact astrology calculation.
- Keep the language warm, spiritual, personal, emotionally intelligent, and believable.
- Avoid guaranteed future predictions.
- Avoid medical, legal, financial, death, pregnancy, or scary claims.
- Use phrases like "suggests", "may indicate", "appears to show", "traditionally associated with".
- The greeting should use the user's name naturally.
- The teaser should feel personally accurate, short, and curiosity-driven.
- characterSignals must contain exactly 3 short traits only.
- conversionHook should make the user curious to unlock the full report, without sounding fake, scary, or manipulative.
- The full report should feel premium, detailed, and personal.
          `,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this uploaded image. Confirm it is a human palm first. If valid, generate the personalized palmistry reading.",
            },
            {
              type: "image_url",
              image_url: {
                url: imageBase64,
              },
            },
          ],
        },
      ],
    });

    const content = completion.choices[0].message.content || "{}";
    const parsed = JSON.parse(content);

    if (!parsed.isPalmImage) {
      return NextResponse.json(
        {
          error:
            parsed.error ||
            "Please upload a clear photo of your palm with visible palm lines.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      userProfile: {
        name: user.name,
        dob: user.dob,
        gender: user.gender,
        uploadedHand: user.uploadedHand,
        recommendedHand: user.recommendedHand,
      },
      teaser: parsed.teaser,
      fullReport: parsed.fullReport,
    });
  } catch (error) {
    console.error("Palm reading error:", error);

    return NextResponse.json(
      { error: "Failed to generate palm reading. Please try again." },
      { status: 500 }
    );
  }
}