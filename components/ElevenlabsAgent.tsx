"use client"; // Ensures this component renders only on the client side to avoid SSR issues with custom elements.

import Script from "next/script";
import { FC } from "react";

const ElevenLabsAgent: FC = () => {
  return (
    <>
      <elevenlabs-convai agent-id="YrxJMbF79TmVMiPciQ7B"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
      />
    </>
  );
};

export default ElevenLabsAgent;