"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, ReactNode } from "react";
import RatioRepresentation from "@/components/Overview/RatioRepresentation";
import ECommerce from "@/components/Overview/Overview";

export default function Home() {
  return (
    <DefaultLayout>
      <ECommerce/>    
    </DefaultLayout>
  );
}