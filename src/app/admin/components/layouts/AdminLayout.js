import React from "react";
import Sidebar from "../admin/Sidebar";
import Searchbar from "../admin/Searchbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex gap-5 h-screen w-full ">
      <Sidebar />
      <main className="max-w-6xl flex-1 mx-auto h-full py-4 ">
        {/* <Searchbar /> */}
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
