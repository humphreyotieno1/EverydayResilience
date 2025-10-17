import nodemailer from "nodemailer";

const requiredEnvVars = [
  "Z0_SMTP_HOST",
  "Z0_SMTP_PORT",
  "Z0_SMTP_USER",
  "Z0_SMTP_PASSWORD",
  "FROM_EMAIL",
  "FROM_NAME",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const transporter = nodemailer.createTransport({
  host: process.env.Z0_SMTP_HOST,
  port: Number(process.env.Z0_SMTP_PORT ?? "465"),
  secure: Number(process.env.Z0_SMTP_PORT ?? "465") === 465,
  auth: {
    user: process.env.Z0_SMTP_USER,
    pass: process.env.Z0_SMTP_PASSWORD,
  },
});

export const FROM_EMAIL = process.env.FROM_EMAIL as string;
export const FROM_NAME = process.env.FROM_NAME as string;

