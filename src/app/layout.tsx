"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";

// import "../../config/firebase.config";
import { AuthContextProvider } from "../context/AuthContext";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <AuthContextProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          {pathname === "/" ? (
            <div className="dark:bg-transparent dark:text-bodydark">
              {children}
            </div>
          ) : (
            <DefaultLayout>
              <div className="dark:bg-transparent dark:text-bodydark">
              {children}
            </div>
            </DefaultLayout>
          )}
        </body>
      </html>
    </AuthContextProvider>
  );
}
