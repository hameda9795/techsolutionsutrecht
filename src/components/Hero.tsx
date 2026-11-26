"use client";

import Link from "next/link";
import { ArrowRight, Check, User } from "lucide-react";
import { useState } from "react";

export default function Hero({ hasLocalProject = false }: { hasLocalProject?: boolean }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-12 lg:pb-16 overflow-hidden bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 max-w-2xl">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Beschikbaar voor nieuwe projecten
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-ink)] leading-tight mb-6 tracking-tight">
                Website laten maken in Utrecht.{" "}
                <span className="text-[var(--color-primary)]">
                  Direct contact met je webdesigner.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[var(--color-muted)] mb-6 leading-relaxed">
                Ik ben Max, webdesigner in Utrecht-Zuilen. Ik bouw websites voor
                zzp&apos;ers en kleine bedrijven, met een duidelijke presentatie van
                je diensten en een eenvoudige manier om contact op te nemen.{" "}
                <strong className="text-[var(--color-ink)]">Ontwerp, inhoud en prijs spreken we vooraf af.</strong>
              </p>

              {/* Trust Badges - Replacing testimonials */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-success)]/10 border border-[var(--color-success)]/20">
                  <Check className="w-5 h-5 text-[var(--color-success)]" />
                  <span className="text-sm font-medium text-[var(--color-ink)]">12+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-success)]/10 border border-[var(--color-success)]/20">
                  <Check className="w-5 h-5 text-[var(--color-success)]" />
                  <span className="text-sm font-medium text-[var(--color-ink)]">KvK 99202301</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-success)]/10 border border-[var(--color-success)]/20">
                  <Check className="w-5 h-5 text-[var(--color-success)]" />
                  <span className="text-sm font-medium text-[var(--color-ink)]">Gevestigd in Zuilen</span>
                </div>
              </div>

              <p className="mb-6 text-lg font-semibold text-[var(--color-ink)]">WordPress vanaf €300 excl. btw · 1 pagina met basis-SEO. <Link href="#website-prijzen" className="text-[var(--color-primary)] underline underline-offset-4">Vergelijk de pakketten</Link></p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors shadow-lg shadow-[#25D366]/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp direct
                </a>
                <Link 
                  href="/contact?dienst=Website%20laten%20maken&van=%2F"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-bg)] text-[var(--color-ink)] border-2 border-[var(--color-border)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--color-surface)] transition-colors"
                >
                  Offerte voor je website
                </Link>
              </div>

              <nav aria-label="Op deze pagina" className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[var(--color-primary)]">
                <Link href="#website-prijzen" className="underline underline-offset-4">Websiteprijzen</Link>
                <Link href={hasLocalProject ? "#werk-in-utrecht" : "#website-voorbeelden"} className="underline underline-offset-4">
                  {hasLocalProject ? "Werk voor een Utrechtse praktijk" : "Websitevoorbeelden"}
                </Link>
                <Link href="#website-aanpak" className="underline underline-offset-4">Zo werk ik</Link>
              </nav>

              {/* Mobile: Wie ben ik button with profile picture */}
              <div className="lg:hidden flex items-center gap-4 bg-[var(--color-bg)]/80 backdrop-blur border border-[var(--color-border)] px-4 py-3 rounded-xl">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[var(--color-primary)]/20 shadow-md">
                  <img
                    src="/profile.webp"
                    alt="Max"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain bg-[var(--color-surface)]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <User className="w-8 h-8 text-[var(--color-muted)] hidden m-auto" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--color-ink)] text-sm">Max</p>
                  <p className="text-xs text-[var(--color-muted)]">Webdesigner in Utrecht-Zuilen</p>
                </div>
                <button 
                  onClick={() => setIsProfileOpen(true)}
                  className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Wie ben ik?
                </button>
              </div>
            </div>

            {/* Right Content - Wie ben ik Card (Desktop only) */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="bg-[var(--color-bg)]/90 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl p-6 shadow-xl sticky top-24">
                
                <div className="flex flex-col items-center mb-6">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-[var(--color-bg)] shadow-2xl ring-4 ring-[var(--color-primary)]/10 mb-4">
                    <img
                      src="/profile.webp"
                      alt="Max - Software Engineer"
                      width={160}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain bg-[var(--color-surface)]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <User className="w-20 h-20 text-[var(--color-muted)] hidden m-auto" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-[var(--color-ink)] text-xl">Max</h3>
                    <p className="text-sm text-[var(--color-muted)]">Webdesigner in Utrecht-Zuilen</p>
                  </div>
                </div>

                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Je werkt rechtstreeks met mij aan je website. Ik denk mee over
                  de pagina&apos;s, het ontwerp en de informatie die jouw klanten
                  nodig hebben. Ook na de oplevering kun je bij mij terecht voor
                  websiteonderhoud en SEO.
                </p>

                <button 
                  onClick={() => setIsProfileOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-surface)] hover:bg-[var(--color-border)] text-[var(--color-ink)] px-4 py-3 rounded-lg font-medium transition-colors text-sm"
                >
                  Lees meer over mij
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary)]">12+</div>
                    <div className="text-xs text-[var(--color-muted)]">jaar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary)]">20+</div>
                    <div className="text-xs text-[var(--color-muted)]">klanten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary)]">Zuilen</div>
                    <div className="text-xs text-[var(--color-muted)]">Utrecht</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Drawer Modal */}
      {isProfileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsProfileOpen(false)}
          />
          <div className="fixed inset-x-0 top-0 z-50 bg-[var(--color-bg)] shadow-2xl max-h-[80vh] overflow-y-auto lg:max-w-3xl lg:mx-auto lg:top-8 lg:rounded-2xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-[var(--color-bg)] shadow-xl ring-4 ring-[var(--color-primary)]/10">
                    <img
                      src="/profile.webp"
                      alt="Max - Software Engineer"
                      width={96}
                      height={96}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain bg-[var(--color-surface)]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <User className="w-12 h-12 text-[var(--color-muted)] hidden m-auto" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-ink)]">Wie ben ik</h3>
                    <p className="text-[var(--color-muted)]">Webdesigner in Utrecht-Zuilen</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="p-2 hover:bg-[var(--color-surface)] rounded-lg"
                >
                  <svg className="w-6 h-6 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="prose prose-slate text-[var(--color-muted)] max-w-none">
                <p className="text-lg mb-4">
                  Ik ben Max, webdesigner in Utrecht-Zuilen en de persoon achter TechSolutionsUtrecht.
                  Naast mijn studie wiskunde hier in Utrecht heb ik de afgelopen 12 jaar gewerkt aan websites, webshops en online vindbaarheid.
                </p>
                
                <p className="mb-4">
                  Wat begon als freelance projecten is nu mijn eigen bedrijf geworden, met één duidelijk doel: 
                  ondernemers helpen met een website die écht werkt en goed gevonden wordt op Google.
                </p>
                
                <p className="mb-4">
                  Ik programmeer niet alleen code; ik denk mee over je merk en zorg dat het ontwerp past bij wie jij bent. 
                  Voor websites kies ik de techniek die bij het project past, bijvoorbeeld <strong className="text-[var(--color-ink)]">WordPress of Next.js</strong>.
                  Voor een webshop, websiteonderhoud en verdere SEO kun je ook bij mij terecht.
                </p>
                
                <p className="mb-4">
                  We beginnen bij je klanten: welke informatie zoeken ze, welke
                  voorbeelden willen ze zien en hoe nemen ze contact met je op?
                  Dat vertalen we naar de inhoud en opbouw van je website.
                </p>
                
                <p>
                  Omdat ik zelf een eenmanszaak ben, weet ik hoe belangrijk persoonlijk contact is. 
                  Ik richt me specifiek op startende ZZP&apos;ers die een professionele website nodig hebben 
                  zonder de hoofdprijs te betalen. <strong className="text-[var(--color-ink)]">Geen accountmanagers, geen poespas</strong> - 
                  je hebt direct contact met de developer die aan je project werkt. En ik sta voor mijn werk: 
                  je krijgt gewoon garantie, omdat ik geloof in kwaliteit die blijft hangen.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[var(--color-border)]">
                <div className="text-center p-4 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">12+</div>
                  <div className="text-sm text-[var(--color-muted)]">jaar ervaring</div>
                </div>
                <div className="text-center p-4 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">20+</div>
                  <div className="text-sm text-[var(--color-muted)]">tevreden klanten</div>
                </div>
                <div className="text-center p-4 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-3xl font-bold text-[var(--color-primary)]">100%</div>
                  <div className="text-sm text-[var(--color-muted)]">persoonlijk contact</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
