// app/components/AiLogo.tsx

"use client";

import React from "react";

/**
 * Base props shared by every logo component so you can override size or styling if needed.
 */
interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Icon size ↔ sets both width & height (in pixels). Defaults to 48 px.
   */
  size?: number | string;
}

/* -------------------------------------------------------------------------- */
/*                                 SVG LOGOS                                  */
/* -------------------------------------------------------------------------- */

export const OpenAILogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="OpenAI / ChatGPT logo"
    {...props}
  >
    <path d="M128 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0zm0 20C67.5 20 20 67.5 20 128s47.5 108 108 108 108-47.5 108-108S188.5 20 128 20z" />
  </svg>
);

export const ClaudeLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Claude Anthropic logo"
    {...props}
  >
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="10" fill="none" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fontFamily="sans-serif"
    >
      C
    </text>
  </svg>
);

export const HuggingFaceLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Hugging Face logo"
    {...props}
  >
    <circle cx="256" cy="256" r="256" fill="#FFCD00" />
    <text
      x="50%"
      y="60%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="120"
    >
      🤗
    </text>
  </svg>
);

export const DeepSeekLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Deepseek logo"
    {...props}
  >
    <rect width="100%" height="100%" rx="30" fill="currentColor" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fill="#fff"
    >
      DS
    </text>
  </svg>
);

export const N8NLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="n8n logo"
    {...props}
  >
    <circle cx="128" cy="128" r="128" fill="#F36C3D" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fill="#fff"
    >
      n8n
    </text>
  </svg>
);

export const ZapierLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Zapier logo"
    {...props}
  >
    <circle cx="128" cy="128" r="128" fill="#FF4A00" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fill="#fff"
    >
      ⚡
    </text>
  </svg>
);

export const MakeLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Make.com logo"
    {...props}
  >
    <circle cx="128" cy="128" r="128" fill="#5C2D91" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="40"
      fill="#fff"
    >
      Mk
    </text>
  </svg>
);

export const PythonLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 255"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Python logo"
    {...props}
  >
    <path
      d="M126.916.003c-13.83.062-27.264 1.258-39.366 3.466-34.889 6.382-39.226 19.78-39.226 44.51v32.646h78.452v9.02H36.02C14.56 89.645 0 105.73 0 128.396c0 22.12 15.08 34.472 35.892 34.472h24.27v-33.968h78.583v86.637H78.51v-17.185H38.002c-18.26 0-33.74 11.137-38.666 30.662-5.67 21.733-5.914 35.47 0 58.602C4.884 248.232 23.474 256 46.716 256h36.656c17.097 0 31.296-14.14 31.296-31.36v-31.105h28.91c34.403 0 50.422-14.15 50.422-46.22V80.87c0-39.228-27.755-65.338-67.084-67.57a286.723 286.723 0 0 0-7.01-.296h-.49Z"
      fill="#3776AB"
    />
  </svg>
);

export const ReactLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="React.js logo"
    {...props}
  >
    <circle cx="128" cy="128" r="30" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="12" fill="none">
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" />
    </g>
  </svg>
);

export const NextjsLogo: React.FC<IconProps> = ({ size = 48, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="currentColor"
    aria-label="Next.js logo"
    {...props}
  >
    <path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0zm60.52 195.69-61.5-88.25v87.5h-10.96v-111h10.47l61.02 87.5v-87.5h10.96v111z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                            MAIN DISPLAY COMPONENT                           */
/* -------------------------------------------------------------------------- */

/**
 * A responsive section that showcases all supported AI & dev‑tool logos.
 *
 * Usage:
 * ```tsx
 * <AiLogo />
 * ```
 */
export default function AiLogo() {
  const logos = [
    { name: "OpenAI / ChatGPT", Icon: OpenAILogo },
    { name: "Claude Anthropic", Icon: ClaudeLogo },
    { name: "Huggingface", Icon: HuggingFaceLogo },
    { name: "Deepseek", Icon: DeepSeekLogo },
    { name: "n8n", Icon: N8NLogo },
    { name: "Zapier", Icon: ZapierLogo },
    { name: "Make.com", Icon: MakeLogo },
    { name: "Python", Icon: PythonLogo },
    { name: "React.js", Icon: ReactLogo },
    { name: "Next.js", Icon: NextjsLogo },
  ];

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Supported AI & Dev Tools</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Seamless integrations with today’s leading LLMs, frameworks & no‑code platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 place-items-center">
        {logos.map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <Icon className="text-white" />
            <span className="text-xs text-gray-300 text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

