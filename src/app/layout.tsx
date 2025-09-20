import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center">
        <nav className="w-full mx-auto text-3xl pt-5 pb-2 px-12 py-12 flex justify-between items-center bg-black text-white">
          <div>
            <Link href={"/"} className="text-amber-600 hover:text-amber-400">
              Blog
            </Link>
          </div>

          <div className="w-1/5 flex justify-evenly items-center">
            <Link href={'/about'} className="hover:text-gray-400">About</Link>
            <Link href={'/contact'} className="hover:text-gray-400">Contact</Link>
          </div>
        </nav>
        <main className="px-12 py-12">
          {children}
        </main>
        <footer className="bg-black text-white w-full p-5 flex items-center justify-center">
          &copy; OWNED BY <span className="text-amber-600"> VINNER</span>
        </footer>
      </body>
    </html>
  );
}
