#!/usr/bin/env python3
"""
Voegt aan elk blogartikel een korte, inhoudelijk passende slotalinea toe met
contextuele links naar de servicepagina en twee stadspagina's.

Waarom: geen enkel van de tien artikelen linkte naar een stadspagina, en vier
linkten ook niet naar de servicepagina. De blog kreeg daardoor wel interne
linkkracht binnen, maar gaf niets door aan de pagina's die geld moeten opleveren.

Elke alinea is anders geformuleerd en gebruikt andere plaatsen, zodat het geen
herhaald boilerplate-blok wordt dat Google als sjabloon herkent.
"""

import sys
from pathlib import Path

BLOG = Path("content/blog")

# slug -> slotalinea
ADDITIONS = {
    "wat-kost-website-laten-maken": (
        "Wil je weten wat jouw situatie kost? Op de pagina over "
        "[een website laten maken](/diensten/website-laten-maken) staan de "
        "prijsvoorbeelden op een rij. Werk je in de regio, kijk dan ook bij "
        "[website laten maken in Culemborg](/culemborg) of "
        "[website laten maken in Houten](/houten) voor de lokale aanpak."
    ),
    "zzp-website-laten-maken": (
        "Ben je zzp'er en wil je verder praten over de opzet? Bekijk hoe ik "
        "[een website laten maken](/diensten/website-laten-maken) aanpak, of lees "
        "wat dat betekent voor ondernemers bij "
        "[website laten maken in Vleuten](/vleuten) en "
        "[website laten maken in IJsselstein](/ijsselstein)."
    ),
    "website-maken-of-laten-maken": (
        "Kom je eruit dat uitbesteden logischer is? Dan lees je op de pagina over "
        "[een website laten maken](/diensten/website-laten-maken) hoe zo'n traject "
        "verloopt. Voor ondernemers in de omgeving zijn er aparte pagina's over "
        "[website laten maken in Woerden](/woerden) en "
        "[website laten maken in De Meern](/de-meern)."
    ),
    "lokale-seo-utrecht": (
        "Begin je liever met een site die technisch al goed staat? Bekijk dan "
        "[een website laten maken](/diensten/website-laten-maken). Werk je buiten "
        "de stad, dan vind je de lokale aanpak terug bij "
        "[website laten maken in Utrecht](/utrecht), "
        "[Nieuwegein](/nieuwegein) en [Zeist](/zeist)."
    ),
    "ai-chatbot-implementeren": (
        "Een chatbot werkt het beste op een site die snel en overzichtelijk is. "
        "Lees hoe ik dat aanpak bij [een website laten maken](/diensten/website-laten-maken), "
        "of bekijk de lokale aanpak voor "
        "[website laten maken in Utrecht](/utrecht) en [Amersfoort](/amersfoort)."
    ),
    "5-fouten-zzp-website": (
        "Wil je deze fouten voor zijn bij een nieuwe site? Op de pagina over "
        "[een website laten maken](/diensten/website-laten-maken) lees je hoe het "
        "traject loopt. Zit je in de regio, kijk dan bij "
        "[website laten maken in Veenendaal](/veenendaal) of "
        "[website laten maken in Culemborg](/culemborg)."
    ),
    "freelancer-of-bureau": (
        "Kies je voor een freelancer? Je leest op de pagina over "
        "[een website laten maken](/diensten/website-laten-maken) precies wat je "
        "krijgt en wat het kost. Voor de regio zijn er aparte pagina's over "
        "[website laten maken in Houten](/houten) en "
        "[website laten maken in Woerden](/woerden)."
    ),
    "hoe-lang-duurt-website-maken": (
        "De planning hangt sterk af van de omvang. Op de pagina over "
        "[een website laten maken](/diensten/website-laten-maken) staat per type "
        "site wat je kunt verwachten. Ook lokaal, bijvoorbeeld bij "
        "[website laten maken in IJsselstein](/ijsselstein) en "
        "[website laten maken in Vleuten](/vleuten)."
    ),
    "website-sneller-maken-pagespeed": (
        "Loopt je huidige site tegen zijn grenzen aan? Soms is opnieuw bouwen "
        "sneller dan blijven optimaliseren — zie "
        "[een website laten maken](/diensten/website-laten-maken). Voor de regio: "
        "[website laten maken in Amersfoort](/amersfoort) en "
        "[website laten maken in Zeist](/zeist)."
    ),
    "wordpress-of-maatwerk": (
        "Twijfel je nog over de techniek? Bij "
        "[een website laten maken](/diensten/website-laten-maken) bespreken we welke "
        "keuze bij jouw bedrijf past. Lokaal werk ik onder meer aan "
        "[website laten maken in De Meern](/de-meern) en "
        "[website laten maken in Nieuwegein](/nieuwegein)."
    ),
}

MARKER = "<!-- regio-links -->"


def main() -> int:
    changed = 0
    for slug, paragraph in ADDITIONS.items():
        path = BLOG / f"{slug}.md"
        if not path.exists():
            print(f"  OVERGESLAGEN (bestaat niet): {slug}")
            continue

        text = path.read_text(encoding="utf-8")
        if MARKER in text:
            print(f"  OVERGESLAGEN (al toegevoegd): {slug}")
            continue

        text = text.rstrip() + f"\n\n{MARKER}\n\n{paragraph}\n"
        path.write_text(text, encoding="utf-8", newline="")
        changed += 1
        print(f"  OK: {slug}")

    print(f"\naangepast: {changed} artikelen")
    return 0


if __name__ == "__main__":
    sys.exit(main())
