"use server";

import arcjet, { detectBot, shield } from "@/lib/arcjet";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { companySchema, jobSeekerSchema } from "@/lib/zodSchemas";
import { request } from "@arcjet/next";
import { redirect } from "next/navigation";
import { z } from "zod";

const aj = arcjet
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(detectBot({ mode: "LIVE", allow: [] }));

export async function createCompany(data: z.infer<typeof companySchema>) {
  const user = await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }
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
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }
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
