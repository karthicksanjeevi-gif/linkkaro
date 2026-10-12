
import logo from '../assets/linkkaro-logo.png';

type BrandLogoProps = {
  className?: string;
  size?: number;
};

export default function BrandLogo({
  className = '',
  size = 52,
}: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="LinkKaro logo"
      width={size}
      className={className}
      style={{
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
}
