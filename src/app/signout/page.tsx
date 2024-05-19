"use client"

import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { signOut } from "@/lib/services/auth-service"
import { useSession } from "@/providers/session-provider"

const SignOutPage = () => {
  const router = useRouter()
  const { session } = useSession()
  if (!session) {
    router.push("/")
  }

  useEffect(() => {
    signOut().then(() => {
      router.push("/")
      router.refresh()
    })
  }, [router])

  return (
    <MaxWidthWrapper className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-lg">
        <Loader2 className="h-10 w-10 animate-spin" />
        <div className="text-center">
          <p>Please wait!</p>
          <p>We are trying to sign you out...</p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default SignOutPage
