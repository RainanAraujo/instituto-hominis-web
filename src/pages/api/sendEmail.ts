import type { NextApiResponse } from 'next'
import { render } from '@react-email/render'
import { sendEmail } from '../../lib/email'
import EmailTemplate from '@/template/email'
import multer from 'multer'
import nextConnect from 'next-connect'
import { Request } from 'express'

const upload = multer({ storage: multer.memoryStorage() }).single('file')

export default nextConnect().use(upload).post(handler)

async function handler(req: Request, res: NextApiResponse) {
  const file = req.file
  const { razao, cpnj, cnaes, endereco, nome, email, tel, typeSubject } = req.body
  await sendEmail(
    {
      to: 'contato@institutohominis.org.br',
      subject: `Nova solicitação ${typeSubject}`,
      html: render(
        EmailTemplate({
          title: `Nova solicitação ${typeSubject}`,
          body: [
            { label: 'Nome', value: nome as string },
            { label: 'Email', value: email as string },
            { label: 'Telefone', value: tel as string },
            { label: 'Razão Social', value: razao as string },
            { label: 'CNPJ', value: cpnj as string },
            { label: 'CNAES', value: cnaes as string },
            { label: 'Endereço', value: endereco as string },
          ],
        })
      ),
    },
    file && [
      {
        filename: file.originalname,
        content: file.buffer,
      },
    ]
  )

  return res.status(200).json({ message: 'Email sent successfully' })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
