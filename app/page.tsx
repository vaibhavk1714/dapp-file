"use client";

import { chain } from "@/lib/chain";
import { client } from "@/lib/client";
import { redirect, useRouter } from "next/navigation";
import { ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [inAppWallet()];

export default function Home() {
	const router = useRouter();

	return (
		<main className="flex  flex-col items-center justify-between p-24">
			<ConnectEmbed
				wallets={wallets}
				client={client}
				chain={chain}
				theme="light"
				onConnect={() => {
					//go to dashboard page
					router.push("/dashboard");
				}}
			/>
		</main>
	);
}
