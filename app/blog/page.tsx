"use client";

import { useState } from "react";
import Nav from "../../components/nav";

export default function Page() {
  const darkMode = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Nav />
          <h1 className="text-2xl py-2 md:text-3xl lg:text-4xl dark:text-white">Blog</h1>
        </section>
      </main>
    </div>
  );
}
