import { PropsWithChildren, ReactNode } from "react";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";

export default function Layout({ children }: PropsWithChildren<ReactNode>) {
    const router: NextRouter = useRouter();

    return (
        <div className="min-h-screen overflow-y bg-[#035074] text-white p-6">
            <header className="col-span-2 opacity-50 pb-4">
                <div className={`font-bold text-5xl ${router.pathname !== "/" ? "hover:opacity-50" : ""} w-fit`}>
                    <Link href="/">Photo Album</Link>
                </div>
                <div className="text-xs tracking-widest mt-1">Web App implemented with Next.js</div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
