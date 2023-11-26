import type { Metadata } from "next";
import Head from "next/head";
import { pacifico, roboto100, roboto300 } from "@/style/fonts";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Drulab.net",
	description: "Home!",
};

export default function Home() {
	return (
		<main className="mt-3">
			<div className="druuu-1 druuu-gradient"></div>

			<div>
				<h1 className={`${pacifico.className} logo`}>Drulab</h1>
				<h2 className={`${roboto300.className} sublogo`}>Tailored coding + Blockchain + AI + Web + Business Automation</h2>
				<h3 className={`${roboto100.className} main-text`}>Home to everything that&apos;s food for the mind in the tech space.</h3>
			</div>
		</main>
	);
}
