# VibeGen — 오늘 배포하기 (30분)

## 구조 설명

```
vibegen/
├── index.html              ← 전체 UI (랜딩 + 빌더, 빌드 불필요)
├── functions/
│   └── api/
│       └── generate.js     ← Cloudflare Pages Function (Claude API 프록시)
├── _routes.json            ← Cloudflare Pages 라우팅 설정
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml      ← GitHub → Cloudflare 자동 배포
```

---

## Step 1: GitHub 레포 만들기

```bash
cd vibegen
git init
git add .
git commit -m "Initial commit: VibeGen v1.0"

# GitHub에서 새 레포 생성 후:
git remote add origin https://github.com/ukdscheon-coder/vibegen.git
git branch -M main
git push -u origin main
```

---

## Step 2: Cloudflare Pages 연결

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. **Connect to Git** 선택 → GitHub 계정 연결
3. `vibegen` 레포 선택
4. 설정:
   - **Framework preset**: None
   - **Build command**: *(비워두기)*
   - **Build output directory**: `/` (루트)
5. **Save and Deploy** 클릭

→ 약 30초 후 `https://vibegen.dev` 접속 가능!

---

## Step 3: GitHub Actions Secret 설정 (자동 배포)

GitHub 레포 → **Settings → Secrets → Actions** → 다음 두 개 추가:

| Secret 이름 | 값 |
|---|---|
| `CLOUDFLARE_API_TOKEN` | [여기서 생성](https://dash.cloudflare.com/profile/api-tokens) (Cloudflare Pages Edit 권한) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard 우측 사이드바에서 확인 |

이후 `main` 브랜치에 push하면 자동 배포됩니다.

---

## Step 4: 도메인 연결 (선택, 무료)

Cloudflare Pages → **Custom domains** → 원하는 도메인 입력  
(Cloudflare에서 도메인을 관리 중이면 1-클릭으로 연결 가능)

---

## 로컬 개발 테스트

```bash
npm install
npm run dev
# → http://localhost:8788 에서 확인
```

---

## 사용자 흐름

1. 사용자가 사이트 방문
2. **"Start Building Free"** 클릭
3. Claude API 키 입력 (Anthropic Console에서 발급, 브라우저에만 저장)
4. 앱 설명 입력 (한국어 가능)
5. **⚡ Generate App** 클릭
6. 20-40초 후 라이브 미리보기 + 코드 표시
7. **↓ Download HTML** → 단일 HTML 파일 다운로드
8. 어디서든 호스팅 가능 (GitHub Pages, Netlify 등 무료)

---

## Base44 대비 핵심 차별점

| | VibeGen | Base44 |
|---|---|---|
| 가격 | 내 API 키 사용 (종량제) | $16-99/월 + 크레딧 |
| 코드 소유권 | ✅ HTML 파일 다운로드 | ❌ 플랫폼 종속 |
| 계정 필요 | ❌ 없음 | ✅ 필수 |
| 오픈소스 | ✅ MIT | ❌ |
| 배포 | 어디서나 | 자체 플랫폼만 |

---

## index.html 안에서 GitHub 링크 업데이트

배포 전 `index.html`에서 `ukdscheon-coder`을 실제 GitHub 계정명으로 교체:

```
ukdscheon-coder → ds (또는 원하는 이름)
```
