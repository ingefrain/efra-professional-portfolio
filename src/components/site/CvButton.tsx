import { ArrowDownToLine, Mail } from "lucide-react";
import { CV_FILENAME, CV_URL, cvHref, cvLabel, type Lang } from "@/content/site";
import { cn } from "@/lib/utils";

export function CvButton({ lang, className, variant = "outline" }: { lang: Lang; className?: string; variant?: "outline" | "ghost" | "inverse" }) {
  const Icon = CV_URL ? ArrowDownToLine : Mail;
  return (
    <a
      href={cvHref(lang)}
      {...(CV_URL ? { download: CV_FILENAME, type: "application/pdf" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "outline" && "border border-primary/25 px-5 py-3 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
        variant === "ghost" && "border border-border px-3.5 py-2 text-[0.8rem] text-primary hover:border-accent hover:text-accent-strong",
        variant === "inverse" && "border border-inverse-border px-5 py-3 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary",
        className,
      )}
    >
      <Icon aria-hidden className="size-4" strokeWidth={2} />
      {cvLabel(lang)}
    </a>
  );
}
