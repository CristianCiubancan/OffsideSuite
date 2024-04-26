// app/page.404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen bg-red-700 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl mb-4">Oops! Page not found.</h2>
        <p className="text-lg">
          We can't seem to find the page you're looking for.
        </p>
        <p>
          It might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-yellow-300 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
