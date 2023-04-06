import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const { GOOGLE_ID = '', GOOGLE_SECRET = '' } = process.env;

const authOptions: NextAuthOptions = {
    providers:[
        // Google provider
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET
        })
    ]
}

export default NextAuth(authOptions)