import { cn } from "../lib/utils";

type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/geoorbix_logo_white_nobg.svg"
        alt="Geo Orbix Technologies"
        className="w-[12rem] h-auto flex-shrink-0 object-contain"
      />
    </div>
  );
};

export default BrandMark;
