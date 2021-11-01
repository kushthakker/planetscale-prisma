import { getSession } from "next-auth/react";
// import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  res.status(201).json({
    content: session,
    message: "Welcome to secret Page",
  });
};
