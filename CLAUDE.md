# Portfolio Project

## 프로젝트 소개
브랜딩 기획자, 디자이너, 작가로 활동하는 1인의 포트폴리오 랜딩 페이지.
작업물과 정체성을 미니멀하게 보여주는 것이 목표다.

## 기술 스택
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- 배포: Vercel

## 디자인 원칙
- 미니멀: 불필요한 요소 제거, 여백 중심
- 흑백 베이스 + 포인트 컬러 1가지
- 텍스트와 이미지로만 구성
- 자세한 기준은 `.claude/rules/design.md` 참고

## 에이전트 팀

| 에이전트 | 파일 | 역할 |
|--------|------|------|
| PM | `.claude/agents/pm.md` | 요구사항 분석, 섹션 구조 정의, 태스크 분배 |
| Designer | `.claude/agents/designer.md` | 레이아웃 설계, 컴포넌트 디자인 |
| Developer | `.claude/agents/developer.md` | Next.js + Tailwind 코드 구현 |
| QA | `.claude/agents/qa.md` | 반응형, 접근성, 코드 품질 검증 |

## 작업 흐름
1. PM이 요구사항을 섹션과 태스크로 분해
2. Designer가 섹션별 레이아웃 설계
3. Developer가 코드 구현
4. QA가 검증 후 피드백
5. 사용자 확인 → 수정 반복

## 규칙
- 모든 에이전트는 작업 전 `.claude/rules/` 폴더를 먼저 읽는다
- 사용자 승인 없이 다음 단계로 넘어가지 않는다
- 컴포넌트는 섹션 단위로 분리한다
- 이미지는 `public/images/` 에 저장한다
- 텍스트 콘텐츠는 별도 파일로 분리하지 않고 컴포넌트 안에 작성한다
