import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="text-center px-10 pt-10">
        <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl lg:text-8xl">
          Henry Migo
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl dark:text-white">
          Developer.
        </h3>
        <p className="ext-md py-5 leading-8 text-gray-800 md:text-xl lg:text-2xl max-w-2xl mx-auto dark:text-white">
          I am dedicated, hard working, adaptable and always keen on learning
          new things.
        </p>
      </div>
      <div className="text-center px-10 pb-10">
        <button
          type="button"
          className="text-gray-600 border-grey-600 focus:ring-4 focus:outline-none focus:ring-gray-600 
                           font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 border-2 border-gray-600
                           dark:border-white dark:text-white dark:hover:text-white dark:focus:ring-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
        <a href="https://github.com/HenryMigo" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/henry-migo"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://www.twitch.tv/hmigo" target="_blank" rel="noreferrer">
          <FaTwitch />
        </a>
      </div>
    </div>
  );
}
