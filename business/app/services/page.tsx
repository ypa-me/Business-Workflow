'use client';

import { useState } from "react";
import pb from "@/lib/pocketbase";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function exportEmails() {
        setLoading(true);
        try {
            const res = await fetch("/api/export-emails", { method: "POST" });
            const data = await res.json();
            setStatus(`Exported ${data.count} emails!`);
        } catch (err) {
            setStatus("Failed to export");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center flex-col gap-15 font-sans text-black">
            <div className="min-h-screen flex items-center justify-center flex-col gap-15 font-sans text-black"  >
                
                <p className="text-4xl mt-5 text-black">We wivwernuijpbertquiverioqbqervuigvqeriolons.</p>
                
                <button
                    className=" text-white bg-black right-0 top-0 font-mono text-xs w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-gray hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-gray/20"
                    onClick={exportEmails}
                    disabled={loading}
                >
                    {loading ? "Exporting..." : "Send mail"}
                </button>
                {status && <p className="mt-4 text-black">{status}</p>}
            </div>
        </main>
    );
}