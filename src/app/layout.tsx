"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  indexedDBLocalPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { FirebaseAppProvider, AuthProvider } from "reactfire";

import configuration from "../../configuration";
import { isBrowser } from "../../lib/generic/isBrowser";

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
  // using the configuration that we defined above
  const app = initializeApp(configuration.firebase);

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  const auth = initializeAuth(app, { persistence });

  return (
    <FirebaseAppProvider firebaseApp={app}>
      <AuthProvider sdk={auth}>
        <html lang="en">
          <body suppressHydrationWarning={true}>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {loading ? <Loader /> : children}
            </div>
          </body>
        </html>
      </AuthProvider>
    </FirebaseAppProvider>
  );
}
