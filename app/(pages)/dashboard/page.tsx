"use client";

import { Navbar } from "@/components/navbar";
import StatsCard from "@/components/stats-card";
import TableCard from "@/components/main-dash-card";
import SideCard from "@/components/side-card";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { redirect } from "next/navigation";
import { prepareContractCall, resolveMethod } from "thirdweb";

export default function Dashboard() {
	const account = useActiveAccount();

	if (!account) {
		redirect("/");
	}

	return (
		<div className="flex min-h-screen w-full flex-col">
			<Navbar />
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<StatsCard />
				<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
					<TableCard />
					<SideCard />
				</div>
			</main>
		</div>
	);
}
