import { neon } from '@neondatabase/serverless';

export async function onRequest(context) {
    // Conecta no Neon usando a senha que colocaremos nas configurações do Cloudflare
    const sql = neon(context.env.DATABASE_URL);

    // Se a página pedir os dados (GET)
    if (context.request.method === 'GET') {
        const viagens = await sql`SELECT * FROM viagens ORDER BY start_date ASC`;
        return new Response(JSON.stringify(viagens), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Se o formulário enviar um novo viajante (POST)
    if (context.request.method === 'POST') {
        const body = await context.request.json();
        const { names, startDate, endDate, whatsapp, instagram } = body;
        
        await sql`
            INSERT INTO viagens (names, start_date, end_date, whatsapp, instagram) 
            VALUES (${names}, ${startDate}, ${endDate}, ${whatsapp}, ${instagram})
        `;
        return new Response(JSON.stringify({ success: true }));
    }

    return new Response('Método não permitido', { status: 405 });
}
