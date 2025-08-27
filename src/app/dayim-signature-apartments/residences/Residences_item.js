"use client";
import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { getCookie } from "cookies-next";
import { User_Payment_API } from "@/lib/apiEndPoints";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";

function Residences_item({
  id,
  sold,
  title,
  number,
  type,
  size,
  image,
  floor,
  purchased_by,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();

  const user = getCookie("logged-in-user")
    ? JSON.parse(getCookie("logged-in-user"))
    : null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  function buyNowHandler() {
    if (!user) {
      router.push("/auth/login?name=dsa");
    } else {
      setDialogOpen(true);
    }
  }

  async function paymentHandler(type) {
    // for cash
    if (type === "cash") {
      try {
        setLoading(true);
        const response = await fetch(User_Payment_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            product_id: id,
            payment: type,
            user_id: user?.id,
          }),
        });

        const res = await response.json();
        if (response.status === 200) {
          toast.success("Payment Created Successfully");
          setDialogOpen(false);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    // for bank
    if (type === "bank") {
      try {
        setLoading(true);
        if (!file) {
          toast.error("Please select a file");
          return;
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("product_id", id);
        formData.append("payment", type);
        formData.append("user_id", user?.id);

        const response = await fetch(User_Payment_API, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        const res = await response.json();
        if (response.status === 200) {
          toast.success("Payment Created Successfully");
          setDialogOpen(false);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
        setFile(null);
      }
    }
  }
  return (
    <div className=" p-5 flex flex-col items-center justify-center  border border-second relative">
      {/* dialogue starts */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select from below options</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="">
            <Tabs defaultValue="cash" className="w-full">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="cash">Cash</TabsTrigger>
                <TabsTrigger value="bank_transfer">Bank Transfer</TabsTrigger>
              </TabsList>
              <TabsContent value="cash">
                <Button
                  onClick={() => paymentHandler("cash")}
                  className="bg-second text-white w-full mt-5"
                  disabled={loading}
                >
                  {!loading ? (
                    "Checkout"
                  ) : (
                    <DotLoader color="white" size={20} />
                  )}
                </Button>
              </TabsContent>
              <TabsContent value="bank_transfer">
                <div className="mt-5">
                  <label htmlFor="">Upload Transaction Image</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
                <Button
                  onClick={() => paymentHandler("bank")}
                  className="bg-second text-white w-full mt-5"
                  disabled={loading}
                >
                  {!loading ? (
                    "Checkout"
                  ) : (
                    <DotLoader color="white" size={20} />
                  )}
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
      {/* dialogue ends */}

      <Zoom>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/uploads/${image}`}
          alt=""
          className="h-[200px] w-[150px] object-contain"
        />
      </Zoom>
      <div className="w-full mt-5">
        {sold == "No" ? (
          <div className="flex items-end justify-between">
            <span className=" text-white text-sm font-bold p-1 rounded-md bg-second">
              AVAILABLE
            </span>

            <button
              onClick={buyNowHandler}
              className="bg-[#008000] text-white p-1 text-sm rounded-md "
            >
              BUY NOW
            </button>
          </div>
        ) : (
          <div className="flex items-end justify-between">
            <span
              className={`text-white text-sm font-bold p-1 rounded-md ${
                sold === "Reserved" ? "bg-first" : "bg-red"
              } `}
            >
              {sold === "Reserved" ? "RESERVED" : "SOLD"}
            </span>
            {sold !== "Reserved" && (
              <div className="flex flex-col">
                <h3 className="text-xs font-bold">Purchased By</h3>
                <span className=" text-white text-sm font-bold p-1 rounded-md bg-red">
                  {purchased_by}
                </span>
              </div>
            )}
          </div>
        )}
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <h3 className="font-bold text-sm">{floor} Floor</h3>
        <div className="flex items-center justify-between w-full text-second font-bold">
          <span className="">{type + " # " + number}</span>
          <span>{size + " Sq.Ft."}</span>
        </div>
        <div className={`self-end `}>
          {sold === "No" ? (
            <Link
              href={`/dayim-signature-apartments/contact?floor=${floor}&inventory_name=${type}&inventory_number=${number}`}
              className={`bg-[#008000] text-white py-1 px-3 text-sm rounded-md mt-3 inline-block`}
            >
              Contact
            </Link>
          ) : (
            <div className={`py-1 px-3 mt-3 `}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Residences_item;
