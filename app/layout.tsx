import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import NavBar from './NavBar';
import {Container, Theme} from "@radix-ui/themes";

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
            <NavBar/>
            <main className={"p-5"}>
                <Container>

                    {children}
                </Container>

            </main>
        </Theme>
        </body>
        </html>
    )
}
