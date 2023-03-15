import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(
      'bg-white text-slate-900 antialiased', inter.className
    )}>
      <body className='min-h-screen bg-slate-50 antialiased p-6 sm:p-12'>

        {children}

        {/* Allow for more height on mobile devices */}
        <div className='h-10 md:hidden'></div>
      </body>
    </html>
  )
}
