import Link from "next/link";
import { useSession } from "next-auth/react";
// import { useSession } from "next-auth/client";

const Type = ({ price, type, priceId }) => {
  const { data: session, status } = useSession();
  // const [session, loading] = useSession();
  const loading = status === "loading";
  const authenticated = status === "authenticated";

  return (
    <div className="border rounded-md border-black dark:border-gray-400 w-80 h-3/5 grid grid-rows-4 p-4 justify-items-center items-center">
      <div className="row-span-2 text-8xl">{price}</div>
      <div className="row-span-3 text-5xl uppercase font-heading text-center">
        {type}
      </div>
      <div className="row-span-4">
        {authenticated ? (
          <form action="/api/checkout_sessions" method="POST">
            <input type="hidden" name="priceId" value={priceId} />
            <button
              aria-label="Toggle Dark Mode"
              type="submit"
              role="link"
              className="md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
            >
              Buy
            </button>
          </form>
        ) : (
          <Link href="/sign-up">
            <a>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
              >
                Sign up
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Type;
