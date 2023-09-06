import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import StyledComponentsRegistry from "@/lib/AntdREgistry";
import {NavGlobal} from "@/components/nav/NavGlobal";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ko">
        <body className={`${inter.className} flex flex-row`}>
        <StyledComponentsRegistry>
            <NavGlobal></NavGlobal>
            <div className={'pl-4'}>{children}</div>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
// const Theme = React.createContext({isDarkMode: true})
