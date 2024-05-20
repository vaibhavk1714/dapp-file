"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Page() {
	const [hash, setHash] = useState("");
	const inputHash = useRef(null);

	const handleChange = (e: any) => {
		setHash(e.target.value);
		console.log(process.env.PINATA_ACCESS_TOKEN);
	};

	return (
		<>
			<div className="flex flex-col gap-y-8 justify-center ">
				<h1 className="text-4xl font-bold">Download a file</h1>
				<p>Download a file from the IPFS network</p>
			</div>
			<Input
				type="text"
				id="cid"
				ref={inputHash}
				onChange={handleChange}
				placeholder="Enter cid"
				className=""
			/>
			<Button onClick={() => {}}>See file</Button>
			{hash && (
				<Image
					src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/${hash}?pinataGatewayToken=${process.env.PINATA_ACCESS_TOKEN}`}
					alt="image from ipfs"
					width={500}
					height={500}
				/>
			)}
		</>
	);
}
