import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

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

        // normally hash a password
        // noramlly check a database to see if user exists
        // normally check if password matches

        // manual test
        try {
          if (credentials.email == 'design@caitlinteague.com') {
            if (credentials.password == 'admin') {
              user = {
                name: 'Caitlin Teague Doerr',
                email: 'design@caitlintague.com',
              };
            } else {
              throw new Error('Password does not match.');
            }
          } else if (credentials.email == 'milz@yahoo.com') {
            if (credentials.password == 'bubbers') {
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
        } catch (error) {
          if (!error) return null;
          console.log('bummer!', error);
        }

        console.log(user);
        return user;
      },
    }),
  ],
});
