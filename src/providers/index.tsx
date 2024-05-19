import { PropsWithChildren } from "react"

import { validateSession } from "@/lib/lucia"

import { SessionProvider } from "./session-provider"
import { Toaster } from "./toast-provider"

export const Providers = async ({ children }: PropsWithChildren) => {
  const sessionData = await validateSession()

  return (
    <SessionProvider sessionData={sessionData}>
      {children}
      <Toaster />
    </SessionProvider>
  )
}
