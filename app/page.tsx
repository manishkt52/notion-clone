import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBFBFA] px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Your wiki, docs, & projects. Together.</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Notion Clone is the connected workspace where better, faster work happens.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800"
        >
          Get Notion Clone Free
        </Link>
        <Link 
          href="/login" 
          className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}