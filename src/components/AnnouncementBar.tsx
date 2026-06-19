import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * Altijd zichtbare balk bovenaan de site (boven de header).
 * Mobiel-geoptimaliseerd: korte tekst op kleine schermen, volledige tekst op desktop.
 */
export default function AnnouncementBar() {
  return (
    <Link
      href="/projecten"
      className="group block bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0f766e] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-center gap-2 text-center">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>

        <Sparkles className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />

        <p className="text-[12px] sm:text-[13px] font-medium leading-none truncate">
          <span className="sm:hidden">Bekijk mijn projecten</span>
          <span className="hidden sm:inline">
            Nieuw: bekijk de projecten die ik recent heb gebouwd
          </span>
        </p>

        <span className="inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-semibold flex-shrink-0">
          <span className="hidden sm:inline">Bekijken</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
