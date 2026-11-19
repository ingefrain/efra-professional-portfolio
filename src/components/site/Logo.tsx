import { cn } from "@/lib/utils";

/** Typographic EFRAN logo: Manrope 700 with slightly opened letter spacing. */
export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block font-sans text-[1.35rem] font-bold leading-none tracking-[0.2em]",
        inverse ? "text-primary-foreground" : "text-primary",
        className,
      )}
      style={{ marginRight: "-0.2em" }}
    >
      EFRAN
    </span>
  );
}
