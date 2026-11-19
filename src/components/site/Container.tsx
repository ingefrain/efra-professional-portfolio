import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function SectionLabel({ index, children, inverse = false }: { index?: string | undefined; children: ReactNode; inverse?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em]",
        inverse ? "text-accent-soft" : "text-accent-strong",
      )}
    >
      {index && <span>{index}</span>}
      <span aria-hidden className={cn("h-px w-8", inverse ? "bg-accent-soft/60" : "bg-accent/60")} />
      <span>{children}</span>
    </p>
  );
}
