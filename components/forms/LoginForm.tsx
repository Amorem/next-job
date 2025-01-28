import { auth, signIn } from "@/lib/auth";
import Github from "../icons/GitHub";
import Google from "../icons/Google";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import GeneralSubmitButton from "../general/SubmitButtons";
import { redirect } from "next/navigation";

export default async function LoginForm() {
	const session = await auth();
	// console.log("session", session);

	if (session?.user) {
		return redirect("/");
	}
	return (
		<div className="flex flex-col gap-6">
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Welcome Back</CardTitle>
					<CardDescription>
						Login with your Google or GitHub account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<form
							action={async () => {
								"use server";
								await signIn("github", {
									redirectTo: "/",
								});
							}}
						>
							<GeneralSubmitButton
								text="Login with GitHub"
								variant={"outline"}
								width="w-full"
								icon={<Github />}
							/>
						</form>
						<form>
							<GeneralSubmitButton
								text="Login with Google"
								variant={"outline"}
								width="w-full"
								icon={<Google />}
							/>
						</form>
					</div>
				</CardContent>
			</Card>
			<div className="text-center text-xs text-muted-foreground text-balance">
				By clicking continue, you agree to our terms, service, and privacy
				policy
			</div>
		</div>
	);
}
