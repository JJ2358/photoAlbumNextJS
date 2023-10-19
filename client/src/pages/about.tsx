import Link from "next/link";

export default function About() {
    return(
        <div className="max-w-[800px] pb-3">
            <div>This web application is developed with NextJS and implements a Web API (PHP / MySQL). It is completely static site generated which makes it super fast loading and SEO friendly.</div>
            <div className="mt-2 text-xs">Developed by James McDonald</div>
            <div className="text-xs">Nova Scotia Community College</div>
            <Link href="/"><input className="bg-white hover:opacity-50 text-[#035074] py-1 px-2 mt-3 rounded" type="button" value="Back" /></Link>
        </div>    
    );
}