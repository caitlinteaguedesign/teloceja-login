import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { userData } from './data';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      authorize: async ({ email, password }) => {
        let user = null;

        // normally hash a password
        // noramlly check a database to see if user exists

        // lookup user in data file
        user = userData.find((user) => user.email === email);
        if (!user) {
          return null;
        }
        // check password
        if (user.password !== password) {
          return null;
        }
        // just pass some of the data to the app
        user = { name: user.name, email: user.email };

        return user;
      },
    }),
    Google,
  ],
});
