import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signIn, signOut } from "@/lib/auth";
import { UserDropDown } from "./UserDropdown";

export async function NavBar() {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Next<span className="text-primary">Job</span>
        </h1>
      </Link>{" "}
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link href="/post-job" className={buttonVariants({ size: "lg" })}>
          Post Job
        </Link>
        {session?.user ? (
          <UserDropDown />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          ></Link>
        )}
      </div>
    </nav>
  );
}
