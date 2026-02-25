"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../components/ModeToggle"; // Ensure the path matches where you saved it

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Fixes the Hydration Mismatch error
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `access_token=${data.access_token}; path=/; samesite=strict;`;
        router.push("/dashboard");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Prevent rendering until the theme is loaded on the client
  if (!mounted) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FBFBFA] dark:bg-[#191919] transition-colors duration-300">
      <div className="w-full max-w-sm p-6 bg-white dark:bg-[#202020] border dark:border-[#333] rounded shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Log in</h1>
          <ModeToggle />
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full p-2 border rounded outline-none bg-transparent border-gray-300 dark:border-[#333] text-gray-900 dark:text-gray-100 focus:border-black dark:focus:border-gray-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 border rounded outline-none bg-transparent border-gray-300 dark:border-[#333] text-gray-900 dark:text-gray-100 focus:border-black dark:focus:border-gray-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black dark:bg-gray-100 dark:text-black text-white p-2 rounded font-medium hover:opacity-90 transition-opacity">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}