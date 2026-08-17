import React from 'react';
import Link from 'next/link';
import { Flame, ShieldAlert, Sparkles, Trophy, BookOpen } from 'lucide-react';
import MatrixNav from './MatrixNav';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0d14]/90 backdrop-blur-md border-b border-purple-900/40">
      <MatrixNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0d14] rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-wider flex items-center gap-1.5">
                JUJUTSU INFINITE <span className="text-xs px-2 py-0.5 bg-purple-900/60 text-purple-300 rounded-full border border-purple-700/50">WIKI</span>
              </span>
              <p className="text-[10px] text-gray-400 tracking-tight">August 2026 Update 1 Database</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium">
            <Link
              href="/codes"
              className="px-3 py-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 flex items-center space-x-1.5 transition-colors"
            >
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span>Codes</span>
            </Link>
            <Link
              href="/tier-list"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-900/40 flex items-center space-x-1.5 transition-colors"
            >
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Tier List</span>
            </Link>
            <Link
              href="/beginner-guide"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-900/40 flex items-center space-x-1.5 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Guides</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
