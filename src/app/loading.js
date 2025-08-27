import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-gray h-screen w-full flex items-center justify-center">
      <Image
        src="/images/dsa/animated_logo.gif"
        alt="Loading..."
        width={300}
        height={300}
        className="h-[300px] w-[300px] object-contain"
        unoptimized // 👈 important for GIFs, otherwise Next may try to optimize and break animation
      />
    </div>
  );
}
