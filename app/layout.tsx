import '@radix-ui/themes/styles.css';
import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import NavBar from './NavBar';
import {Theme} from "@radix-ui/themes";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <Theme>
            <NavBar/>
            <main className={"p-5"}>
                {children}
            </main>
        </Theme>
        </body>
        </html>
    )
}
