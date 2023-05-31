import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '800']
})

export const metadata = {
  title: 'To float',
  description: 'Your Imagination Is Your Only Limit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
