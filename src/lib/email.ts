import nodemailer from 'nodemailer'
import { Attachment } from 'nodemailer/lib/mailer'

type EmailPayload = {
  to: string
  subject: string
  html: string
}

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT!),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}

export const sendEmail = async (data: EmailPayload, attachments?: Attachment[]) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: `Hominis WebSite <contato@institutohominis.org.br>`,
    ...data,
    attachments,
  })
}
