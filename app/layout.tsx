import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import NavBar from './NavBar';

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NavBar/>

        <main>

            {children}
        </main>
        </body>
        </html>
    )
}
