"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import NavBar from "../../components/Navbar";

function VRSingleItemPage({ params }) {
  let url;
  if (params.id == "studio") url = "/videos/dl/studio.mp4";
  else url = "";

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
