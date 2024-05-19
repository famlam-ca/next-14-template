import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { NAVBAR_ROUTES } from "@/constants/navbar_routes"
import { cn } from "@/lib/utils"

type Route = (typeof NAVBAR_ROUTES)[0]

type NavItemProps = Route

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
        )}>
        {label}
      </Link>
    </li>
  )
}
