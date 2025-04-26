import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
})

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Warboys Table Tennis Club',
    description:
        'Join Warboys TTC, the friendly local table tennis club in Warboys, Huntingdonshire! Open to all ages and abilities, we offer social play, coaching, and competitive matches. Discover your local table tennis community today.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="nIaXJjpnScxqjlOglKNSfFJoP-MKdusxRt_nRhULhIg"
                />
            </head>
            <body
                className={`${montserrat.variable} ${openSans.variable} antialiased bg-light`}
            >
                {children}
            </body>
        </html>
    )
}
