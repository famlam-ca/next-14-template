import Image from "next/image"

const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-8 text-balance text-center">
      <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
        Next.js boilerplate template for{" "}
        <span className="text-text-foreground">H</span>HN projects.
      </h1>
      <p className="max-w-prose sm:text-lg">
        Using TypeScript, Lucia-auth, Prisma, Tailwind CSS, and Shadcn/ui
      </p>
      <Image
        src="https://www.famlam.ca/logo/full/logo-full-dark-s.png"
        alt="Famlam Logo"
        width={1200}
        height={512}
      />
    </div>
  )
}

export default HomePage
