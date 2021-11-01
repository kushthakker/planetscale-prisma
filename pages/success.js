import { useEffect, useState, useRef } from "react";
import { confetti } from "dom-confetti";

import Link from "next/link";

const Success = ({ data }) => {
  const press = useRef(null);

  console.log(`data`, data);
  console.log(data.session.product);

  // const [downloaded, setDownloaded] = useState(false);

  const productName = data.session.line_items.data[0].description;

  return (
    <div>
      <div>
        <Link href="/">
          <a>
            <button
              aria-label="Download now"
              type="button"
              className="absolute top-8 left-8 md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
            >
              Home
            </button>
          </a>
        </Link>
      </div>
      <div
        className="w-screen h-screen flex flex-col justify-center items-center"
        ref={press}
      >
        <h1 className="font-heading text-5xl">
          Thank You for buying {productName} Pack!
        </h1>
        <div>
          <form
            action="/api/aws-get/SN1_buildings_test_AOI_1_Rio_3band.tar.gz"
            method="POST"
          >
            <button
              aria-label="Download now"
              type="submit"
              role="link"
              className="mt-10 md:py-2 md:px-4 px-3 py-2 rounded-sm order-2 md:order-3 border border-black dark:border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-2xl dark:shadow-none transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 active:translate-y-3"
              onClick={() =>
                confetti(press.current, {
                  angle: 90,
                  spread: 360,
                  startVelocity: 55,
                  elementCount: 100,
                  dragFriction: 0.12,
                  duration: 5000,
                  stagger: 3,
                  width: "10px",
                  height: "10px",
                  perspective: "900px",
                  colors: [
                    "#a864fd",
                    "#29cdff",
                    "#78ff44",
                    "#ff718d",
                    "#fdff6a",
                  ],
                })
              }
            >
              Download
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session_id = req.__NEXT_INIT_QUERY.session_id;
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items"],
  });
  if (session.payment_status !== "paid") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: {
        session,
      },
    },
  };
};

export default Success;
