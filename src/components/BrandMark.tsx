import { cn } from "../lib/utils";

type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/geo_orbix_dark_logo.svg"
        alt="Geo Orbix Technologies"
        className="h-12 w-12 flex-shrink-0 object-contain"
      />
      <div className="leading-tight">
        <span className="block text-lg md:text-xl font-display font-bold gradient-text">
          Geo Orbix Technologies
        </span>
      </div>
    </div>
  );
};

export default BrandMark;
