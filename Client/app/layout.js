import './globals.css'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({ subsets: ['latin'], weight: ["700", "400", "500"] })

export const metadata = {
  title: 'Redirectify',
  description: 'Instantly create a link shortner!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
