export default function handler(req, res) {
    // Log the method and body for debugging
    console.log(`[Telnyx Webhook] Method: ${req.method}`);

    if (req.method === 'POST') {
        try {
            const data = req.body;
            console.log('Received payload:', JSON.stringify(data, null, 2));

            // TODO: Add logic here to handle specific event types (e.g., message.received)
            // Example:
            // if (data.data.event_type === 'message.received') { ... }

            // Respond with 200 OK to acknowledge receipt
            return res.status(200).json({ status: 'received' });
        } catch (error) {
            console.error('Error processing webhook:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Handle non-POST requests or verification checks if needed
    return res.status(200).json({ message: 'Telnyx Webhook Endpoint Ready' });
}
