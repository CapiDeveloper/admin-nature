'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useUIStore } from "../store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const addUser = useUIStore((state) => state.addUser)
  const router = useRouter();

  useEffect(() => {
    const sesionLocalStorage = JSON.parse(localStorage.getItem("sesion"));
    
    if( sesionLocalStorage == null ){
      router.push('login');
      return;    
    }
    
    addUser(sesionLocalStorage);
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
