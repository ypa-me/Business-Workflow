// app/api/export-emails/route.ts
import pb from "@/lib/pocketbase";

export async function POST(req: Request) {
    try {
        const { email } = await req.json()
        
        

        await pb.collection('_superusers').authWithPassword(
            process.env.PB_SUPERUSER_EMAIL!,
            process.env.PB_SUPERUSER_PASSWORD!      
        );

        const n8nRes = await fetch(process.env.N8N_WEBHOOK_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        console.log("n8n status:", n8nRes.status);
        console.log("emails sent:", email);

        return Response.json({ ok: true });

    } catch (err) {
        console.error("EXPORT ERROR:", err); 
        return Response.json({ ok: false, error: String(err) }, { status: 500 });
    }
}