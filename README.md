# Introduction

This app was created to test my skills in full stack development.

Tech stack includes:

- Next.js
- Auth.js v5
- Tailwind CSS
- TypeScript
- Playwright

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run `npm install`.

Next, copy `.env.local.sample` and rename to `.env.local`.

Set **AUTH_SECRET** to a random string. I used `npx auth secret` to generate one.

You can use your own Google OAuth 2.0 Client ID, or contact [me](mailto:design@caitlinteague.com) and I can send you the **AUTH_GOOGLE_ID** and **AUTH_GOOGLE_SECRET** for the credentials I created.

> When the user signs in with Google this app will only store their Google account name, email, and profile image url temporarily in a session in the browser. No information is transferred to another database.

**NEXAUTH_URL** and **AUTH_TRUST_HOST** are required when running the app in production (can skip if only running in dev mode).

```
NEXTAUTH_URL=http://localhost:3000
AUTH_TRUST_HOST=http://localhost:3000
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To sign in successfully with credentials, refer to the object in `/src/lib/data.ts`. You can choose from the existing users listed there, and add to or edit the list.

## Create Next App Notes

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Google Fonts Barlow and Gren G.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
