import React from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Shield, Flame, Zap, Trophy, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Jujutsu Infinite Beginner Guide — Fast Leveling 1 to 200 & Domain Expansion',
  description: 'Complete Roblox Jujutsu Infinite progression guide. Learn how to level up rapidly, farm Demon Fingers in Shibuya Raids, optimize Cursed Energy stats, and unlock Domain Expansion.',
  keywords: ['jujutsu infinite beginner guide', 'jujutsu infinite leveling guide', 'how to get domain expansion jujutsu infinite', 'jujutsu infinite demon fingers']
};

export default function BeginnerGuidePage() {
  const levelingSteps = [
    {
      level: 'Levels 1 - 50: Jujutsu High Grounds',
      focus: 'Basic Cursed Energy & Starter Clan Spins',
      desc: 'Begin your journey at the Jujutsu High Training Grounds. Immediately redeem all active promo codes to claim free Clan Spins and Demon Fingers. Talk to the Principal NPC to accept Grade 4 and Grade 3 Cursed Spirit extermination bounties. Focus your stat points entirely on Strength and Cursed Energy capacity to eliminate waves with standard martial arts combos without running out of stamina.',
      tip: 'Do not roll for Innate Techniques until you collect at least 30 spins. Saving spins guarantees higher pity luck toward Rare and Special Grade techniques.'
    },
    {
      level: 'Levels 51 - 120: Shibuya District & Finger Bearers',
      focus: 'Special Grade Curses & Demon Finger Farming',
      desc: 'Migrate to the Shibuya District once you reach Level 50. Group up with at least two other players to participate in Finger Bearer and Disaster Curse Raids. Finger Bearer bosses drop guaranteed Demon Fingers and massive bundles of Yen. Focus on mastering Flash Steps and Cursed Energy reinforcement to evade wide-area Cleave and Fire Arrow attacks.',
      tip: 'Equip Cursed Tools like Playful Cloud or Split Soul Katana to dramatically boost your physical strike damage while conserving energy for defensive evasions.'
    },
    {
      level: 'Levels 121 - 200: Domain Expansion & Awakening',
      focus: 'Domain Mastery & Special Grade Certification',
      desc: 'Reaching Level 120 unlocks the Domain Expansion questline. You must collect 10 Demon Fingers and reach 100% Cursed Technique Mastery. Visit the Tengen Barrier Altar deep beneath Tokyo to initiate the domain calibration trial. Successfully completing the trial unlocks your ultimate skill (press G in combat), enabling guaranteed-hit barrier effects like Unlimited Void or Malevolent Shrine.',
      tip: 'In domain clashes, the player with the higher Cursed Energy stat automatically overwhelms the opposing barrier, instantly breaking their defenses.'
    }
  ];

  const statAllocations = [
    { build: 'Sorcerer DPS (Limitless / Shrine)', stats: '70% Cursed Energy, 20% Agility, 10% Vitality', role: 'Maximum burst damage and rapid domain cycling' },
    { build: 'Heavenly Restriction (Physical)', stats: '75% Strength, 20% Agility, 5% Vitality (0 CE)', role: 'Unstoppable martial damage with 100% barrier immunity' },
    { build: 'Support / Summoner (Ten Shadows)', stats: '50% Cursed Energy, 30% Vitality, 20% Strength', role: 'Sustains multiple shikigami while surviving boss agro' },
  ];

  const faqs = [
    {
      q: 'How do you unlock Domain Expansion in Jujutsu Infinite?',
      a: 'To unlock Domain Expansion, your character must reach at least Level 120, possess 10 Demon Fingers, and achieve maximum mastery on an S-Tier or S+ Tier Innate Technique. Interact with the Tengen Barrier Altar to complete the trial.'
    },
    {
      q: 'What is the fastest way to get Demon Fingers without Robux?',
      a: 'The highest free yield of Demon Fingers comes from completing Shibuya Raids and defeating Finger Bearer World Bosses that spawn every 30 minutes in the open-world map.'
    },
    {
      q: 'How does Simple Domain work against Domain Expansions?',
      a: 'Simple Domain temporarily neutralizes the guaranteed-hit attribute of an enemy domain barrier. It prevents instant damage for up to 8 seconds, giving you enough time to rush the domain caster and break their concentration.'
    },
    {
      q: 'What happens if you have Heavenly Restriction in Jujutsu Infinite?',
      a: 'Heavenly Restriction completely removes your Cursed Energy bar (set to 0), but grants a massive 3x physical damage multiplier, superhuman sprint speed, and natural immunity to domain sure-hit effects.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-purple-900/40 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-950/60 border border-indigo-800/50 rounded-full text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span>Complete Update 1 Sorcerer Progression</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Jujutsu Infinite <span className="text-purple-400">Leveling & Domain Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The comprehensive masterclass for dominating Roblox Jujutsu Infinite. Learn how to progress rapidly from Level 1 to 200, farm Demon Fingers in Shibuya Raids, optimize Cursed Energy allocations, and unleash devastating Domain Expansions.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-xl text-xs hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Innate Spin & DPS Calculator</span>
          </Link>
          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-purple-800/40 text-slate-200 font-bold rounded-xl text-xs hover:bg-purple-950/50 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Free Spin Codes</span>
          </Link>
        </div>
      </div>

      {/* 3-Phase Progression Roadmap */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Three-Tier Progression Blueprint</h2>
          <p className="text-xs text-slate-400 mt-1">
            Follow this optimized leveling route to reach Special Grade sorcerer status efficiently:
          </p>
        </div>

        <div className="space-y-6">
          {levelingSteps.map((s, i) => (
            <div key={i} className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-900/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-extrabold text-lg shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.level}</h3>
                  <span className="text-xs text-purple-400 font-medium">{s.focus}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              <div className="bg-purple-950/50 border border-purple-800/40 rounded-xl p-3.5 text-xs text-purple-200">
                <span className="font-bold text-purple-300">Sorcerer Tip: </span>
                <span>{s.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stat Build Recommendations */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Recommended Stat Allocation Builds</h2>
          <p className="text-xs text-slate-400 mt-1">
            Allocate your attribute points effectively based on your active Innate Technique:
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-x-auto border border-purple-900/40">
          <table className="w-full text-left text-xs">
            <thead className="bg-purple-950/80 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-purple-900/60">
              <tr>
                <th className="p-4">Build Archetype</th>
                <th className="p-4">Stat Distribution</th>
                <th className="p-4">Combat Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-900/40 text-slate-300">
              {statAllocations.map((b) => (
                <tr key={b.build} className="hover:bg-purple-950/30 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{b.build}</td>
                  <td className="p-4 text-purple-300">{b.stats}</td>
                  <td className="p-4 text-slate-300">{b.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <span>Frequently Asked Questions (Jujutsu Infinite FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-purple-900/40 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
