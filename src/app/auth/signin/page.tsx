import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authConfig } from "@/libs/auth";
import SignInForm from "./components/SignInForm";

const SignInPage = async () => {
  const session = await getServerSession(authConfig);

  if (session) {
    redirect("/");
  }

  return <SignInForm />;
};

export default SignInPage;
