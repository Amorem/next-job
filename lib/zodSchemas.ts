import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  location: z.string().min(1, "Location must be defined"),
  about: z
    .string()
    .min(10, "Please provide some informations about your company"),
  logo: z.string().min(1, "Please upload a logo"),
  website: z.string().url("Please enter a valid URL"),
  xAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(2, "Your name must be at least 2 characters"),
  about: z.string().min(10, "Please provide more informations about yourself"),
  resume: z.string().min(1, "Please upload your resume"),
});

export const jobSchema = z.object({
  jobTitle: z
    .string()
    .min(2, "Please enter a valid job title with at least 2 characters long"),
  employmentType: z.string().min(2, "Please enter a employment type"),
  location: z.string().min(2, "Please enter a valid location"),
  salaryFrom: z.number().min(1, "Mininum salary is required"),
  salaryTo: z.number().min(1, "Maximum salary is required"),
  jobDescription: z.string().min(2, "Please describe your job proposal "),
  listingDuration: z.number().min(1, "Listing duration is required"),
  benefits: z.array(z.string()).min(1, "Please select at least 1 benefit"),
  companyName: z.string().min(1, "Company name is required"),
  companyLocation: z.string().min(1, "Company location is required"),
  companyLogo: z.string().min(1, "Company logo is required"),
  companyWebsite: z.string().min(1, "Company website is required"),
  companyXAccount: z.string().optional(),
  companyDescription: z.string().min(1, "Company description is required"),
});
