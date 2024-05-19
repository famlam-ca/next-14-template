A boilerplate template using [Next.js](https://nextjs.org/) for HHN projects.

![App Screenshot](https://www.famlam.ca/logo/full/logo-full-white-s.png)

## Getting Started

First, install required dependencies and initialize the prisma client:

```bash
bun install
bun db:gen
bun db:push
```

Then run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**_NOTE:_** Bun is not required. NPM or Yarn can be used instead. To do this, delete `bun.lockb` and `node_modules` then proceed with the installation.

```bash
rm -rf node_modules
rm bun.lockb
npm install
# or
yarn install
```

## Documentation

#### This tempalte is built using:

| [![nextjs](https://skillicons.dev/icons?i=nextjs)](https://nextjs.org) | [![ts](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org) | [lucia-auth](https://lucia-auth.com) | [![prisma](https://skillicons.dev/icons?i=prisma)](https://prisma.io) | [![mysql](https://skillicons.dev/icons?i=mysql)](https://www.mysql.com) | [![tailwind](https://skillicons.dev/icons?i=tailwind)](https://tailwindcss.com) | [![shadcn/ui](https://ui.shadcn.com/favicon.ico)](https://ui.shadcn.com) |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |

#### Key file locations:

- Lucia instance initializer and validateSession: `@/lib/lucia.ts`
- Lucia useSession: `@/providers/session-provider.tsx`
- Lucia Prisma Adapter: `@/lib/db/adapter.ts`
- Prisma client instance initializer: `@/lib/db/index.ts`
- Auth functions: `@/lib/services/auth-service.ts`
- Theme colors: `@/app/globals.css`

#### Custom scripts:

- "db:push": updates the database with the latest schema changes
- "db:pull": retrieves the database schema directly from the database
- "db:gen": generates client-side types for database typesafety
- "db:studio": launches an interactive GUI for exploring and manipulating the database
- "db:seed": populates the database with initial data for development or testing
- "shadcn": runs the latest version of the shadcn-ui using a custom bunx command
  - "bunx": is defined in ~/.zshrc or ~/.bashrc
  ```bash
  alias bunx="bunx --bun"
  ```
- "prisma.seed": defines "prisma db seed"

```bash
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
```

#### Modified components:

- `toast.tsx`

  Before: ![before](/public/toast-before.png)

  After: ![after](/public/toast-after.png)

- `button.tsx`

  Before: ![before](/public/button-before.png)

  After: ![after](/public/button-after.png)

#### Modified default files:

- `next.config.mjs`
  - added "images.remotePatterns"
- `tailwind.config.tss`
  - removed default animations and key frames
- `.gitignore`
  - renamed .env\*.local to .env

#### Shadcn component configuration:

```bash
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

#### Optional `.prettierrc` file:

This file is configured for my purposes, it is not required, and can be deleted at any time.

**_NOTE:_** When deleted, however, Tailwind CSS classes will no longer be automatically sorted using Prettier.

```bash
{
  "bracketSameLine": true,
  "semi": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

#### Environment variables:

- `REACT_EDITOR` specifies which text editor to open when an error occurs.

  For Example when `REACT_EDITOR` is set to "code" VSCode will open upon clicking the file url in your browser.

- `DATABASE_URL` connects prisma to your development database.

  The url should look like this:

  `mysql://username:password@localhost:3906/database`

## Deployment

To deploy this app you must define a database url inside a `.env` file at the root of your file tree.

The url should look like this:

`mysql://username:password@localhost:3906/database`

## Support

For any questions or support feel free to email me or connect with me on LinkedIn.

| [![Email](https://skillicons.dev/icons?i=gmail)](mailto:lasse@famlam.ca) | [![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/lasse-lammers-90a050234) |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
