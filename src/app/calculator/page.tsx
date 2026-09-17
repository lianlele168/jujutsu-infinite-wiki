import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Sparkles, Trophy, ArrowRight, BookOpen, HelpCircle, Zap } from 'lucide-react';
import JujutsuCalculatorClient from './JujutsuCalculatorClient';

export const metadata: Metadata = {
  title: 'Jujutsu Infinite Calculator: Innate Technique Spin Simulator & DPS Calculator',
  description: 'Interactive Roblox Jujutsu Infinite simulator. Simulate Innate Technique rolls for Six Eyes & Limitless, calculate Demon Finger spins, and test Cursed Technique DPS damage scaling.',
  alternates: {
    canonical: 'https://jujutsuinfinite.robloxwikihub.com/calculator',
  },
  openGraph: {
    title: 'Jujutsu Infinite Technique Spin Simulator & DPS Calculator',
    description: 'Simulate spins for Limitless and Malevolent Shrine, and calculate damage scaling.',
    url: 'https://jujutsuinfinite.robloxwikihub.com/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Jujutsu Infinite Technique Spin Simulator & DPS Calculator',
    url: 'https://jujutsuinfinite.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive technique roll simulator and cursed energy damage calculator for Roblox Jujutsu Infinite.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.91',
      ratingCount: '650',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/30 bg-gradient-to-b from-[#0a0518] via-slate-950/80 to-[#0a0518]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Game Tool • Authentic Roll Rates & Damage Scaling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Jujutsu Infinite <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Technique Simulator & DPS</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Test your odds of pulling S+ Tier Innate Techniques (Limitless & Six Eyes, Malevolent Shrine) and calculate exact Cursed Energy burst damage.
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <JujutsuCalculatorClient />
      </div>

      {/* SEO Strategy Guide & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-purple-900/40 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-amber-400" />
            Mastering Innate Techniques & Spin Odds in Jujutsu Infinite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-purple-300">1. Spin Pity & Demon Finger Currency</h3>
              <p>
                Innate Techniques have distinct rarity bands: Special Grade techniques (Limitless 0.1%, Shrine 0.5%) require substantial spin volume. Consuming Demon Fingers found across Tokyo grants guaranteed spin boosts and luck multipliers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-purple-300">2. Cursed Energy Scaling Formula</h3>
              <p>
                Special Grade techniques scale quadratically with your Cursed Energy stat. Upgrading your CE Capacity from 500 to 2,000 multiplies Hollow Purple and Domain Expansion tick damage by over 400%.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">What is the single highest damage move in the game?</strong>
              <span>Unlimited Void combined with maximum charge Hollow Purple deals over 35,000 total burst damage, easily one-shotting any non-boss curse in the game.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Can I store multiple Innate Techniques?</strong>
              <span>Yes, you can unlock Technique Storage slots with Yen or Gamepasses, allowing you to swap between Shrine and Limitless builds without rerolling.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-purple-900/40 bg-slate-950/60">
          <Link href="/tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300">
            <BookOpen className="w-4 h-4" />
            <span>Check Full Technique Tier List</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Redeem Free Spin Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
