import './globals.css'
import { Lora } from 'next/font/google'

const inter = Lora({ subsets: ['latin'], weight: ["700", "400", "500"] })

export const metadata = {
  title: 'programmers dont talk to females',
  description: 'We don\'t.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
