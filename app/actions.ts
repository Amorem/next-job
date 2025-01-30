"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { companySchema } from "@/lib/zodSchemas";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createCompany(data: z.infer<typeof companySchema>) {
  const session = await requireUser();
  const validateData = companySchema.parse(data);

  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onBoardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validateData,
        },
      },
    },
  });
  return redirect("/");
}
