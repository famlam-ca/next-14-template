"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { signUp } from "@/lib/services/auth-service"
import { SignUpSchema } from "@/types/auth-schema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export const SignUpForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  })

  const isPending = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    const res = await signUp(values)
    if (!res.success) {
      toast({
        title: res.message,
        variant: "destructive",
      })
    } else if (res.success) {
      router.push("/signin")
    }
  }

  return (
    <MaxWidthWrapper className="flex h-full items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jeo@famlam.ca"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  )
}
