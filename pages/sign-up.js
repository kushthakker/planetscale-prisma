import SignUp from "../components/SignUp";
import { getSession } from "next-auth/react";
// import { getSession } from "next-auth/client";

export default function Signup() {
  return <SignUp />;
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
