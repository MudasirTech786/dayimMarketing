"use client";
import React from "react";
import useLoaderStore from "@/stores/loaderStore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const TableRowItem = ({ event }) => {
  const router = useRouter();
  const setLoading = useLoaderStore((state) => state.setLoading);

  const deleteHandler = async (id) => {
    try {
      setLoading(true);

      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/dm_event/${id}`,
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "DELETE",
        }
      );
      res = await res.json();
      if (res.success === false) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        window.location.reload();
      }
    } catch (error) {
    } finally {
      setLoading(false);
      setEventUrl("");
    }
  };
  return (
    <tr className="border-t border-gray">
      <td className="p-2">{event?.eventUrl}</td>
      <td className="p-2">
        {" "}
        <button
          className="text-red cursor-pointer"
          onClick={() => deleteHandler(event?._id)}
        >
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default TableRowItem;
