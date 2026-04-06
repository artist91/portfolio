# Design Rules

## 핵심 원칙
- 미니멀: 필요한 요소만 남긴다
- 여백이 디자인의 일부다 — 충분한 padding/margin 확보
- 텍스트와 이미지만으로 구성, 불필요한 장식 요소 금지

## 컬러
### 라이트 모드
- Background: #FFFFFF
- Foreground: #0A0A0A
- Muted: #F5F5F5, #E0E0E0, #888888

### 다크 모드
- Background: #0A0A0A
- Foreground: #F5F5F5
- Muted: #1A1A1A, #2A2A2A, #666666

### 공통
- Point: 1가지만 허용 (프로젝트 초반에 사용자와 결정)
- 다크/라이트 전환은 `next-themes` 사용
- Tailwind `dark:` 접두사로 다크 모드 스타일 적용

## 타이포그래피
- 제목(Heading): 세리프 — Playfair Display 또는 Georgia
- 본문(Body): 산세리프 — Pretendard
- Pretendard 로드: `@font-face` 또는 CDN (`cdn.jsdelivr.net/gh/orioncactus/pretendard`)
- 최소 폰트 사이즈: 14px (모바일 기준)
- 줄간격(line-height): 본문 1.7 이상

## 레이아웃
- 최대 콘텐츠 너비: max-w-4xl (896px)
- 섹션 간격: py-24 이상
- 좌우 여백: px-6 (모바일), px-8 (데스크탑)
- 그리드: 이미지 갤러리는 2열 또는 3열만 허용

## 이미지
- 비율: 4:3 또는 1:1 권장
- 흑백 필터 적용 가능, 컬러 이미지도 허용
- 이미지에 그림자, 테두리, 둥근 모서리 금지 (flat하게 유지)

## 금지 사항
- 그라디언트 배경 금지
- 애니메이션은 subtle한 fade-in만 허용
- 아이콘 라이브러리 사용 금지 (텍스트로 대체)
- 카드 UI에 shadow 금지
