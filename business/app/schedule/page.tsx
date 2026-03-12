'use client';

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ScheduleForm() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const calendlyUrl = `https://calendly.com/dev-ypa/30min?a1=${orderId}`;

    return (
        <main className="min-h-screen bg-white flex items-center justify-center font-sans">
            <div className="flex flex-col items-center gap-8 w-full">
                <p className="text-4xl text-black">Book a meeting to discuss your service more.</p>
                <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="700px"
                    frameBorder="0"
                />
            </div>
        </main>
    );
}

export default function Schedule() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ScheduleForm />
        </Suspense>
    );
}