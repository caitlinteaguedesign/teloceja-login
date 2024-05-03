## Introduction

I created this app to demonstrate my skills in full stack web development. It is inspired by another project I am working on with a friend, J.P Miller, author of [The Legacy of Maela](https://www.drivethrurpg.com/en/publisher/2434/legacy-of-maela) table-top rpg campaign setting. Later this year, after I complete the rebrand and book cover redesigns, I plan on creating a choose-your-own-adventure style text-based web game based on one of his modules. Art and IP in this sample project used with the author's permission.

Tech stack includes:

- Next.js
- Auth.js v5
- Tailwind CSS
- TypeScript
- Playwright

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After cloning the repo, run `npm install` in a terminal.

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

## Tests

Tests were written with [Playwright](https://playwright.dev/). You can find tests in `tests/`.

```bash
# run all tests
npx playwright test

# run specific tests
npx playwright test [filename]

```

## Background

Building on my past experience in React, Tailwind CSS, Next.js, and TypeScript, this project was an exciting opportunity for me to combine these technologies for the first time. Additionally, I got to try out Auth.js for user authentication, a departure from the manual setup I created in my [Sudoku App](https://github.com/caitlinteaguedesign/sudoku-app) with Express and React. Lastly, I had a reason to create end-to-end (E2E) tests for the first time by leveraging Playwright.

### Design

UI design is my bread and butter, and so I utilized Figma to quickly create a layout to help me capture all the features that I would need to build, as defined in the **Product User Stories**. You can view the [initial design here](https://www.figma.com/file/CudqZyLcwug3OTysO2adXa/Filament-Games---Teloceja?type=design&node-id=0-1&mode=design). Most of the assets were already available so this step did not take a significant amount of time. The final result deviates from the proposed solution due to time constraints and unexpected issues during development.

### Development

#### Databases & User Credentials

For speed, I decided to forgo a database solution and instead created an object in the code base to check against for valid user credentials. Normally, we would store user information in a database and use hashing to protect passwords, like with the hash algorithm bcrypt.

If I were to continue this project, I would refer to the [Auth.js adapter for MongoDB](https://authjs.dev/reference/mongodb-adapter), a NoSQL solution I am already familiar with. I also considered [AWS DynamoDB](https://aws.amazon.com/dynamodb/) for more AWS experience. Other guides and tutorials I read used other options, like [Prisma](https://www.prisma.io/orm), that are worth checking out as well.

#### Custom login form with credentials

This task took up the majority of the development time as it involved a tool that was new to me to perform authentication, which itself is also a task that I have only done once before in a slightly different tech stack. You can view [my past project](https://sudoku.caitlinteague.com/login) to see how I previously handled field validation ([GitHub repo](https://github.com/caitlinteaguedesign/sudoku-app)).

I read Auth.js and Next.js authentication docs but found implementing a custom sign in form to be difficult. After some trial and error (much google-ing and stackoverflow-ing) to no avail, I switched gears and tried implementing the [Google provider](https://authjs.dev/getting-started/authentication/oauth). Contrary to my initial assumption, this task proved much more straightforward, and the win helped boost my confidence.

After further attempts with the custom form, I did achieve successful authentication when the credentials were correct. However, if the credentials did not return a user the app produced an unhandled runtime error. The CallbackRouteError indicates my code is missing the necessary information to properly handle error routing. I later learned from developers over on GitHub that the documentation in [Auth.js for v5 Credentials](https://authjs.dev/getting-started/authentication/credentials) is partially out of date, as the `throw new Error()` is no longer supported/recommended practice, which further thwarted my attempts at debugging.

In the absence of time, I conceded defeat (for now) and removed my custom sign in form to direct users to the Auth.js provided form instead. The design and error handling no longer matches my original vision, but the service is now stable and showing authentication errors, which is far more important.

### E2E Tests

I wrote a few basic tests building off the examples provided, mainly navigating to the other pages and confirming the result. I did not have time to dig deeper into authentication tests, but did find documentation on strategies with [Playwright](https://playwright.dev/docs/auth) and [Auth.js](https://authjs.dev/guides/testing) to explore later.

### Opportunities

In hindsight, I think my past Next.js experience had not yet covered form handling and authentication, so to improve my Next.js skills there's a couple of tutorials I found that could help my understanding of Next.js in general as well as a deeper understanding of Auth.js.

- [Learn Next.js](https://nextjs.org/learn/dashboard-app/adding-authentication)
- [Auth.js V5 From Scratch](https://www.youtube.com/watch?v=Rs8018RO5YQ)

I also found alternative approaches to try.

- [How to set up NextAuth v5 authentication with middleware and Jest configuration in Next.js 14](https://medium.com/@renanleonel/how-to-set-up-nextauth-v5-authentication-with-middleware-and-jest-configuration-in-next-js-14-ca3e64bfb7d5)

## Create Next App Notes

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Google Fonts [Barlow](https://fonts.google.com/specimen/Barlow/about) and [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch/about?query=grenz).

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
