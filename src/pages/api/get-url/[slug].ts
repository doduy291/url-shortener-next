import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma-client";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    res.status(404).send({ message: "Missing slug" });
    return;
  }

  const data = await prisma.link.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.status(404).send({ message: "Not found slug" });
    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Edge Function
  // https://vercel.com/guides/how-to-configure-the-cache-control-response-header-in-vercel-projects
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  return res.json(data);
};

export default getUrl;
