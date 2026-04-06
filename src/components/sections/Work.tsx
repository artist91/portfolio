'use client';

import { useLang } from '@/contexts/LangContext';

interface Project {
  number: string;
  ko: {
    title: string;
    category: string;
    description: string;
  };
  en: {
    title: string;
    category: string;
    description: string;
  };
  year: string;
}

const projects: Project[] = [
  {
    number: '01',
    ko: {
      title: '브랜드 아이덴티티 프로젝트',
      category: '브랜딩',
      description: '스타트업의 브랜드 철학과 시각 언어를 처음부터 설계한 작업입니다.',
    },
    en: {
      title: 'Brand Identity Project',
      category: 'Branding',
      description: 'Designed the brand philosophy and visual language of a startup from the ground up.',
    },
    year: '2024',
  },
  {
    number: '02',
    ko: {
      title: '에디토리얼 디자인 시리즈',
      category: '디자인',
      description: '계간 문화 매거진의 레이아웃과 타이포그래피 시스템을 구축했습니다.',
    },
    en: {
      title: 'Editorial Design Series',
      category: 'Design',
      description: 'Built the layout and typography system for a quarterly culture magazine.',
    },
    year: '2023',
  },
  {
    number: '03',
    ko: {
      title: '브랜드 스토리텔링 캠페인',
      category: '글쓰기',
      description: '기업의 역사와 가치를 하나의 내러티브로 재구성한 롱폼 콘텐츠 작업입니다.',
    },
    en: {
      title: 'Brand Storytelling Campaign',
      category: 'Writing',
      description: "Reconstructed a company's history and values into a single long-form narrative.",
    },
    year: '2023',
  },
];

const workLabel = {
  ko: 'Work',
  en: 'Work',
};

export default function Work() {
  const { lang } = useLang();

  return (
    <section className="py-24 md:py-32 border-t border-[#E0E0E0] dark:border-[#2A2A2A]">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-16 mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <span className="font-serif text-sm uppercase tracking-widest text-[#888888] dark:text-[#666666]">
              {workLabel[lang]}
            </span>
          </div>
          <div className="md:w-2/3" />
        </div>

        <div className="divide-y divide-[#E0E0E0] dark:divide-[#2A2A2A]">
          {projects.map((project) => {
            const content = project[lang];
            return (
              <div key={project.number} className="py-8 md:py-10 flex flex-col md:flex-row md:items-start md:gap-16">
                <div className="md:w-1/3 flex items-start gap-4 mb-4 md:mb-0">
                  <span className="font-serif text-sm text-[#888888] dark:text-[#666666] tabular-nums mt-0.5">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug mb-1">
                      {content.title}
                    </h3>
                    <span className="font-sans text-xs uppercase tracking-widest text-[#888888] dark:text-[#666666]">
                      {content.category}
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <p className="font-sans text-base leading-[1.7] text-[#888888] dark:text-[#666666] max-w-md">
                    {content.description}
                  </p>
                  <span className="font-sans text-sm text-[#888888] dark:text-[#666666] shrink-0 tabular-nums">
                    {project.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
