import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex   items-center justify-end p-6">
      <UserButton afterSignOutUrl="/sign-in" />
      <p> Home page </p>
    </main>
  );
}
