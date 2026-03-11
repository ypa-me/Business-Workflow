'use client';

import { useState } from "react";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/navigation";


export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const services = [
        { id: "service_1", label: "Service 1" },
        { id: "service_2", label: "Service 2" },
        { id: "service_3", label: "Service 3" },
    ];
    const router = useRouter()

    async function handleServiceClick(servicename:string){
        setLoading(true)
        
        try{
            const user = pb.authStore.record

        if (!user) {
                alert("You must be logged in");
                return;
            }

        const order = await pb.collection('Orders').create(
            {
                
                Service_Name: servicename,
                Client_Name: user.email.split('@')[0],
                Client_Email: user.email,
                Price: Math.floor(Math.random() * (9999 - 100 + 1)) + 1000,
                Paid: false,
                Delivery_Date: null,


            }
        );
            router.push(`/schedule?orderId=${order.id}`);

        }
        catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
    }}


    
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center font-sans">
            <p className="text-4xl text-black">Choose your service.</p>
    <div className="mt-10 flex flex-row items-center gap-8">
        
        {services.map((service) => (
            <button
                key={service.id}
                onClick={() => handleServiceClick(service.label)}
                disabled={loading}
                className="text-black bg-white border border-black font-sans text-sm px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300"
            >
                {service.label}
            </button>
        ))}
    </div>
</main>
    );
}