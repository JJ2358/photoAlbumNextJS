import { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";

import { Arvo } from "next/font/google";
const arvo = Arvo({weight: "400", subsets: ['latin']});

export default function Layout({children}:PropsWithChildren) {

    const router:NextRouter = useRouter();

    return (
        <div className="min-h-screen overflow-y bg-[#035074] text-white p-6">
            <header className="col-span-2 opacity-50 pb-4">
                <div className={`${arvo.className} font-bold text-5xl ${router.pathname != "/about" ? "hover:opacity-50" : ""} w-fit`}><Link href="/about">Portfolio Sampler</Link></div>
                <div className="text-xs tracking-widest mt-1">Web App implemented with Next.js</div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}