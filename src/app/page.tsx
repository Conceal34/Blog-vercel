import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">Welcome to <span className="text-amber-600">Vinner</span>s Blog</h1>
        <ol className="list-disc flex flex-col gap-4">
          <li>
            <Link href={'/blog'} className="hover:text-amber-300 text-md">
              Go to The <span className="underline-offset-4 text-amber-600 hover:text-black">Blogs</span> section
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="hover:text-amber-300 text-md">
              Go to The <span className="underline-offset-4 text-amber-600 hover:text-black">About</span> Page
            </Link>
          </li>
          <li>
            <Link href={'/contact'} className="hover:text-amber-300 text-md">
              Go to The <span className="underline-offset-4 text-amber-600 hover:text-black">Contact</span> Page
            </Link>
          </li>
        </ol>

      </main>
    </div>
  );
}
