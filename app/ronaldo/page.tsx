import Image from "next/image";
import wallpaper from "@public/wallpaper.jpg";

export default function RonaldoPage() {
  return (
    <div>
      <Image
        src={wallpaper}
        alt="Football Manager Photo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
