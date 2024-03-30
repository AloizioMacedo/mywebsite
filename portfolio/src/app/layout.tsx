import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";

// const inter = Inter({ subsets: ["latin"] });
const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aloizio Macedo",
    description: "Portfolio of Aloizio Macedo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={albertSans.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
