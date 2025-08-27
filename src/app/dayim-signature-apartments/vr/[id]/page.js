"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import NavBar from "../../components/Navbar";

function VRSingleItemPage({ params }) {
  let url;
  if (params.id == "studio") url = "/videos/dsa/Studio-Apartment.mp4";
  else if (params.id == "one-bed") url = "/videos/dsa/1-Bed-Apartment.mp4";
  else if (params.id == "two-bed") url = "/videos/dsa/2-Bed-Apartment.mp4";
  else if (params.id == "commercial-shops")
    url = "/videos/dsa/Commercial-Shops.mp4";
  else url = "/videos/dsa/Office-Ground.mp4";

  return (
    <div>
      <NavBar videoBg={true} />

      {/* <ReactPhotoSphereViewer src={url} height={'100vh'} width={"100%"}></ReactPhotoSphereViewer> */}
      <div className="h-screen w-full">
        <video
          src={url}
          autoPlay
          loop
          muted
          className=" w-full h-full object-fill"
        />
      </div>
    </div>
  );
}

export default VRSingleItemPage;
