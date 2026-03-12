import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const ppmori = localFont({
  src: '../public/fonts/PPMori/PPMori-SemiBold.otf',  
  variable: '--font-ppmori',
  weight: '300',
});

const jetbrains = localFont({
  src: '../public/fonts/JetBrainsMono/JetBrainsMono-Light.ttf',
  variable: '--font-jetbrains',
  weight: '300',
});
const Libre = localFont({
  src: '../public/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf',
  variable: '--font-Libre',
  weight: '300',
});



export const metadata: Metadata = {
  title: "Jane's Services",
  description: "Website for Jane's Service Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppmori.variable} ${jetbrains.variable} ${Libre.variable}  `}>
      <body>
        <header className="fixed left-0 w-full h-12 flex items-center bg-black  z-50">
  <div className=" absolute left-0">
    <Image
      src="/Black Outline Light.png"
      alt="Main logo"
      width={120}   
      height={32}   
      priority
      className="object-contain"
    />
  </div>
  <div>
    <Link href="/authentication?redirect=/contact" className=" absolute  bg-white text-black right-0 top-0   w-auto h-auto text-center p-2 border border-black font-sans text-sm px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300"
    >
        Contact us
      </Link>
  </div>
</header>
        
        
        <main className ="flex-1 ">{children}</main>
        <footer className=" align-left   dark:border-zinc-700 bg-black ">
          
        
      </footer>
        
      </body>
    </html>
  );
}
