'use client';

import { useLang } from '@/contexts/LangContext';

const contactContent = {
  ko: {
    label: 'Contact',
    headline: '함께 만들어갈 이야기가 있다면 언제든 연락 주세요.',
    instagram: '인스타그램',
    naverBlog: '네이버 블로그',
    copyright: '© 2024 이름. All rights reserved.',
  },
  en: {
    label: 'Contact',
    headline: 'If you have a story to build together, reach out anytime.',
    instagram: 'Instagram',
    naverBlog: 'Naver Blog',
    copyright: '© 2024 Name. All rights reserved.',
  },
};

const links = {
  instagram: 'https://instagram.com',
  naverBlog: 'https://blog.naver.com',
};

export default function Contact() {
  const { lang } = useLang();
  const content = contactContent[lang];

  return (
    <section className="py-24 md:py-32 border-t border-[#E0E0E0] dark:border-[#2A2A2A]">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <span className="font-serif text-sm uppercase tracking-widest text-[#888888] dark:text-[#666666]">
              {content.label}
            </span>
          </div>

          <div className="md:w-2/3">
            <p className="font-serif text-2xl md:text-3xl font-semibold leading-snug mb-10">
              {content.headline}
            </p>

            <div className="flex flex-col gap-3 mb-16">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base text-[#888888] dark:text-[#666666] hover:text-[#F37021] transition-colors duration-200 w-fit"
              >
                {content.instagram}
              </a>
              <a
                href={links.naverBlog}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base text-[#888888] dark:text-[#666666] hover:text-[#F37021] transition-colors duration-200 w-fit"
              >
                {content.naverBlog}
              </a>
            </div>

            <p className="font-sans text-xs text-[#888888] dark:text-[#666666]">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
