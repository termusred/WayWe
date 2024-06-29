"use client"; // This ensures the code runs on the client-side only

import { getCookie, setCookie } from "@/utils/cookies";
import { useEffect, useState } from "react";

export default function Banner() {
  // State to control the visibility of the banner
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    const hasAcceptedCookies = getCookie('acceptedCookies') === null;

    // If the user hasn't accepted cookies, show the banner
    setShowBanner(hasAcceptedCookies);
  }, []);

  // Function to handle accepting cookies
  const acceptCookies = () => {
    setCookie('acceptedCookies', true, 365);
    setShowBanner(false);
  };
  return (
    <div className={`bg-gray-800 text-white p-4 fixed bottom-0 left-0 w-full h-96 ${showBanner ? '' : 'hidden'}`}>
      <p className="text-center">We use cookies to improve your experience. Click 'Accept' to continue.</p>
      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={acceptCookies}>Accept</button>
    </div>
  );
};
