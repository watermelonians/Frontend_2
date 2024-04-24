"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Overview from "@/components/RatioRepresentation/Overview";
import React, { useState, ReactNode } from "react";

export default function Home() {
  return (
    <DefaultLayout>
      <Overview/>    
    </DefaultLayout>
  );
}