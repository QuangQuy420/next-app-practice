import NextAuth, { AuthOptions } from "next-auth"
import { authConfig } from "@/libs/auth"

const handler = NextAuth(authConfig as AuthOptions);

export { handler as GET, handler as POST }
