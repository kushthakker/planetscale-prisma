import { signIn, signOut } from "next-auth/react";
// import { signIn, signOut } from "next-auth/client";
import Link from "next/link";
const SignUp = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>
            <button
              aria-label="Home"
              type="button"
              className="absolute top-8 left-8 md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
            >
              Home
            </button>
          </a>
        </Link>
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border rounded w-1/3 h-2/4 grid grid-rows-5">
          <div className="row-span-2 bg-purple-600 font-heading text-6xl flex justify-center items-center">
            SignUp
          </div>
          <div className="row-span-5 grid justify-center items-center">
            <div>
              <button
                aria-label="Github login"
                type="button"
                className="md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
                onClick={() => signIn("github")}
              >
                Github
              </button>
            </div>
            <div>
              <button
                aria-label="Google login"
                type="button"
                className="md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
                onClick={() => signIn("google")}
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
