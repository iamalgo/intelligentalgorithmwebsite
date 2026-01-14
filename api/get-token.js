import Telnyx from 'telnyx';

const telnyx = Telnyx(process.env.TELNYX_API_KEY);

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Generate the client token using the secret key
        const response = await telnyx.clients.tokens.generate({
            client_token_secret_key: process.env.TELNYX_SECRET
        });

        // Check if response has data and client_token
        if (response && response.data && response.data.client_token) {
            return res.status(200).json({ client_token: response.data.client_token });
        } else {
            console.error('Unexpected response from Telnyx:', response);
            return res.status(500).json({ error: 'Unexpected response from Telnyx' });
        }
    } catch (error) {
        console.error('Error generating Telnyx client token:', error);
        return res.status(500).json({ error: 'Failed to generate token', details: error.message });
    }
}
