import { cn } from "@/utils/cn";

export function SquircleShape({
  className,
  children,
  shapeClassName,
}: {
  className?: string;
  shapeClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn(className)}>
      <div
        className={cn("h-full w-full bg-primary-200", shapeClassName)}
        style={{
          clipPath: `url(#squircleClip)`,
        }}
      >
        {children}
      </div>
      <svg width="10" height="10" viewBox="0 0 10 10" className="absolute">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          />
        </clipPath>
      </svg>
    </div>
  );
}
