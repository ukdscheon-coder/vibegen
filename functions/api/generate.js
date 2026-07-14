/**
 * VibeGen — Cloudflare Pages Function
 * Proxies requests to Anthropic Claude API using the user's own API key.
 * The key is sent per-request and never stored server-side.
 *
 * Superadmin: if apiKey matches env.SUPERADMIN_TOKEN, uses env.ANTHROPIC_API_KEY instead.
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    const { model, apiKey, messages, system } = body;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: { message: 'API key is required' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    if (!messages || !messages.length) {
      return new Response(JSON.stringify({ error: { message: 'Messages are required' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Superadmin: use server-side key if token matches
    const resolvedKey = (env.SUPERADMIN_TOKEN && apiKey === env.SUPERADMIN_TOKEN)
      ? env.ANTHROPIC_API_KEY
      : apiKey;

    if (!resolvedKey) {
      return new Response(JSON.stringify({ error: { message: 'Invalid key' } }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': resolvedKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: model || 'claude-haiku-4-5-20251001',
        max_tokens: 8192,
        system: system,
        messages: messages,
      }),
    });

    // Safely parse — guard against empty/non-JSON responses
    const text = await anthropicRes.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return new Response(JSON.stringify({ error: { message: `Unexpected response from AI (status ${anthropicRes.status}). Try again.` } }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify(data), {
      status: anthropicRes.status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: { message: err.message } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
