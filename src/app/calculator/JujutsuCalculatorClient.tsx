'use client';

import { useState, useMemo } from 'react';
import { TIER_LIST } from '@/data/wikiData';
import { Zap, Sparkles, Dices, Flame, Shield, Check, Copy, Trophy } from 'lucide-react';

interface RollResult {
  name: string;
  tier: string;
  rarity: 'Special Grade' | 'Grade 1' | 'Semi-Grade 1' | 'Common';
}

const TECHNIQUES_POOL = [
  { name: 'Limitless & Six Eyes', tier: 'S+', rarity: 'Special Grade' as const, rate: 0.1, baseDmg: 950 },
  { name: 'Malevolent Shrine', tier: 'S+', rarity: 'Special Grade' as const, rate: 0.5, baseDmg: 900 },
  { name: 'Ten Shadows Technique', tier: 'S', rarity: 'Grade 1' as const, rate: 2.0, baseDmg: 720 },
  { name: 'Idle Transfiguration', tier: 'S', rarity: 'Grade 1' as const, rate: 2.5, baseDmg: 680 },
  { name: 'Star Rage', tier: 'A', rarity: 'Semi-Grade 1' as const, rate: 5.0, baseDmg: 580 },
  { name: 'Disaster Flames', tier: 'A', rarity: 'Semi-Grade 1' as const, rate: 8.0, baseDmg: 520 },
  { name: 'Straw Doll Technique', tier: 'B', rarity: 'Common' as const, rate: 25.0, baseDmg: 340 },
  { name: 'Blood Manipulation', tier: 'B', rarity: 'Common' as const, rate: 56.9, baseDmg: 310 },
];

