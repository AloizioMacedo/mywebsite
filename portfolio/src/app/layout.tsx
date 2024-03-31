import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import SpeedDial from "./components/SpeedDial";

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
                <SpeedDial />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "small",
                        opacity: 0.2,
                    }}
                >
                    <a
                        href="https://www.flaticon.com/free-icons/letter-a"
                        title="letter a icons"
                    >
                        Letter a icons created by Md Tanvirul Haque - Flaticon
                    </a>
                </div>
            </body>
        </html>
    );
}
