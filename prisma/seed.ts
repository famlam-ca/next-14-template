import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

export const main = async () => {
  const password = await hash("Pass1234!", 12)
  await prisma.user.create({
    data: {
      id: "999",
      username: "testUser",
      email: "test@famlam.ca",
      password,
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })
