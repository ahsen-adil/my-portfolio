import type { Metadata } from "next";
import logo from "../../logoimage.jpg"
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ahsen portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        
      <header className="text-black body-font" data-aos="fade-down" data-aos-duration="3000">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
    <div className="avatar w-[50px]">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 hover:animate-spin">
    <Image src={logo} alt="logo" className="hover:scale-150 duration-700"></Image>
  </div>
</div>
      <h1 className="ml-3 text-4xl animate-bounce"><span className="text-red-500 font-serif font-bold">P</span>ortfolio</h1>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-2xl gap-5 font-bold font-serif">
      <Link href="/"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">Home</p></Link>
      <Link href="/about"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">About</p></Link>
      <Link href="skills"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">Skills</p></Link>
      <Link href="project"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">projects</p></Link>
      <Link href="services"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">services</p></Link>
      <Link href="contect"><p className="mr-5 hover:text-red-500 transition duration-400 hover:underline lg:text-2xl">Contact</p></Link>
    </nav>
  </div>
</header>
        {children}
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" async></script>
<df-messenger
  chat-icon="https:&#x2F;&#x2F;upload.wikimedia.org&#x2F;wikipedia&#x2F;commons&#x2F;0&#x2F;04&#x2F;ChatGPT_logo.svg"
  intent="WELCOME"
  chat-title="portfolio"
  agent-id="d1bfb459-8876-4ff7-9124-722a9fdcb880"
  language-code="en"    
></df-messenger>
         </body>
    </html>
  );
}
