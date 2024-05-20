"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowBigLeftDash } from "lucide-react";

export function BackButton() {
	const router = useRouter();
	const handleClick = () => {
		router.replace("/dashboard");
	};

	return (
		<Button
			onClick={handleClick}
			className="rounded-full p-2 z-10 bg-white text-black
            dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white 
            dark:hover:text-black border-black/40 border-2 transition mb-10"
		>
			<ArrowBigLeftDash />
		</Button>
	);
}
