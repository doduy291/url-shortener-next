import { NextSeo } from "next-seo";
import { MetaProps } from "~/types/Meta";

const Meta = (props: MetaProps) => {
  return (
    <NextSeo
      title={props.title}
      titleTemplate={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        type: "website",
        url: props.canonical,
      }}
    />
  );
};

export default Meta;
