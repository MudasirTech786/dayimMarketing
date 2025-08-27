"use client";
import MainFooter from "@/app/dayim-zindagi/components/footer/MainFooter";
import NavBar from "@/app/dayim-zindagi/components/Navbar";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const user = getCookie("logged-in-user");
    if (user) {
      if (searchParams.get("name") === "dsa") {
        router.push("/dayim-zindagi/residences");
      } else {
        router.push("/dayim-living/residences");
      }
    }
  }, [router, searchParams]); // ✅ added dependencies

  return (
    <div className="min-h-screen w-full ">
      <NavBar videoBg={false} />

      <div className="flex items-center justify-center mt-[150px] ">
        <div className="space-y-3 border border-second rounded-sm shadow-md w-[500px] flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold text-second">Sign in</h2>
          <div className="w-full">
            <LoginForm />
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-second hover:underline">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default LoginPage;
