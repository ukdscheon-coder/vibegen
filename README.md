# VibeGen

Build a web app using your own Claude API account, preview generated HTML, and download the code.

## Current access and costs

The builder requires no VibeGen subscription. Anthropic charges API usage separately, including iterations and debugging. Pro checkout is temporarily unavailable because the previously linked payment page did not match the advertised subscription or feature entitlement.

## API key handling

The browser stores the key in localStorage. Generation sends it over HTTPS to this site's /api/generate proxy, which forwards it to Anthropic. The proxy does not intentionally persist the key. Generated previews use an opaque-origin sandbox and cannot access the parent's storage. Download storage-dependent generated apps to run them separately.

## Deployment

Existing Cloudflare Pages project: vibegen. Run the existing Pages deployment workflow; preserve existing environment variables. Never place secret API keys in the public site.

## Restore paid checkout

Before restoring Pro purchase buttons, verify the actual recurring price, product description, cancellation/support process, and server-side paid access using a test transaction. A payment link alone does not grant hosted AI access.

Support and issue reports: https://github.com/ukdscheon-coder/vibegen/issues
