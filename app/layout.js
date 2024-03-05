'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useUIStore } from "../store";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const addUser = useUIStore((state) => state.addUser)

  useEffect(() => {
    const sesionLocalStorage = JSON.parse(localStorage.getItem("sesion"));
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
