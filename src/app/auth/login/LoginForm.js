"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DotLoader } from "react-spinners";
import { useState } from "react";
import { LOGIN_USER_API } from "@/lib/apiEndPoints";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  cnic: z
    .string()
    .regex(/^\d*$/, { message: "CNIC is not valid" })
    .min(13, { message: "CNIC Card must be at least 13 characters" })
    .max(15, { message: "CNIC Card must not exceed 15 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password should not exceed 20 characters" }),
});

function LoginForm() {
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cnic: "",
      password: "",
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      setLoading(true);
      const response = await fetch(LOGIN_USER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const res = await response.json();
      if (response.status === 200) {
        toast.success(res.message);
        setCookie("logged-in-user", res.user);

        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
      form.reset();
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-5">
        <FormField
          control={form.control}
          name="cnic"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter CNIC"
                  {...field}
                  className=" border border-gray w-full rounded-full py-3 px-7 overflow-hidden"
                />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...field}
                  className=" border border-gray w-full rounded-full py-3 px-7 overflow-hidden"
                />
              </FormControl>
              <FormMessage className="text-red" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-second w-full text-white py-6 rounded-full"
          disabled={loading}
        >
          {!loading ? "Sign In" : <DotLoader color="white" size={20} />}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
