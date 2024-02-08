import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from 'react';

import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next Anime",
    description: "Anime discovery, done with Next.JS 14!",
};

export default function RootLayout(properties: PropsWithChildren) {

    const { children } = properties;

    return (
        <html lang="en">
            <body className={inter.className}>
                { children }
            </body>
        </html>
    );
}