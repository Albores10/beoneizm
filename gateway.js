import { streamText } from 'ai';
import 'dotenv/config';

// Bu scripti çalıştırmak için önce .env dosyasına AI_GATEWAY_API_KEY ekleyin.
// Çalıştırma komutu: node gateway.js

async function main() {
    if (!process.env.AI_GATEWAY_API_KEY || process.env.AI_GATEWAY_API_KEY.includes('BURAYA')) {
        console.error("HATA: Lütfen önce .env dosyasına geçerli bir API Key yapıştırın!");
        return;
    }

    console.log("AI Gateway'e bağlanılıyor...");

    try {
        const result = streamText({
            model: 'openai/gpt-4.1', // Vercel AI Gateway üzerinden
            prompt: 'İzmir için fütüristik bir tatil icat et ve geleneklerini anlat (Türkçe).',
        });

        console.log("Cevap alınıyor:\n");

        for await (const textPart of result.textStream) {
            process.stdout.write(textPart);
        }

        console.log("\n\n--------------------------------");
        console.log('Token kullanımı:', await result.usage);
        console.log('Bitiş nedeni:', await result.finishReason);
    } catch (error) {
        console.error("Bağlantı Hatası:", error);
    }
}

main().catch(console.error);
