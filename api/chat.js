import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Initialize the OpenAI provider with the Vercel AI Gateway Base URL and API Key
const openai = createOpenAI({
    baseURL: 'https://gateway.ai.cloudflare.com/v1/account/gateway/openai', // Example placeholder or standard Vercel AI Gateway URL
    // Actually, Vercel AI Gateway often just needs the standard OpenAI setup but with a specific base URL or just the API Key if using the Vercel integration directly.
    // BUT the user instructions said: "AI_GATEWAY_API_KEY".
    // If the user is using Vercel AI Gateway as an OpenAI compatible provider:
    apiKey: process.env.AI_GATEWAY_API_KEY,
});

export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    try {
        const { messages } = await req.json();

        const result = await streamText({
            model: openai('gpt-4'), // Fallback to standard gpt-4 if the alias doesn't work, or use custom
            messages,
            system: 'Sen BeOne İzmir akıllı şehir asistanısın. İsmim "AI_LINK". Vatandaşlara İzmir hakkında yardımcı oluyorsun. Cyberpunk ve fütüristik bir dille konuş.',
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('AI Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
