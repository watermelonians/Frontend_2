"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

// import "../../config/firebase.config";
import { AuthContextProvider } from "../context/AuthContext";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
    // setTimeout(() => setLoading(false), 1000);
  }, []);

  // console.log("pls work");

  // we initialize the firebase app

  return (
    <AuthContextProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <DefaultLayout>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {loading ? <Loader /> : children}
            </div>
          </DefaultLayout>
        </body>
      </html>
    </AuthContextProvider>
  );
}
