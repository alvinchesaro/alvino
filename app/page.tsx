import Image from "next/image";
import { clsx } from "clsx";
export default function Home() {
  return (
   <div>
      <h1 className={clsx(
        "text-5xl", 
      "text-orange-600", 
      "italic", 
      true && 
      "underline")}>Hello World!</h1>
   </div>
  );
}
