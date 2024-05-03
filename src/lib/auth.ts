import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from './zod';
import Google from 'next-auth/providers/google';
import { userData } from './data';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        // normally hash a password
        // noramlly check a database to see if user exists

        // lookup user in data file
        user = userData.find((user) => user.email === email);
        if (!user) {
          throw new Error('User not found.');
        }
        // check password
        if (user.password !== password) {
          throw new Error('Password does not match.');
        }
        // just pass some of the data to the app
        user = { name: user.name, email: user.email };

        return user;
      },
    }),
  ],
});
