import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand.ts";
import { cn } from "@/lib/utils.ts";

type Props = { className?: string; showSlogan?: boolean };

/** Logo lock-up: round logo, wordmark and optional slogan. */
export default function BrandMark({ className, showSlogan = false }: Props) {
  return (
    <Link to="/" className={cn("flex shrink-0 items-center gap-2.5 cursor-pointer", className)}>
      <img src="/brand/logo-192.png" alt={`${BRAND.name} logo`} width={36} height={36} className="size-9 rounded-full shadow-sm" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight">{BRAND.name}</span>
        {showSlogan && <span className="pt-1 text-[11px] text-muted-foreground">{BRAND.slogan}</span>}
      </span>
    </Link>
  );
}
