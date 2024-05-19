import { redirect } from "next/navigation"

import { validateSession } from "@/lib/lucia"

import { SignInForm } from "./_components/sign-in-form"

const SignInPage = async () => {
  const { session } = await validateSession()
  if (session) {
    return redirect("/")
  }

  return <SignInForm />
}

export default SignInPage
