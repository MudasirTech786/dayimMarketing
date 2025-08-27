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
import { REGISTER_USER_API } from "@/lib/apiEndPoints";
import { toast } from "react-toastify";
import { useState } from "react";
import { DotLoader } from "react-spinners";

const formSchema = z
  .object({
    name: z
      .string()
      .max(20, { message: "Name should not exceed 20 characters" }),
    email: z
      .string()
      .email()
      .max(30, { message: "Email should not exceed 30 characters" }),
    cnic: z
      .string()
      .regex(/^\d*$/, { message: "CNIC is not valid" })
      .min(13, { message: "CNIC Card must be at least 13 characters" })
      .max(15, { message: "CNIC Card must not exceed 15 characters" }),
    occupation: z
      .string()
      .max(30, { message: "Occupation should not exceed 30 characters" }),
    phone: z
      .string()
      .regex(/^\d*$/, { message: "Number is not valid" })
      .min(1, {
        message:
          "Contact Number is required and it should be 10 or 11 characters long",
      })
      .max(15, { message: "Contact Number must not exceed 11 characters" }),
    address: z
      .string()
      .min(1, {
        message: "Address is required",
      })
      .max(70, { message: "Address should not exceed 70 characters" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(50, { message: "Password should not exceed 50 characters" }),
    password_confirmation: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(50, { message: "Password must be no longer than 50 characters" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      cnic: "",
      occupation: "",
      phone: "",
      address: "",
      password: "",
      password_confirmation: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      setLoading(true);
      const response = await fetch(REGISTER_USER_API, {
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter Name"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter Email"
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
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter Occupation"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter Phone"
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl className="">
                <input
                  placeholder="Enter Address"
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

        <FormField
          control={form.control}
          name="password_confirmation"
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
          {!loading ? "Register" : <DotLoader color="white" size={20} />}
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
