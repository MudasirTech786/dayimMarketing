// export const dynamic = "force-dynamic";
import "./globals.css";
import StoreProvider from "@/stores/StoreProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const revalidate = 0;

export const metadata = {
  title: "Dayim Marketing",
  description: "Building Your Visions. Creating Reality",
  images: [
    {
      url: "/images/dsa/dayim_sub_logo.PNG",
      width: 800,
      height: 600,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ToastContainer />
        <StoreProvider>
          {/* <Navbar /> */}
          <div className="min-h-[500px]">{children}</div>
          {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  );
}
