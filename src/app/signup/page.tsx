import { validateSession } from "@/lib/lucia"

import { SignUpForm } from "./_components/sign-up-form"
import { redirect } from "next/navigation"

const SignUpPage = async () => {
  const { user } = await validateSession()
  if (user) {
    return redirect("/")
  }

  return <SignUpForm />
}

export default SignUpPage
