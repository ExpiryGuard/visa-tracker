import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ExpiryGuard - UAE Visa Tracking System",
    description: "Automated visa and Emirates ID tracking for UAE companies. Get alerts before expiry, avoid penalties, and stay MOHRE compliant effortlessly.",
    keywords: "UAE visa tracking, Emirates ID renewal, MOHRE compliance, visa alerts, Dubai business",
    authors: [{ name: "ExpiryGuard" }],
    openGraph: {
        title: "ExpiryGuard - Never Miss Another Visa Renewal",
        description: "Automated visa tracking for UAE companies. Avoid penalties and stay compliant.",
        type: "website",
        locale: "en_AE",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}