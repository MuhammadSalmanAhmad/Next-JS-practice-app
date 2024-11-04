import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">

      <p className="text-red-600">THIS IS MY PROJECT DOCUEMNTING MY JOURNEY OF LEARNING NEXT JS THE ULTIMATE REACT FULL STACK PRODCUTION BUILT FRAMEWORK</p>

      <button className="bg-slate-600 text-white">
        
        <Link href="/blog">My blogs</Link>
      </button>
    
    </div>
  );
}
