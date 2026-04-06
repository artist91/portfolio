'use client';

import { useTheme } from 'next-themes';
import { useLang } from '@/contexts/LangContext';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  const isDark = theme === 'dark';

  const themeLabel = lang === 'ko'
    ? (isDark ? '라이트' : '다크')
    : (isDark ? 'Light' : 'Dark');

  const otherLang: 'ko' | 'en' = lang === 'ko' ? 'en' : 'ko';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-[#E0E0E0] dark:border-[#2A2A2A]">
      <div className="mx-auto max-w-4xl px-6 md:px-8 flex items-center justify-between h-14">
        <span className="font-serif text-base font-semibold tracking-tight">
          {lang === 'ko' ? '포트폴리오' : 'Portfolio'}
        </span>

        <div className="flex items-center gap-4 font-sans text-sm">
          <button
            onClick={() => setLang(otherLang)}
            className="text-[#888888] dark:text-[#666666] hover:text-[#F37021] transition-colors duration-200 uppercase tracking-wide"
            aria-label="Toggle language"
          >
            {otherLang === 'en' ? 'EN' : 'KO'}
          </button>

          <span className="text-[#E0E0E0] dark:text-[#2A2A2A]">|</span>

          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="text-[#888888] dark:text-[#666666] hover:text-[#F37021] transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {themeLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}
