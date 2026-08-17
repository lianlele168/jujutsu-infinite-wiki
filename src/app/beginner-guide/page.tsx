import React from 'react';
import { BookOpen, Sparkles, Shield, Flame } from 'lucide-react';

export const metadata = {
  title: 'Jujutsu Infinite Beginner Leveling & Cursed Energy Guide (August 2026)',
  description: 'Learn how to level up fast, farm Demon Fingers, and unlock Domain Expansion in Roblox Jujutsu Infinite.',
};

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-purple-900/30 pb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Update 1 Starter Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Jujutsu Infinite Beginner Guide & Leveling (2026)
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Master Cursed Energy, unlock your innate technique, and farm Demon Fingers efficiently.
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 rounded-2xl bg-[#0e101a] border border-purple-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-purple-400" />
            1. Spinning for Your Innate Technique
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            When you first create your character in Jujutsu Infinite, use all available active promo codes (check our <a href="/codes" className="text-purple-400 underline">Codes page</a>) to collect free Clan Spins and Innate Spins. Aim for S-tier or S+ tier techniques like <strong className="text-purple-300">Limitless (Six Eyes)</strong> or <strong className="text-purple-300">Shrine</strong>.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-[#0e101a] border border-purple-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            2. Fast Leveling (Levels 1 - 200)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li><strong>Levels 1-50:</strong> Complete Cursed Spirit Exorcism quests at Jujutsu High training grounds.</li>
            <li><strong>Levels 51-150:</strong> Team up for Shibuya Raid Bosses to gain massive EXP and Yen.</li>
            <li><strong>Levels 151+:</strong> Unlock Domain Expansion by collecting 10 Demon Fingers and reaching Cursed Energy Mastery Grade 1.</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-[#0e101a] border border-purple-900/40 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            3. How to Farm Demon Fingers
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Demon Fingers are the rare legendary item needed for stat resets and high-tier domain upgrades. You can obtain them by defeating Cursed Finger Bearer bosses in Raids or redeeming active promo codes.
          </p>
        </section>
      </div>
    </div>
  );
}
