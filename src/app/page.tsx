import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import React from 'react';
import Link from 'next/link';
import { Flame, ShieldAlert, Trophy, ArrowRight, Check, Copy } from 'lucide-react';
import { GAME_INFO, ACTIVE_CODES, TIER_LIST, FAQ_ITEMS, HOWTO_STEPS } from '@/data/wikiData';
import StructuredData from '@/components/StructuredData';
import AuthorCard from '@/components/AuthorCard';

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      <StructuredData
        faq={FAQ_ITEMS}
        howTo={{
          name: "How to Redeem Jujutsu Infinite Codes",
          description: "Step-by-step tutorial on redeeming free spins and Yen in Jujutsu Infinite.",
          steps: HOWTO_STEPS,
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-purple-900/30 bg-gradient-to-b from-purple-950/30 via-[#0b0d14] to-[#0b0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 text-xs font-semibold mb-6">
            <Flame className="w-4 h-4 text-purple-400" />
            <span>Update 1 Is Live — </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Roblox <span className="gradient-text">Jujutsu Infinite</span> Wiki
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
            {GAME_INFO.description}
          </p>

          {/* Author Card */}
          <div className="max-w-3xl mx-auto text-left">
            <AuthorCard
              authorName="Hlele"
              role="Editor"
              experience="AI-assisted research, human-reviewed"
              patchVersion="Update 1 Meta Patch Verified"
              editorialNote="All data is cross-verified from multiple sources; unverified values are explicitly labeled."
            />
          </div>

          {/* Domain Expansion Screenshot Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
            <img
              src="/images/jujutsu-infinite-domain.webp"
              alt="Roblox Jujutsu Infinite Malevolent Shrine Domain Expansion and Black Flash Combat"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                <span className="text-purple-400 font-bold">Domain Clash</span> — Malevolent Shrine barrier unfolding & Black Flash critical strikes
              </div>
              <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-[11px] rounded-lg border border-purple-500/30">
                Special Grade Verified
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/codes"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-purple-600/30 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <ShieldAlert className="w-5 h-5" />
              <span>View Active Codes</span>
            </Link>
            <Link
              href="/tier-list"
              className="px-6 py-3.5 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-purple-800/40 text-purple-300 font-bold flex items-center space-x-2 transition-all"
            >
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Technique Tier List</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Active Codes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-cyan-400" />
              Latest Active Codes 
            </h2>
            <p className="text-xs text-gray-400">Tested & Working in Update 1</p>
          </div>
          <Link
            href="/codes"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center space-x-1"
          >
            <span>All Codes ({ACTIVE_CODES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.slice(0, 4).map((c) => (
            <div
              key={c.code}
              className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-indigo-950/20 border border-purple-800/40 flex items-center justify-between group hover:border-purple-600/60 transition-all"
            >
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-mono font-extrabold text-lg text-purple-300 tracking-wider">
                    {c.code}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                    Active
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-medium">{c.rewards}</p>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {c.addedDate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier List Quick Look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-purple-950/20 border border-purple-800/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Innate Technique Tier Ranking
              </h2>
              <p className="text-xs text-gray-400">Update 1 Meta Tier List</p>
            </div>
            <Link
              href="/tier-list"
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center space-x-1"
            >
              <span>Full Tier Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {TIER_LIST.slice(0, 4).map((t) => (
              <div
                key={t.name}
                className="p-4 rounded-xl bg-[#0e101a] border border-purple-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={`w-9 h-9 rounded-lg font-black text-sm flex items-center justify-center ${
                      t.tier === 'S+'
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                        : 'bg-purple-600 text-white'
                    }`}
                  >
                    {t.tier}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-base">{t.name}</h3>
                    <p className="text-xs text-gray-400">{t.description}</p>
                  </div>
                </div>
                <div className="text-xs text-purple-300 font-mono bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-800/40 self-start sm:self-auto">
                  {t.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0e101a] border border-purple-900/30">
              <h3 className="text-sm font-bold text-purple-300 mb-2">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
