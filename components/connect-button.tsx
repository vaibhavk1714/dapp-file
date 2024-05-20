"use client";

import { chain } from "@/lib/chain";
import { client } from "@/lib/client";
import { ConnectButton } from "thirdweb/react";

export default function CustomConnect() {
	return (
		<ConnectButton
			connectButton={{
				style: {
					backgroundColor: "black",
					color: "white",
					height: "25px",
				},
				label: "Connect",
			}}
			client={client}
			chain={chain}
			theme="light"
		/>
	);
}
