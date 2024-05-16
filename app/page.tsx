"use client";

import Image from "next/image";
import { NavBar } from "@/headers/NavBar";
import { useState } from "react";

export default function Home() {
  const [currentLink, setCurrentLink] = useState("#1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main>
      <NavBar />
    </main>
  );
}
