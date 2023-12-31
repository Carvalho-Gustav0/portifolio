import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import { Header } from '../components/header';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Sobre mim',
  authors: [{ name: 'Gustavo Carvalho da Silva' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
