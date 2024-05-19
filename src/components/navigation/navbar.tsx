"use client"

import Link from "next/link"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { NAVBAR_ROUTES } from "@/constants/navbar_routes"
import { cn } from "@/lib/utils"
import { useSession } from "@/providers/session-provider"

import { NavItem } from "./nav-item"

export const Navbar = () => {
  const { user } = useSession()

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <h2 className="text-xl font-bold">
              H<span className="text-primary">HN</span>
            </h2>
          </Link>

          <div className="flex items-center gap-x-4">
            <ul className="flex items-center space-x-4 text-xs font-semibold">
              {NAVBAR_ROUTES.map((route) => (
                <NavItem key={route.href} {...route} />
              ))}

              {user ? (
                <li>
                  <Link
                    href="/signout"
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                      }),
                    )}>
                    Sign Out
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/signin"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                        }),
                      )}>
                      Sign In
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/signup"
                      className={cn(
                        buttonVariants({
                          variant: "primary",
                        }),
                      )}>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
