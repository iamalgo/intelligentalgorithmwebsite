export async function onRequestGet(context) {
    // Cloudflare Pages Functions environment variables are in context.env
    const { TELNYX_API_KEY, TELNYX_SECRET } = context.env;

    if (!TELNYX_API_KEY) {
        return new Response(JSON.stringify({ error: 'Server configuration error: Missing API Key' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Use the secret if provided (for On-Demand tokens), otherwise use API key
    // The SDK usually does this: POST https://api.telnyx.com/v2/start_client_tokens
    // But wait, the previous code used `telnyx.clients.tokens.generate`.
    // Let's verify the endpoint for creating a client token.
    // According to Telnyx docs, creating a client token is often:
    // POST https://api.telnyx.com/v2/telephony_credentials/{id}/token
    // OR for on-demand credentials: POST https://api.telnyx.com/v2/telephony_credentials

    // Re-reading the previous Node code:
    // await telnyx.clients.tokens.generate({ client_token_secret_key: ... })

    // This maps to: POST https://api.telnyx.com/v2/client_resource_tokens
    // Body: { client_token_secret_key: "..." }

    try {
        const response = await fetch('https://api.telnyx.com/v2/client_resource_tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TELNYX_API_KEY}`
            },
            body: JSON.stringify({
                client_token_secret_key: TELNYX_SECRET
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Telnyx API Error:', errorText);
            return new Response(JSON.stringify({ error: 'Failed to generate token', details: errorText }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const data = await response.json();
        // Structure check: data.data.client_token?
        // The previous code expected: response.data.client_token

        // Cloudflare Response
        return new Response(JSON.stringify({ client_token: data.data.client_token }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
