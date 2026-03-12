import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col md:flex-row overflow-hidden bg-white">
  
  <div className="flex flex-1 flex-col justify-center px-10 py-14">
    <h1 className="text-7xl font-sans text-black font-bold">Jane's Services</h1>
    <p className="text-2xl mt-10 text-black leading-relaxed">
      Welcome to Jane's Service business website. This website is used by Jane to generate automated (n8n) emails to anyone who purchases an order or who wish to contact her. The orders are stored in a database (pocketbase) that Jane can access. When the customer orders a service, the customer gets to choose a date for a meeting to discuss the price, which works with Jane's schedule.(calendy)
    </p>

    <div className="flex items-center mt-10 gap-5">
      <Link 
        href="/authentication?redirect=/services" 
        className="text-white bg-black font-sans text-md p-2 border border-white/20 rounded-md transition-all duration-300 hover:scale-[1.02]"
      >
        Buy from this sample business
      </Link>
    </div>
  </div>

  
  <div className="flex flex-1 bg-gray-50 items-center justify-center border-l border-gray-100">
     
     <Image
           src="/flower.png"
           alt="Main logo"
           width={600}   
           height={50}   
           priority
           className="object-contain absolute top-15"
         />
  </div>
</main>
    
  );
}
