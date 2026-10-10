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
          <stop stopColor="#1FBC75" />
          <stop offset="1" stopColor="#0E8B5A" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="54" fill="url(#brand-green)" />
      <circle cx="60" cy="60" r="44" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />

      <circle cx="44" cy="45" r="10" fill="white" />
      <circle cx="76" cy="45" r="10" fill="white" />

      <path d="M32 80C36 66.8 46 60 60 60C74 60 84 66.8 88 80V88H32V80Z" fill="white" />

      <path d="M54 36L62 31L70 36L62 41L54 36Z" fill="#F3C76A" opacity="0.9" />
      <path d="M46 74C48 68 54 65 60 65C66 65 72 68 74 74" stroke="#F3C76A" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
