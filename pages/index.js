import Head from "next/head";
// import React from "react";
import DarkModeButton from "../components/DarkModeToggle";
import Type from "../components/Type";
import { useSession } from "next-auth/react";
// import { useSession } from "next-auth/client";
// import { signOut } from "next-auth/client";
import { signOut } from "next-auth/react";

const SubmitRequest = async (priceId) => {
  const req = await fetch("/api/checkout_sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId }),
  });

  const res = await req.json();
  console.log(res);
};

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const authenticated = status === "authenticated";
  const unauthenticated = status === "unauthenticated";
  // const [session, loading] = useSession();
  console.log(session);

  if (loading) {
    return <div>Loading...</div>;
  }
  // use swr

  // const { data, error } = useSWR(url, fetch);

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className=" w-screen h-screen justify-center items-center text-blue">
      {authenticated ? (
        <div>
          <button
            aria-label="Home"
            type="button"
            className="absolute top-8 left-8 md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border ml-5 border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : null}

      <DarkModeButton />
      <div className="w-full m-auto text-8xl font-heading text-center mt-8 tracking-wider">
        GalaxEye
      </div>
      {authenticated ? (
        <div className="w-full m-auto text-3xl font-heading text-center absolute top-40 tracking-wider">
          Welcome {session.user.name}
        </div>
      ) : null}
      <div className="w-full h-full grid grid-cols-3 gap-8 items-center justify-items-center">
        <Type
          price="$99"
          type="Defence"
          priceId="price_1JqHE4SJEr7GmEwN2bz4JbI3"
        />
        <Type
          price="$129"
          type="Agriculture"
          priceId="price_1JqHSCSJEr7GmEwNH9OMeCWy"
        />
        <Type
          price="$199"
          type="Hazard Prevention"
          priceId="price_1JqHRtSJEr7GmEwNqJYnWS63"
        />
      </div>
    </div>
  );
}
