type BrandLogoProps = {
  className?: string;
  size?: number;
};

export default function BrandLogo({ className = '', size = 52 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LinkKaro logo"
      role="img"
    >
      <defs>
        <linearGradient id="brand-green" x1="18" y1="16" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#28BE77" />
          <stop offset="1" stopColor="#0D8B57" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#brand-green)" />
      <circle cx="60" cy="60" r="47" fill="rgba(255,255,255,0.08)" />

      <circle cx="42" cy="43" r="10.5" fill="white" />
      <circle cx="78" cy="43" r="10.5" fill="white" />

      <path
        d="M28 82C31.5 69.5 41.5 61 54 61H66C78.5 61 88.5 69.5 92 82V90H28V82Z"
        fill="white"
      />
      <path
        d="M44 60C47 68 52.5 72 60 72C67.5 72 73 68 76 60"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M50 57L60 50L70 57"
        stroke="#E7F8EE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
