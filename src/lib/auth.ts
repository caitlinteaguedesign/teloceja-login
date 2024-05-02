import NextAuth from 'next-auth';
import { ZodError } from 'zod';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from './zod';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          // normally hash a password
          // noramlly check a database to see if user exists

          // a manual test

          if (email == 'design@caitlinteague.com') {
            if (password == 'admin') {
              user = {
                name: 'Caitlin Teague Doerr',
                email: 'design@caitlintague.com',
              };
            } else {
              throw new Error('Password does not match.');
            }
          } else if (email == 'milz@yahoo.com') {
            if (password == 'bubbers') {
              user = {
                name: 'J.P. Miller',
                email: 'milz@yahoo.com',
              };
            } else {
              throw new Error('Password does not match.');
            }
          }
          if (!user) {
            throw new Error('User not found.');
          }
          console.log(user);
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
});
