import React from 'react';
import { Trophy, Zap, Shield, Sparkles } from 'lucide-react';
import { TIER_LIST } from '@/data/wikiData';

export const metadata = {
  title: 'Jujutsu Infinite Innate Technique Tier List (August 2026 Update 1)',
  description: 'Best Innate Techniques & Domain Expansions ranked in Roblox Jujutsu Infinite. S+ to B tier list for PvP & Boss Raids.',
};

export default function TierListPage() {
  const tiers = ['S+', 'S', 'A', 'B'] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-800/50 text-yellow-300 text-xs font-semibold mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Update 1 Meta Ranking</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Jujutsu Infinite Technique Tier List (August 2026)
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Rankings based on PvP burst damage, Domain Expansion barrier strength, and Boss Raid DPS.
        </p>
      </div>

      <div className="space-y-8">
        {tiers.map((tierGrade) => {
          const items = TIER_LIST.filter((t) => t.tier === tierGrade);
          if (items.length === 0) return null;

          return (
            <section key={tierGrade} className="space-y-3">
              <div className="flex items-center space-x-3">
                <span
                  className={`px-4 py-1.5 rounded-xl font-black text-lg text-white shadow-lg ${
                    tierGrade === 'S+'
                      ? 'bg-rose-600 shadow-rose-600/30'
                      : tierGrade === 'S'
                      ? 'bg-purple-600 shadow-purple-600/30'
                      : tierGrade === 'A'
                      ? 'bg-indigo-600'
                      : 'bg-gray-700'
                  }`}
                >
                  {tierGrade} Tier
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {tierGrade === 'S+' ? 'God Tier / Meta Dominant' : tierGrade === 'S' ? 'Top Tier' : 'Strong Choice'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 rounded-2xl bg-[#0e101a] border border-purple-900/40 hover:border-purple-600/60 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-white text-lg flex items-center gap-2">
                          <Zap className="w-4 h-4 text-purple-400" />
                          {item.name}
                        </h3>
                        <span className="text-[10px] uppercase font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
                    <div className="pt-2 border-t border-purple-950 text-xs font-mono text-purple-300">
                      {item.stats}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
