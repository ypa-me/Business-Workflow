import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-full min-w-full flex-col justify-center pt-14 overflow-hidden bg-white">
      <div className="absolute  w-225 h-25 top-50 ">
        <h1 className="text-7xl font-sans text-black">Welcome to this sample business website</h1>
        <p className=" text-4xl mt-5 text-black">This is a sample business website built with Next.js and Tailwind CSS. It makes use of n8n to automate workflows and PocketBase to store data and for secure authentication.</p>
      </div>
      
      
    

    </main>
    
  );
}
