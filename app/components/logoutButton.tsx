"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Delete the cookie by setting an expiration date in the past
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    
    // 2. Send the user back to the login page
    router.push("/login");
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-red-500 hover:bg-red-50 p-2 rounded text-sm w-full text-left"
    >
      Logout
    </button>
  );
}