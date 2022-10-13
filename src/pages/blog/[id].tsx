import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.scss";
import { GetStaticPropsContext, NextPage } from "next";

interface Blog {
  id: number | string;
  title: string;
  description: string;
  slug: string;
}

interface Blogs extends Array<Blog> {}

interface Props {
  blog: Blog;
}

const BlogPage: NextPage<Props> = ({ blog }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>Blog - {blog.id} </h1>
      <h2>Title: {blog.title} </h2>
      <h2>Description: {blog.description} </h2>
      <h2>Slug: {blog.slug} </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
    </div>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
  const blogs: Blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: true, // ===> IMPORTANT
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const res = await fetch(
    `https://63444e7d242c1f347f839ee0.mockapi.io/blogs/${id}`,
  );
  const blog = await res.json();

  return {
    props: { blog },
    revalidate: 5, // ===> IMPORTANT
  };
}
