"use client";
import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Link from "next/link";
import useLoaderStore from "@/stores/loaderStore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddDsaEvent = () => {
  const [eventUrl, setEventUrl] = useState("");
  const [error, setError] = useState(null);
  const setLoading = useLoaderStore((state) => state.setLoading);
  const router = useRouter();

  const saveHandler = async (e) => {
    e.preventDefault();
    if (eventUrl === "") {
      setError("This field is required");
      return;
    } else {
      setError(null);
    }

    try {
      setLoading(true);

      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/dsa_event`,
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            eventUrl: eventUrl,
          }),
        }
      );
      res = await res.json();
      if (res.success === false) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        router.push("/admin/dsa-events");
      }
    } catch (error) {
    } finally {
      setLoading(false);
      setEventUrl("");
    }
  };

  return (
    <AdminLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="h-full w-full flex flex-col p-10 ">
          <div className="w-full  ">
            <Link
              href={"/admin/dsa-events"}
              className="text-second text-lg font-bold hover:underline"
            >
              Go Back
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center  ">
            <form className=" flex flex-col items-start justify-center md:w-[550px] gap-5">
              <input
                type="text"
                className=" border border-gray outline-none focus:border-second w-[250px] md:w-[400px] py-2 px-7 rounded-md"
                placeholder="Enter Url"
                value={eventUrl}
                onChange={(e) => setEventUrl(e.target.value)}
              />
              {error && <span className="text-red">{error}</span>}

              <button
                onClick={saveHandler}
                className="bg-second py-2 px-7 rounded-md text-white"
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddDsaEvent;
