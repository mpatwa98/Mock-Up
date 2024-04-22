"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Bell,
	CloudDownload,
	Home,
	Info,
	PanelBottom,
	PanelTop,
	Smartphone,
	TabletSmartphone,
	Wrench,
} from "lucide-react";
import { Separator } from "./ui/separator";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const sidebarNavItems = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: <Home className="mr-1" />,
	},
	{
		title: "Push Notification",
		href: "/notifications",
		icon: <Bell className="mr-1" />,
	},
	{
		title: "Build & Download",
		href: "/download",
		icon: <CloudDownload className="mr-1" />,
	},
];

const appSettings = [
	{
		title: "App info",
		href: "/app-info",
		icon: <Info className="mr-1" />,
	},
	{
		title: "Splash Screen",
		href: "/splash-screen",
		icon: <Smartphone className="mr-1" />,
	},
	{
		title: "Onboarding Screen",
		href: "/onboarding",
		icon: <TabletSmartphone className="mr-1" />,
	},
	{
		title: "Customization",
		href: "/customization",
		icon: <Wrench className="mr-1" />,
	},
	{
		title: "Bottom Navigation",
		href: "/bottom-navigation",
		icon: <PanelBottom className="mr-1" />,
	},
	{
		title: "App bar",
		href: "/app-bar",
		icon: <PanelTop className="mr-1" />,
	},
];

export function Sidebar({ className }: SidebarProps) {
	const pathname = usePathname();

	return (
		<nav>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="space-y-1"></div>
					{sidebarNavItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								pathname === item.href
									? "bg-muted hover:bg-muted"
									: "hover:bg-transparent"
							)}
						>
							<Button variant="ghost" className="w-full justify-start">
								{item.icon}
								{item.title}
							</Button>
						</Link>
					))}
				</div>
			</div>
			<Separator className="my-4" />
			<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
				App Setting
			</h2>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="space-y-1"></div>
					{appSettings.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								pathname === item.href
									? "bg-muted hover:bg-muted"
									: "hover:bg-transparent"
							)}
						>
							<Button variant="ghost" className="w-full justify-start">
								{item.icon}
								{item.title}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
