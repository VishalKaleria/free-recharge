// app/page.tsx (or your main page file)
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Phone,
  Share2,
  AlertTriangle,
  CheckCircle2,
  Award,
  Building,
  CheckCircle,
} from "lucide-react";
import Script from "next/script";
import AdBanner from "@/components/AdBanner";

// Operator data including logo paths
const operators = [
  { name: "Jio", logo: "/jio-logo.png" },
  { name: "Airtel", logo: "/airtel-logo-white-text-vertical.jpg" },
  { name: "Vi", logo: "/vi-vodafone-idea.svg" },
  { name: "BSNL", logo: "/Bharat_Sanchar_Nigam_Limited-Logo.wine.png" },
];

export default function PrankRechargePage() {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");
  const [shareCount, setShareCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // IMPORTANT: REPLACE WITH YOUR ACTUAL DEPLOYED SITE URL
  const siteUrl = "https://recharge.ifdex.eu";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleOperatorSelect = (operatorName: string) => {
    setSelectedOperator(operatorName);
  };

  const handleSubmitNumber = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length === 10 && selectedOperator) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
      }, 1500);
    }
  };
  // More convincing official-sounding WhatsApp message
  const message = encodeURIComponent(
    `*आधिकारिक सूचना: डिजिटल भारत अभियान के अंतर्गत वित्त वर्ष 2025-26 की नई पहल*

प्रधानमंत्री श्री नरेंद्र मोदी जी द्वारा आज दिनांक 07/05/2025 को विशेष घोषणा की गई है। 'डिजिटल सशक्तिकरण अभियान' के तहत सभी भारतीय मोबाइल उपयोगकर्ताओं को 84 दिनों का निःशुल्क रीचार्ज प्रदान किया जा रहा है।

 *लाभ प्राप्त करने के लिए*
 नीचे दिए गए आधिकारिक लिंक पर क्लिक करें:
${siteUrl}

 *महत्वपूर्ण नोट*: यह योजना सीमित समय के लिए है और साइट पर अत्यधिक लोड के कारण देरी हो सकती है।

*PMO-IN/DT/2025/CR-7845*`
  );
  const handleShare = () => {
    window.open(`https://wa.me/?text=${message}`, "_blank");

    setShareCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 5) {
        // Optional: Add a small delay before showing the "prank" message
        // to make it seem like something is processing.
        setTimeout(() => {
          setStep(3);
        }, 1000);
      }
      return newCount;
    });
  };

  // For after prank share
  const handlePrankShare = () => {
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  // Placeholder for PM Modi image - replace with a real one
  const pmModiImage =
    "/India_PM_Narendra_Modi-2?qlt=90&fmt=webp&resMode=sharp2";

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-100 text-gray-800 font-sans">
      {/* Google AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      {/* Official Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/Emblem_of_India.svg"
              alt="भारत सरकार चिन्ह"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-orange-600">भारत सरकार</h1>
              <p className="text-xs text-gray-600">Government of India</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-blue-700">
              प्रधानमंत्री कार्यालय
            </p>
            <p className="text-xs text-gray-500">Prime Minister's Office</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-orange-500 via-white to-green-500 h-1.5"></div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 w-full max-w-2xl">
        {/* Top Ad Banner */}
        <div className="mb-6">
          <AdBanner
            adSlot="1234567890"
            adFormat="horizontal"
            style={{ margin: "0 auto", display: "block" }}
          />
        </div>

        <Card className="w-full shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-100 via-white to-green-100 p-6 text-center">
            <div className="flex justify-center mb-4">
              <Award size={48} className="text-orange-500" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-orange-700">
              डिजिटल सशक्तिकरण अभियान 2025
            </CardTitle>
            <CardDescription className="text-md text-gray-700 mt-2">
              प्रधानमंत्री श्री नरेंद्र मोदी द्वारा राष्ट्र को 84 दिन का
              निःशुल्क मोबाइल रीचार्ज का उपहार!
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Image
                    src={pmModiImage}
                    alt="प्रधानमंत्री श्री नरेंद्र मोदी"
                    width={120}
                    height={120}
                    className="mx-auto mb-4 rounded-full shadow-lg border-4 border-white"
                    priority
                  />
                  <p className="text-md font-semibold text-gray-700">
                    "डिजिटल भारत के सपने को साकार करने के लिए यह हमारा छोटा सा
                    योगदान है।" -{" "}
                    <span className="text-blue-700">श्री नरेंद्र मोदी</span>
                  </p>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-medium text-sm flex items-center justify-center">
                      <AlertTriangle size={18} className="mr-2" />
                      अति आवश्यक सूचना: यह योजना सीमित समय के लिए वैध है!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmitNumber} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      1. अपना सिम ऑपरेटर चुनें:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {operators.map((op) => (
                        <Button
                          key={op.name}
                          type="button"
                          variant={
                            selectedOperator === op.name ? "default" : "outline"
                          }
                          className={`h-full text-sm flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-150
                                      ${
                                        selectedOperator === op.name
                                          ? "bg-green-600 hover:bg-green-700 text-white border-green-700 ring-2 ring-green-500 ring-offset-2"
                                          : "border-gray-300 hover:border-blue-500"
                                      }`}
                          onClick={() => handleOperatorSelect(op.name)}
                        >
                          <Image
                            src={op.logo}
                            alt={`${op.name} Logo`}
                            width={48}
                            height={48}
                            className="h-12 mt-2 w-auto"
                          />
                          {op.name}
                        </Button>
                      ))}
                    </div>
                    {!selectedOperator && (
                      <p className="text-red-500 text-xs mt-1">
                        कृपया एक ऑपरेटर चुनें।
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      2. अपना 10 अंकों का मोबाइल नंबर दर्ज करें:
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                      <div className="bg-gray-100 p-3 border-r border-gray-300">
                        <Phone size={20} className="text-gray-600" />
                      </div>
                      <Input
                        type="tel"
                        placeholder="मोबाइल नंबर यहाँ लिखें"
                        className="w-full p-3 border-0 focus:ring-0 rounded-none"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={mobileNumber}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d*$/.test(val) && val.length <= 10) {
                            // Only allow digits
                            setMobileNumber(val);
                          }
                        }}
                        required
                      />
                    </div>
                    {mobileNumber && mobileNumber.length !== 10 && (
                      <p className="text-red-500 text-xs mt-1">
                        कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg rounded-md shadow-lg hover:shadow-xl transition-shadow duration-150 flex items-center justify-center"
                    disabled={
                      isLoading ||
                      mobileNumber.length !== 10 ||
                      !selectedOperator
                    }
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        प्रोसेसिंग...
                      </>
                    ) : (
                      "मुफ्त रीचार्ज प्राप्त करें!"
                    )}
                  </Button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 text-center py-8">
                {/* Mid-page Ad Banner */}
                <div className="my-4">
                  <AdBanner adSlot="5678901234" adFormat="rectangle" />
                </div>

                <CheckCircle2
                  size={64}
                  className="text-green-500 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-green-700">
                  आपका आवेदन सफलतापूर्वक दर्ज कर लिया गया है!
                </h2>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-700 text-md">
                    इस सरकारी योजना का लाभ उठाने एवं अपना ₹999 का रीचार्ज
                    प्राप्त करने हेतु, कृपया इस महत्वपूर्ण सूचना को अपने
                    <span className="font-bold text-orange-600">
                      {" "}
                      5 WhatsApp मित्रों या समूहों में साझा करें।
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    सत्यापन और आरबीआई अधिसूचना के अनुसार, शेयर करने के बाद आपका
                    रीचार्ज स्वतः एक्टिवेट हो जाएगा।
                  </p>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg my-4">
                  <p className="text-blue-700 font-medium text-lg">
                    शेयर स्थिति:{" "}
                    <span className="text-orange-600 font-bold">
                      {shareCount} / 5
                    </span>{" "}
                    पूर्ण
                  </p>
                  {shareCount > 0 && shareCount < 5 && (
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${(shareCount / 5) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleShare}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-lg rounded-md shadow-lg hover:shadow-xl transition-shadow duration-150 flex items-center justify-center gap-2"
                  disabled={shareCount >= 5}
                >
                  <Share2 size={20} />
                  WhatsApp पर साझा करें
                </Button>
                {shareCount >= 5 && (
                  <p className="text-sm text-green-600 mt-4">
                    धन्यवाद! आपका रीचार्ज प्रक्रिया में है...
                  </p>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center py-10">
                {/* Official Success Heading */}
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-semibold text-green-700">
                    रीचार्ज सफलतापूर्वक दर्ज किया गया ✅
                  </h2>
                </div>

                {/* Processing message */}
                <p className="text-gray-700 text-base">
                  आपका ₹999 का रिचार्ज अनुरोध स्वीकार कर लिया गया है।
                  <br />
                  रिचार्ज की पुष्टि 24 घंटे के भीतर हो जाएगी। कृपया इंतजार करें।
                </p>

                {/* Bottom Ad Banner before prank reveal */}
                <div className="my-4">
                  <AdBanner adSlot="9876543210" adFormat="horizontal" />
                </div>

                {/* Divider */}
                <div className="border-t pt-6" />

                {/* Surprise Prank Message */}
                <div className="text-center space-y-2">
                  <Image
                    src="/png-transparent-laughing-emoji-thumbnail-removebg-preview.png"
                    alt="April Fool"
                    className="mx-auto animate-bounce"
                    width={164}
                    height={164}
                  />
                  <h3 className="text-lg font-bold text-red-600">
                    अप्रैल फूल बना दिया 😂
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    कोई रिचार्ज नहीं हो रहा भाई... यह बस एक मज़ेदार मज़ाक था!
                  </p>
                </div>

                {/* Share Button */}
                <Button
                  onClick={() => {
                    setStep(1);
                    setMobileNumber("");
                    setSelectedOperator("");
                    setShareCount(0);
                    handlePrankShare();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-md shadow-lg"
                >
                  दोस्तों को भी बनाओ अप्रैल फूल 🤭
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bottom Ad Banner */}
        <div className="mt-6">
          <AdBanner
            adSlot="5432109876"
            adFormat="horizontal"
            style={{ margin: "0 auto", display: "block" }}
          />
        </div>
      </main>

      <footer className="w-full bg-white border-t text-gray-800 text-sm py-6 mt-10">
        <div className="container mx-auto px-4 text-center space-y-4">
          {/* Digital India Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/digital-india.svg"
              alt="Digital India"
              className="h-16 w-auto mx-auto"
            />
          </div>

          {/* Text Content */}
          <p className="font-medium">
            © {currentYear} भारत सरकार। सर्वाधिकार सुरक्षित।
            <br className="sm:hidden" />
            साइट की सामग्री प्रधानमंत्री कार्यालय द्वारा प्रदान की गई है।
          </p>

          <p className="text-gray-500 text-xs">
            राष्ट्रीय सूचना विज्ञान केंद्र (एनआईसी) द्वारा परिकल्पित, विकसित और
            होस्ट किया गया।
          </p>
        </div>
      </footer>
    </div>
  );
}
