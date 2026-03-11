import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-full min-w-full flex-col justify-center pt-14 overflow-hidden bg-white">
      <div className="absolute  w-225 h-25 top-50 ">
        <h1 className="text-7xl font-sans text-black">Welcome to this sample business website</h1>
        <p className=" text-4xl mt-5 text-black">This is a sample business website built with Next.js and Tailwind CSS. It makes use of n8n to automate workflows and PocketBase to store data and for secure authentication.</p>

        <div className="flex items-cenetr justify-center mt-10 gap-5 flex-row">
          <Link href="/authentication?redirect=/services" className=" text-white bg-black right-0 top-0 font-sans text-md w-auto h-auto text-center p-2 backdrop-blur-0.5 border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-md overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:bg-gray hover:border-white/30 hover:backdrop-blur-xl hover:shadow-2xl hover:shadow-gray/20">
            Buy from this sample business
          </Link>
          
        </div>
      </div>
      
      
    

    </main>
    
  );
}
