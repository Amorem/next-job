import { OnboardingForm } from "@/components/forms/onboarding/OnboardingForm";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { redirect } from "next/navigation";

async function checkIfUserHasFinishedOnboarding(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onBoardingCompleted: true,
    },
  });

  if (user?.onBoardingCompleted) {
    redirect("/");
  }
  return user;
}

export default async function Onboarding() {
  const user = await requireUser();
  await checkIfUserHasFinishedOnboarding(user?.id as string);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
}
