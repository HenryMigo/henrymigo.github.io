"use client";

import { useState } from "react";
import Nav from "../components/nav";
import Home from "./home";

export default function Page() {
  const darkMode = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Nav />
          <Home />
        </section>
      </main>
    </div>
  );
}
