## Way to fetching data:

> Outter API sample aims to test, not recommend using it in Next.js (instead, use Client-side rendering (CSR) )

### Any pages

Sample at `index.tsx`

- Use `getServerSideProps`: https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props

```bash
export async function getServerSideProps() {
  const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
  const blogs: Blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}
```

- Use `getStaticProps`: https://nextjs.org/docs/api-reference/data-fetching/get-static-props

> _Notice_: use "revalidate" config to update data in front-end when database has change (should only do in production enviroment)

```bash
export async function getStaticProps() {
  const res = await fetch("https://63444e7d242c1f347f839ee0.mockapi.io/blogs");
  const blogs: Blogs = await res.json();
  return {
    props: {
      blogs,
    },
    revalidate: 5, // ===> IMPORTANT
  };
}
```

### Dynamic pages

- Use `getStaticPaths`: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths

> Only combine both getStaticPaths and getStaticProps in Dynamic Route

Sample at `[id].tsx`

```bash
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
```
