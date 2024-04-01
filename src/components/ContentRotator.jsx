import React, { useState, useEffect } from "react";
import StreamingContent from "./StreamingContent";

const ContentRotator = () => {
  const contents = [
    "Ask PAPO: To find you drug replacements in seconds", 
    "Buyer: There is a drug shortage for X drug, find me another one!",
    "PAPO: Replacements for X drug are Y and Z (+10 more)",
    "Chat: Metoprolol, indications and usage - INDICATIONS AND USAGE Hypertension Metoprolol tartrate tablets, USP are indicated for the treatment of hypertension.",
    "Chat: Acetaminophen, ask doctor - Ask a doctor before use if you have liver disease."
  ];
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentContentIndex(prevIndex => (prevIndex + 1) % contents.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [contents.length]);

  return <StreamingContent content={[contents[currentContentIndex]]} loop={false} speed={30} />;
}

export default ContentRotator;
