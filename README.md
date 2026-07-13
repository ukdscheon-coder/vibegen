# ⚡ VibeGen

**Build any web app from one sentence.** BYOK (bring your own Claude API key), no subscriptions, no lock-in — download the HTML and own it forever.

🌐 **Live:** [vibegen.dev](https://vibegen.dev)

---

## What is VibeGen?

VibeGen turns a plain-English prompt into a complete, working web app — instantly. You bring your own Claude API key (sent directly to Anthropic, never stored), describe what you want, and get a single self-contained HTML file you can download and run anywhere.

No account required. No monthly fee. No vendor lock-in.

## How it works

1. Enter your [Claude API key](https://console.anthropic.com/) (stays in your browser only)
2. Describe your app in one sentence
3. VibeGen generates a complete, working HTML app
4. Preview it live, then download and own it forever

## Features

| Feature | Free | Pro ($9/mo) |
|---|---|---|
| Unlimited app generation | ✅ | ✅ |
| Single-file HTML output | ✅ | ✅ |
| Download & own forever | ✅ | ✅ |
| BYOK (your API key) | ✅ | ✅ |
| Priority support | — | ✅ |
| Early access to new features | — | ✅ |

## Why BYOK?

Most AI app builders lock you into their platform and charge per generation. VibeGen uses your own Anthropic API key — you pay Anthropic directly (typically fractions of a cent per app), and we never see or store your key.

## Tech stack

- **Frontend:** Vanilla HTML + Tailwind CSS
- **AI:** Claude API (Anthropic) via BYOK
- **Hosting:** Cloudflare Pages
- **Payments:** Stripe

## Deploy your own

```bash
# Clone the repo
git clone https://github.com/ukdscheon-coder/vibegen.git
cd vibegen

# Deploy to Cloudflare Pages
npx wrangler pages deploy .
```

That's it. One HTML file, one command.

## Support

- ⚡ [Go Pro · $9/mo](https://buy.stripe.com/28EdRa0jp2AF7G82S71sQ00) — support development + get early access
- ☕ [Ko-fi](https://ko-fi.com/vibegen) — one-time donation

## License

MIT — free to use, fork, and modify.
