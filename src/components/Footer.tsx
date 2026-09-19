import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#07080d] border-t border-purple-900/30 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-base mb-2">Jujutsu Infinite Wiki</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your premier community hub for Roblox Jujutsu Infinite codes, Innate Technique tier rankings, Domain Expansion updates, and gameplay walkthroughs.
            </p>
          </div>
          <div>
            <h4 className="text-purple-300 font-semibold text-sm mb-2">Quick Navigation</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/codes" className="hover:text-purple-400 transition-colors">Active Codes </Link></li>
              <li><Link href="/tier-list" className="hover:text-purple-400 transition-colors">Innate Technique Tier List</Link></li>
              <li><Link href="/beginner-guide" className="hover:text-purple-400 transition-colors">Beginner Leveling Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-300 font-semibold text-sm mb-2">Community Disclaimer</h4>
            <p className="text-xs text-gray-400">
              Unofficial fan-made wiki created for Roblox Jujutsu Infinite players. All game assets belong to their respective creators.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Jujutsu Infinite Wiki. Not affiliated with Roblox Corporation or Gege Akutami.</p>
          <p className="mt-2 sm:mt-0">Codes verified at each game update</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
