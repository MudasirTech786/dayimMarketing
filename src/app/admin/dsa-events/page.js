import React from "react";
import AdminLayout from "../components/layouts/AdminLayout";
import Link from "next/link";
import TableRowItem from "./TableRowItem";

const getAllEvents = async () => {
  let res = await fetch(`${process.env.DOMAIN_NAME}/api/dsa_event`, {
    cache: "no-store",
  });
  if (res) {
    res = await res.json();
    return res.events;
  }

  return [];
};

const DsaEventsPage = async () => {
  const events = await getAllEvents();

  return (
    <AdminLayout>
      <div className="h-full w-full flex flex-col p-10">
        <div className="w-full ">
          <Link
            href={"/admin/dsa-events/add"}
            className="text-second text-lg font-bold hover:underline"
          >
            Add New
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {events?.length > 0 ? (
            <div className="hidden md:block w-[600px] overflow-x-auto">
              <table className="w-full border border-gray ">
                <thead className="bg-gray ">
                  <tr>
                    <th className="text-start p-3">Event Id</th>
                    <th className="text-start p-3">Event Url</th>
                    <th className="text-start p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events?.map((event) => (
                    <TableRowItem key={event._id} event={event} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h2>No Events to show</h2>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default DsaEventsPage;
