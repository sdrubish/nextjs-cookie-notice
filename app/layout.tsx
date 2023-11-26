import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Pacifico, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });

export const metadata: Metadata = {
	title: "Drulab.net",
	description: "Home to the mind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1b0e6eaeda7e2c8638f40b84/script.js"></script>
				{/* Your custom JavaScript code */}
				<script>
					{`
                        // Your custom JavaScript logic here
                        alert("Ok!");
                    `}
				</script>
			</Head>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-LM3GD3X5XL" strategy="lazyOnload" />
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
