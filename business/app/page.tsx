import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row bg-white overflow-y-auto md:overflow-hidden">
      
      {/* Text Section */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-10 md:py-14">
        <h1 className="text-5xl md:text-7xl font-sans text-black font-bold">
          Jane's Services
        </h1>
        <p className="text-xl md:text-2xl mt-6 md:mt-10 text-black leading-relaxed">
          Welcome to Jane's Service business website. This website is used by Jane to generate automated (n8n) emails to anyone who purchases an order or who wish to contact her. The orders are stored in a database (pocketbase) that Jane can access. When the customer orders a service, the customer gets to choose a date for a meeting to discuss the price, which works with Jane's schedule (Calendly).
        </p>

        <div className="flex items-center mt-8 md:mt-10 gap-5">
          <Link 
            href="/authentication?redirect=/services" 
            className="text-white bg-black font-sans text-md px-6 py-3 border border-white/20 rounded-md transition-all duration-300 hover:scale-[1.02] text-center"
          >
            Buy from this sample business
          </Link>
        </div>
      </div>

      {/* Image Section - Hidden on small screens (hidden), visible on md and up (md:flex) */}
      <div className="hidden md:flex flex-1 bg-gray-50 items-center justify-center border-l border-gray-100 relative">
         <Image
               src="/flower.png"
               alt="Main logo"
               width={600}   
               height={600} // Adjusted height for better aspect ratio handling  
               priority
               className="object-contain"
             />
      </div>
    </main>
  );
}