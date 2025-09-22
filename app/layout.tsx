import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeRegistry from './ThemeRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime Fóbicos',
  description: 'Anime Fóbicos, es una pagina donde podrás ver como el contenido de anime que deseas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}