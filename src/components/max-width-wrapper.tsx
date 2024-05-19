import { cn } from "@/lib/utils"

interface MaxWdithWrapperProps {
  className?: string
  children: React.ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWdithWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 lg:px-20",
        className,
      )}>
      {children}
    </div>
  )
}
