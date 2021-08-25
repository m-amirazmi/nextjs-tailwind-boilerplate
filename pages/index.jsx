import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className={`${isDark && "dark"} h-screen w-screen`}>
        <div className="h-full w-full bg-gradient-to-r from-green-300 to-blue-500 flex flex-col justify-center items-center dark:from-gray-700 dark:to-gray-900">
          <h1 className="text-white text-4xl mb-3">
            NextJS + Tailwind Boilerplate
          </h1>
          <p className="text-gray-200 mb-3">
            Edit the <span className="font-bold">index.jsx</span> to get start.
          </p>
          <button
            className="bg-gray-100 py-2 px-3 rounded-lg text-green-700 shadow-lg hover:bg-transparent hover:text-white dark:text-gray-700"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark && "Light Mode"}
            {!isDark && "Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}
