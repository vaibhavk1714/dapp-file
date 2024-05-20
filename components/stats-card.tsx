import { Activity, CreditCard, Database, File } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function StatsCard() {
	return (
		<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
			<Card x-chunk="dashboard-01-chunk-0">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Total Files Uploaded
					</CardTitle>
					<File className="h-4 w-4 text-muted-foreground shadow-md" />
				</CardHeader>
				<CardContent>
					<div className="text-4xl font-bold">50</div>
				</CardContent>
			</Card>
			<Card x-chunk="dashboard-01-chunk-1">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Storage utilised
					</CardTitle>
					<Database className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">1.23</div>
					<p className="text-xs text-muted-foreground">out of 3 GB</p>
				</CardContent>
			</Card>
			<Card x-chunk="dashboard-01-chunk-2">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Amount paid
					</CardTitle>
					<CreditCard className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">$550</div>
					<p className="text-xs text-muted-foreground">0.19 ETH</p>
				</CardContent>
			</Card>
			<Card x-chunk="dashboard-01-chunk-3">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Current balance
					</CardTitle>
					<Activity className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">$623</div>
					<p className="text-xs text-muted-foreground">0.21 ETH</p>
				</CardContent>
			</Card>
		</div>
	);
}
