import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'

interface Props {
  body: { label: string; value: string }[]
  title: string
}

export default function EmailTemplate({ body, title }: Props) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>{title}</Text>
          <Text style={paragraph}>
            {body.map(
              (item) =>
                item.value != undefined && (
                  <>
                    <strong>{item.label}:</strong> {item.value} <br />
                  </>
                )
            )}
          </Text>
        </Container>
      </Section>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
}

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
}

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
}
