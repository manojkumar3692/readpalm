"use client";

import Image from "next/image";
import { useState } from "react";

const loadingMessages = [
  "Checking palm image...",
  "Reading the major palm lines...",
  "Studying personal details...",
  "Preparing your free palm preview...",
];

type PalmReadingResult = {
  teaser: {
    personality: string;
    love: string;
    career: string;
  };
  fullReport: {
    overview: string;
    palmTraits: {
      heartLine: string;
      headLine: string;
      lifeLine: string;
      fateLine: string;
      handShape: string;
      mounts: string;
    };
    personality: string;
    love: string;
    career: string;
    wealth: string;
    emotionalPattern: string;
    lifePath: string;
    guidance: string;
  };
};

type Props = {
  setResult: (result: PalmReadingResult | null) => void;
};

export default function PalmUploader({ setResult }: Props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [uploadedHand, setUploadedHand] = useState("");

  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [error, setError] = useState("");

  const recommendedHand =
    gender === "male" ? "right" : gender === "female" ? "left" : "";

  function handleImageUpload(file: File) {
    setFileName(file.name);
    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  async function startAnalysis() {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }

    if (!gender) {
      setError("Please select your gender.");
      return;
    }

    if (!uploadedHand) {
      setError("Please select which hand you uploaded.");
      return;
    }

    if (!imageBase64 || isAnalyzing) return;

    setError("");
    setResult(null);
    setIsAnalyzing(true);
    setMessageIndex(0);

    let index = 0;

    const interval = setInterval(() => {
      index += 1;

      if (index < loadingMessages.length) {
        setMessageIndex(index);
      }
    }, 1200);

    try {
      const response = await fetch("/api/palm-reading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageBase64,
          user: {
            name,
            dob,
            gender,
            uploadedHand,
            recommendedHand,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate reading");
      }

      setResult(data);
      sessionStorage.setItem("palm_full_report", JSON.stringify(data));

      setTimeout(() => {
        document
          .getElementById("free-preview")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      clearInterval(interval);
      setIsAnalyzing(false);
    }
  }

  function removeImage() {
    setPreview(null);
    setImageBase64(null);
    setFileName("");
    setResult(null);
    setError("");
  }

  return (
    <section id="upload" className="px-5 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#eadcc6] bg-white/70 p-6 shadow-2xl shadow-orange-200/30 backdrop-blur md:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#087c54]">Step 1 of 3</p>

          <h2 className="mt-3 text-3xl font-bold text-[#421b0d] md:text-5xl">
            Enter Your Details
          </h2>

          <p className="mt-4 text-[#823616]/80">
            These details help personalize your palmistry reading.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-2xl border border-[#eadcc6] bg-[#fff8e8] px-5 py-4 text-[#421b0d] outline-none focus:border-[#087c54]"
          />

          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type="date"
            className="rounded-2xl border border-[#eadcc6] bg-[#fff8e8] px-5 py-4 text-[#421b0d] outline-none focus:border-[#087c54]"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-2xl border border-[#eadcc6] bg-[#fff8e8] px-5 py-4 text-[#421b0d] outline-none focus:border-[#087c54]"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={uploadedHand}
            onChange={(e) => setUploadedHand(e.target.value)}
            className="rounded-2xl border border-[#eadcc6] bg-[#fff8e8] px-5 py-4 text-[#421b0d] outline-none focus:border-[#087c54]"
          >
            <option value="">Which hand are you uploading?</option>
            <option value="right">Right palm</option>
            <option value="left">Left palm</option>
          </select>
        </div>

        {recommendedHand && (
          <div className="mt-5 rounded-2xl border border-[#72dfb0] bg-[#e8fff4] p-4 text-sm leading-7 text-[#087c54]">
            Traditional palmistry often recommends the{" "}
            <strong>{recommendedHand} palm</strong> for{" "}
            <strong>{gender}</strong> readings. You can still upload either hand,
            but selecting the correct hand helps personalize the interpretation.
          </div>
        )}

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-[#421b0d]">
            Upload Your Palm Photo
          </h3>

          <p className="mt-3 text-[#823616]/80">
            Place your palm clearly in natural light. Avoid blurred images,
            objects, screens, or non-palm photos.
          </p>
        </div>

        {!preview ? (
          <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#f1b739] bg-[#fff8e8] px-6 py-12 text-center transition hover:border-[#087c54] hover:bg-[#e8fff4]">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
            />

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f7e9ce] text-5xl shadow-inner">
              🖐️
            </div>

            <p className="mt-5 text-lg font-bold text-[#421b0d]">
              Tap to upload palm image
            </p>

            <p className="mt-2 text-sm text-[#823616]/70">
              JPG or PNG recommended
            </p>
          </label>
        ) : (
          <div className="mt-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#eadcc6] bg-white shadow-xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={preview}
                  alt="Palm Preview"
                  fill
                  className="object-cover"
                />

                {isAnalyzing && (
                  <>
                    <div className="absolute inset-0 bg-[#087c54]/10" />

                    <div className="absolute left-0 top-0 h-1 w-full animate-[scan_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#087c54] to-transparent shadow-[0_0_20px_rgba(8,124,84,0.8)]" />

                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <div className="rounded-full border border-[#72dfb0] bg-[#e8fff4]/95 px-5 py-3 text-center text-sm font-semibold text-[#087c54] shadow-lg">
                        {loadingMessages[messageIndex]}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-[#421b0d]">
                  Palm image selected
                </p>

                <p className="text-sm text-[#823616]/70">{fileName}</p>
              </div>

              <button
                disabled={isAnalyzing}
                onClick={removeImage}
                className="rounded-full border border-[#eadcc6] px-4 py-2 text-sm font-medium text-[#823616] transition hover:bg-[#fff2cc] disabled:opacity-40"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {error && (
          <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          onClick={startAnalysis}
          disabled={!imageBase64 || isAnalyzing}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-6 py-5 font-bold text-white shadow-xl shadow-orange-300/40 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isAnalyzing ? "Reading Your Palm..." : "Analyze My Palm"}
        </button>

        <p className="mt-4 text-center text-xs text-[#823616]/60">
          Your image is used only for generating your personalized palm reading.
        </p>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0%;
          }
        }
      `}</style>
    </section>
  );
}