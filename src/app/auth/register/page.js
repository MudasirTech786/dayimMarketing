"use client";

import MainFooter from "@/app/dayim-signature-apartments/components/footer/MainFooter";
import NavBar from "@/app/dayim-signature-apartments/components/Navbar";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const RegisterPage = ({ authProviders }) => {
  const router = useRouter();
  useEffect(() => {
    const user = getCookie("logged-in-user");
    if (user) {
      router.push("/dayim-signature-apartments/residences2");
    }
  }, []);
  return (
    <div className="min-h-screen w-full ">
      <NavBar videoBg={false} />

      <div className="flex items-center justify-center min-h-[800px] mt-[180px] ">
        <div className="space-y-3 border border-second rounded-sm shadow-md w-[500px] flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold text-second">Register</h2>
          <p className="text-gray text-center">
            Get access to one of the best Real Estate services in Pakistan
          </p>
          <div className="w-full">
            <RegisterForm />
          </div>
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="text-second hover:underline">
              Login
            </Link>{" "}
          </p>
          {/* <DevTool control={control} /> */}
        </div>
      </div>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default RegisterPage;
