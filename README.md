Boilerplate: https://github.com/doduy291/next-js-setup

## Tech Stack

- [NextJS](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io)
- [Supabase](https://supabase.com)
- [tRPC](https://trpc.io)
- [Sass](https://sass-lang.com)

## Installation

**1. Clone the repository and install dependencies**

```bash
$ git clone https://github.com/doduy291/url-shortener-next.git .
$ npm install
```

**2. Enable husky** (Optional)

```bash
$ npm run prepare
```

**3. Create a database on Supabase**

\*\*How to create a project:

- Go to app.supabase.com.
- Click on "New Project".
- Enter your project details. (Note: Remember your password project)
- Wait for the new database to launch.

\*\*Run database via `Connection string`

- At app.supabase.com, select the project you just created.
- Go to `Project settings` → `Database`.
- Scroll down to `Connection string` content and copy `URI` string.

That’s what you will need to put in your .env file for the DATABASE_URL variable.

Lastly, we need to create the tables from the Prisma schema onto Supabase

```bash
$ npx prisma db push
```

**4. Development**

```bash
$ npm run dev
```

## Prisma

- Push database to Supabase project

```bash
$ npx prisma db push

or

$ npx prisma migrate dev
```

According to document, `db push` to prototype a schema at the start of a project and initialize a migration history when you are happy with the first draft. <br/>
_Read more_ about both commands: https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate

- Explore and manipulate data, kinda like phpMyAdmin, MongoDB Compass,...

```bash
$ npx prisma studio
```
