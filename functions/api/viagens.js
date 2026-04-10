import { neon } from '@neondatabase/serverless';

export async function onRequest(context) {
    const sql = neon(context.env.DATABASE_URL);
    const method = context.request.method;

    if (method === 'GET') {
        const viagens = await sql`SELECT * FROM viagens ORDER BY start_date ASC`;
        return new Response(JSON.stringify(viagens), { headers: { 'Content-Type': 'application/json' } });
    }

    if (method === 'POST') {
        const body = await context.request.json();
        const { names, startDate, endDate, whatsapp, instagram } = body;
        await sql`INSERT INTO viagens (names, start_date, end_date, whatsapp, instagram) 
                  VALUES (${names}, ${startDate}, ${endDate}, ${whatsapp}, ${instagram})`;
        return new Response(JSON.stringify({ success: true }));
    }

    // NOVO: Método para Atualizar/Editar (Qualquer usuário)
    if (method === 'PUT') {
        const body = await context.request.json();
        const { id, names, startDate, endDate, whatsapp, instagram } = body;

        if (!id) return new Response('ID ausente', { status: 400 });

        await sql`
            UPDATE viagens 
            SET names = ${names}, start_date = ${startDate}, end_date = ${endDate}, whatsapp = ${whatsapp}, instagram = ${instagram}
            WHERE id = ${id}
        `;
        return new Response(JSON.stringify({ success: true }));
    }

    // Método para deletar
    if (method === 'DELETE') {
        const { searchParams } = new URL(context.request.url);
        const id = searchParams.get('id');
        if (!id) return new Response('ID ausente', { status: 400 });
        
        await sql`DELETE FROM viagens WHERE id = ${id}`;
        return new Response(JSON.stringify({ success: true }));
    }

    return new Response('Método não permitido', { status: 405 });
}