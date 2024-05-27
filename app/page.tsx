import Image from "next/image";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
   <div>
      <h1 className={cn("text-4xl")}>
        Hello my friendly World!
      </h1>
      <h1 className={cn("text-4xl font-oswald")}>
        Hello my friendly World!
      </h1>
      <h1 className={cn("text-4xl font-grava")}>
        Hello my friendly World!
      </h1>
   </div>
  );
}
