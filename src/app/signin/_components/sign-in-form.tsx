"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { signIn } from "@/lib/services/auth-service"
import { SignInSchema } from "@/types/auth-schema"

export const SignInForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isPending = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    const res = await signIn(values)
    if (!res.success) {
      toast({
        title: res.message,
        variant: "destructive",
      })
    } else if (res.success) {
      router.push("/")
    }
  }

  return (
    <MaxWidthWrapper className="flex h-full items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="email"
                      placeholder="joe@famlam.ca"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isPending}
              type="submit"
              className="w-full uppercase shadow-md">
              {isPending ? (
                <div className="flex">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  )
}