export default function JujutsuCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'spin' | 'dps'>('spin');

  // Spin Simulator State
  const [totalSpins, setTotalSpins] = useState(0);
  const [specialGradeCount, setSpecialGradeCount] = useState(0);
  const [grade1Count, setGrade1Count] = useState(0);
  const [history, setHistory] = useState<RollResult[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  // DPS Calculator State
  const [selectedTechIdx, setSelectedTechIdx] = useState(0);
  const [cursedEnergy, setCursedEnergy] = useState(1200); // 100 to 3000
  const [masteryLevel, setMasteryLevel] = useState(50); // 1 to 100
  const [isDomainActive, setIsDomainActive] = useState(true);
  const [blackFlashMultiplier, setBlackFlashMultiplier] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedTech = TECHNIQUES_POOL[selectedTechIdx] || TECHNIQUES_POOL[0];

  const dpsCalculation = useMemo(() => {
    const ceMultiplier = 1 + cursedEnergy / 800;
    const masteryMultiplier = 1 + (masteryLevel / 100) * 0.8;
    const domainBonus = isDomainActive ? 1.5 : 1.0;
    const bfBonus = blackFlashMultiplier ? 2.5 : 1.0;

    const baseHit = Math.round(selectedTech.baseDmg * ceMultiplier * masteryMultiplier);
    const ultimateBurst = Math.round(baseHit * 4.2 * domainBonus * bfBonus);
    const dpsPerSecond = Math.round((ultimateBurst / 8));

    return {
      baseHit,
      ultimateBurst,
      dpsPerSecond,
      ceMultiplier: ceMultiplier.toFixed(2),
    };
  }, [selectedTech, cursedEnergy, masteryLevel, isDomainActive, blackFlashMultiplier]);

  const handleSpin = (count: number) => {
    setIsSpinning(true);
    setTimeout(() => {
      let newSG = 0;
      let newG1 = 0;
      const rolls: RollResult[] = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        let cumulative = 0;
        let picked = TECHNIQUES_POOL[TECHNIQUES_POOL.length - 1];

        for (const item of TECHNIQUES_POOL) {
          cumulative += item.rate;
          if (rand < cumulative) {
            picked = item;
            break;
          }
        }

        if (picked.rarity === 'Special Grade') newSG++;
        else if (picked.rarity === 'Grade 1') newG1++;

        if (rolls.length < 5) {
          rolls.push({ name: picked.name, tier: picked.tier, rarity: picked.rarity });
        }
      }

      setTotalSpins((prev) => prev + count);
      setSpecialGradeCount((prev) => prev + newSG);
      setGrade1Count((prev) => prev + newG1);
      setHistory((prev) => [...rolls, ...prev.slice(0, 5)]);
      setIsSpinning(false);
    }, 200);
  };

  const copyDpsReport = () => {
    const text = `Jujutsu Infinite DPS Build:\n• Technique: ${selectedTech.name} (${selectedTech.tier})\n• Cursed Energy: ${cursedEnergy} | Mastery: Lv.${masteryLevel}\n• Domain Expansion: ${isDomainActive ? 'Active (1.5x)' : 'Inactive'}\n• Max Burst Damage: ${dpsCalculation.ultimateBurst.toLocaleString()} DMG\n• Sustained DPS: ${dpsCalculation.dpsPerSecond.toLocaleString()} DMG/sec\nCalculated on https://jujutsuinfinite.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('spin')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'spin'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Dices className="w-4 h-4" />
          <span>Technique Spin Simulator</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('dps')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'dps'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>DPS Damage Calculator</span>
        </button>
      </div>

      {/* 1. Spin Simulator Tab */}
      {activeTab === 'spin' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Dices className="w-5 h-5 text-purple-400" />
                <span>Simulate Innate Technique Rolls</span>
              </h2>
              <span className="text-xs text-slate-400">Limitless: 0.1% | Shrine: 0.5%</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                disabled={isSpinning}
                onClick={() => handleSpin(1)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 1x
              </button>
              <button
                disabled={isSpinning}
                onClick={() => handleSpin(10)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-purple-600 hover:bg-purple-500 text-white border border-purple-400 shadow-md shadow-purple-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 10x
              </button>
              <button
                disabled={isSpinning}
                onClick={() => handleSpin(100)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-600/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 100x Speed
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400">Rarity Probability Table</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {TECHNIQUES_POOL.map((t) => (
                  <div key={t.name} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="truncate pr-1 text-slate-200">{t.name}</span>
                    <span className="font-bold text-purple-300">{t.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-900/40 p-6 rounded-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Spin Statistics</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Spins</span>
                <span className="text-xl font-black text-white">{totalSpins}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-purple-400 block">Special Grade</span>
                <span className="text-xl font-black text-purple-300">{specialGradeCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-cyan-400 block">Grade 1 Hits</span>
                <span className="text-xl font-black text-cyan-300">{grade1Count}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-amber-400 block">Fingers Spent</span>
                <span className="text-xl font-black text-amber-300">{totalSpins * 2}</span>
              </div>
            </div>

            {history.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-400">Recent Rolls:</span>
                <div className="space-y-1">
                  {history.map((h, idx) => (
                    <div key={idx} className="text-xs p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-200 font-medium">{h.name}</span>
                      <span className={`text-[11px] font-bold ${h.rarity === 'Special Grade' ? 'text-purple-300' : 'text-slate-400'}`}>
                        {h.rarity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. DPS Calculator Tab */}
      {activeTab === 'dps' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Cursed Technique Parameter Scaling</span>
              </h2>
            </div>

            <div className="space-y-4">
              {/* Technique Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">Select Innate Technique</label>
                <select
                  value={selectedTechIdx}
                  onChange={(e) => setSelectedTechIdx(Number(e.target.value))}
                  aria-label="Select Innate Technique"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-purple-500"
                >
                  {TECHNIQUES_POOL.map((t, idx) => (
                    <option key={t.name} value={idx}>
                      [{t.tier}] {t.name} (Base Power: {t.baseDmg})
                    </option>
                  ))}
                </select>
              </div>

              {/* Cursed Energy Capacity */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Cursed Energy Stat (CE)</span>
                  <span className="text-purple-300 font-bold">{cursedEnergy} CE</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={cursedEnergy}
                  onChange={(e) => setCursedEnergy(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Technique Mastery */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Technique Mastery Level</span>
                  <span className="text-purple-300 font-bold">Lv. {masteryLevel} / 100</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={masteryLevel}
                  onChange={(e) => setMasteryLevel(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Combat Modifiers */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={isDomainActive}
                    onChange={(e) => setIsDomainActive(e.target.checked)}
                    className="rounded border-slate-700 text-purple-600 focus:ring-purple-500"
                  />
                  <span>Domain Expansion Active (1.5x)</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={blackFlashMultiplier}
                    onChange={(e) => setBlackFlashMultiplier(e.target.checked)}
                    className="rounded border-slate-700 text-purple-600 focus:ring-purple-500"
                  />
                  <span>Black Flash Proc (2.5x Critical)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Output Damage Stats */}
          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-900/40 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Projected Output</h3>
              <button
                onClick={copyDpsReport}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Single Hit Damage</span>
                <span className="text-2xl font-black text-cyan-300">{dpsCalculation.baseHit.toLocaleString()} DMG</span>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-950/50 to-slate-950 border border-purple-800/40">
                <span className="text-[11px] text-purple-300 font-semibold block">Maximum Burst Strike</span>
                <span className="text-3xl font-black text-purple-200">{dpsCalculation.ultimateBurst.toLocaleString()} DMG</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Includes Domain + Mastery multipliers</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-emerald-400 block">Sustained DPS</span>
                <span className="text-xl font-black text-emerald-300">{dpsCalculation.dpsPerSecond.toLocaleString()} DMG / sec</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
