# Code Rules

## 기술 스택
- Next.js 14+ (App Router)
- Tailwind CSS v3
- TypeScript 사용

## 폴더 구조
```
src/
├── app/
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 메인 랜딩 페이지
│   └── globals.css      # 전역 스타일
└── components/
    ├── sections/        # 페이지 섹션 단위 컴포넌트
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Work.tsx
    │   └── Contact.tsx
    └── ui/              # 재사용 가능한 작은 컴포넌트
public/
└── images/              # 모든 이미지 파일
```

## 컴포넌트 규칙
- 섹션은 반드시 `components/sections/` 안에 분리
- 컴포넌트 파일명은 PascalCase
- 하나의 컴포넌트는 하나의 역할만
- props는 TypeScript interface로 정의

## Tailwind 규칙
- 인라인 스타일(`style={{}}`) 사용 금지, Tailwind 클래스만 사용
- 커스텀 컬러는 `tailwind.config.ts`에 정의
- 반응형은 모바일 퍼스트 (sm → md → lg 순서)

## 네이밍
- 컴포넌트: PascalCase (Hero, WorkGrid)
- 함수/변수: camelCase (handleClick, imageList)
- CSS 클래스: Tailwind 유틸리티만 사용

## 금지 사항
- `useEffect` 남용 금지 — 데이터 패칭은 Server Component에서
- `any` 타입 사용 금지
- 인라인 스타일 금지
