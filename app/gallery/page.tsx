import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <Image
        src="/wallpaper.jpg"
        alt="wolf"
        className="object-cover object-center"
        fill
        quality={80}
        sizes="100vw"
      />
    </div>
  );
}
