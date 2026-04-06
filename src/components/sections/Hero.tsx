'use client';

import { useLang } from '@/contexts/LangContext';

const heroContent = {
  ko: {
    name: '이름',
    title: '브랜딩 기획자, 디자이너, 작가',
    tagline: '브랜드의 언어를 만들고, 그 안에 이야기를 담습니다.',
  },
  en: {
    name: 'Name',
    title: 'Branding Planner, Designer & Writer',
    tagline: 'Crafting the language of brands — one story at a time.',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const content = heroContent[lang];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
          {content.name}
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#888888] dark:text-[#666666] mb-4 tracking-wide">
          {content.title}
        </p>
        <p className="font-sans text-base md:text-lg text-[#888888] dark:text-[#666666] max-w-xl mx-auto leading-relaxed">
          {content.tagline}
        </p>
      </div>
    </section>
  );
}
