"use server"

import { compare, hash } from "bcrypt"
import { generateId } from "lucia"
import { cookies } from "next/headers"
import { z } from "zod"

import { db } from "@/lib/db"
import { lucia, validateSession } from "@/lib/lucia"
import { SignInSchema, SignUpSchema } from "@/types/auth-schema"

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const hashedPassword = await hash(values.password, 12)
  const userId = generateId(15)

  try {
    await db.user.create({
      data: {
        id: userId,
        username: values.username,
        email: values.email,
        password: hashedPassword,
      },
    })

    return {
      success: true,
      message: "User created!",
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
}

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
  try {
    SignInSchema.parse(values)
  } catch (error: any) {
    return {
      success: false,
      message: "Invalid email or password",
    }
  }

  const user = await db.user.findUnique({
    where: {
      email: values.email,
    },
  })
  if (!user) {
    return {
      success: false,
      message: "No account with that email address found",
    }
  }

  const isValidPassword = await compare(values.password, user.password)
  if (!isValidPassword) {
    return {
      success: false,
      message: "Invalid password",
    }
  }

  try {
    const session = await lucia.createSession(user.id, {
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    })

    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    )

    return {
      success: true,
      message: "Signed in!",
    }
  } catch (error: any) {
    return {
      success: false,
      message: "Invalid email or password",
    }
  }
}

export const signOut = async () => {
  try {
    const { session } = await validateSession()
    if (!session) {
      return {
        success: false,
        message: "No session found",
      }
    }

    const sessionCookie = lucia.createBlankSessionCookie()
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    )

    await lucia.invalidateSession(session.id)

    return {
      success: true,
      message: "Signed out!",
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
}
