import Link from "next/link";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="py-10 mb-12 flex justify-evenly">
            <h1 className="ext-md leading-8 text-gray-800 md:text-xl dark:text-white">
              <Link href="/">Home</Link>
            </h1>
            <h1 className="ext-md leading-8 text-gray-800 md:text-xl dark:text-white">
              <Link href="/blog">Blog</Link>
            </h1>
            <h1 className="text-xl dark:text-white"></h1>
            <ul className="flex items-center select-none">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            </ul>
          </nav>
  );
}