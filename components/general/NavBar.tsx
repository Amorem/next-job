import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth } from "@/lib/auth";

export async function NavBar() {
	const session = await auth();
	return (
		<nav className="flex items-center justify-between py-5">
			<Link href="/" className="flex items-center gap-2">
				<Image src={Logo} alt="logo" width={40} height={40} />
				<h1 className="text-2xl font-bold">
					Next<span className="text-primary">Job</span>
				</h1>
			</Link>
			<div className="flex items-center gap-4">
				<ThemeToggle />
				{session?.user ? <Button>Logout</Button> : <Button>Login</Button>}
			</div>
		</nav>
	);
}
