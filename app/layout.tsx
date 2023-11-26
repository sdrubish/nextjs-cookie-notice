import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
	title: "Drulab.net",
	description: "Home to the mind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* Has to be inside head, because beforeInteractive happens before hydration, otherwise you will get hydration errors; */}
				<Script
					id="cookieyes"
					src="https://cdn-cookieyes.com/client_data/1b0e6eaeda7e2c8638f40b84/script.js"
					strategy="beforeInteractive"
				></Script>
			</head>

			<Script id="google-gtm" src="https://www.googletagmanager.com/gtag/js?id=G-LM3GD3X5XL" strategy="lazyOnload" />
			<Script id="google-gtm-init" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
        
                    gtag("config", "G-LM3GD3X5XL", { anonymize_ip: true });
                `}
			</Script>

			<body>{children}</body>
		</html>
	);
}
