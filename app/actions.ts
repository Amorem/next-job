"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { companySchema, jobSeekerSchema } from "@/lib/zodSchemas";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createCompany(data: z.infer<typeof companySchema>) {
  const user = await requireUser();
  const validateData = companySchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
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

export async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {
  const user = await requireUser();
  const validateData = jobSeekerSchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onBoardingCompleted: true,
      userType: "JOBSEEKER",
      JobSeeker: {
        create: {
          ...validateData,
        },
      },
    },
  });
  return redirect("/");
}
