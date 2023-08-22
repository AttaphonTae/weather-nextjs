import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'

const inter = Noto_Sans_Thai({ subsets: ['latin'],weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className} >
        <div className='text-slate-800'>
          <NavBar title='navigation_bar' />
          {children}
        </div>
        
      </body>
    </html>
  )
}
