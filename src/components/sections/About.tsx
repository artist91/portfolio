'use client';

import { useLang } from '@/contexts/LangContext';

const aboutContent = {
  ko: {
    label: 'About',
    body: [
      '브랜드의 목소리를 설계하고, 그 안에 사람과 이야기를 담는 일을 합니다.',
      '기획, 디자인, 글쓰기의 경계를 넘나들며 하나의 시각으로 작업합니다.',
      '좋은 브랜드는 일관된 언어를 가진다고 믿습니다. 그 언어를 만드는 것이 제 역할입니다.',
    ],
  },
  en: {
    label: 'About',
    body: [
      'I design the voice of brands and fill them with people and stories.',
      'Moving fluidly between planning, design, and writing — always through a single lens.',
      'I believe great brands speak with a consistent language. Building that language is my work.',
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const content = aboutContent[lang];

  return (
    <section className="py-24 md:py-32 border-t border-[#E0E0E0] dark:border-[#2A2A2A]">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <span className="font-serif text-sm uppercase tracking-widest text-[#888888] dark:text-[#666666]">
              {content.label}
            </span>
          </div>
          <div className="md:w-2/3 space-y-4">
            {content.body.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-base md:text-lg leading-[1.8] text-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
