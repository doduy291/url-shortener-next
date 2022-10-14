import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma-client";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    res.status(404).send({ message: "Missing slug" });
    return;
  }

  const data = await prisma.shortLink.findFirst({
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

  return res.json(data);
};
export default getUrl;
