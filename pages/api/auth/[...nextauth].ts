import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { dbUsers } from '../../../database';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo: ',
          type: 'email',
          placeholder: 'correo@test.com',
        },
        password: { label: 'Clave: ', type: 'password', placeholder: 'Clave' },
      },
      async authorize(credentials) {
        return await dbUsers.checkUserEmailPassword( credentials!.email, credentials!.password );
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if ( account ) {
        token.accessToken = account.access_token;

        switch( account.type ) {

          case 'oauth': 
            token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
          break;

          case 'credentials':
            token.user = user;
          break;
        }

      }

      return token;
    },


    async session({ session, token, user }){
      session.accessToken = token.accessToken;
      session.user = token.user as any;
      return session;
    }
    
  },
});
