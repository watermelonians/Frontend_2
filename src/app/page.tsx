"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, ReactNode } from "react";
import Overview from "./Overview/Overview";

export default function Home() {
  return (
    <DefaultLayout>
      <Overview/>    
    </DefaultLayout>
  );
}