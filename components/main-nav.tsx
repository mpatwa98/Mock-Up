import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Bell,
  CircleHelp,
  CirclePlus,
  CircleUser,
  Home,
  LayoutGrid,
  Search,
} from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 border-b h-16 px-4",
        className
      )}
      {...props}
    >
      <Link href={"/"} className="ml-2 mr-auto">
        <Image src={"/logo-and-text.png"} width={100} height={50} alt="Logo" />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Search />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Home />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <LayoutGrid />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <CirclePlus />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <CircleHelp />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Bell />
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <CircleUser />
      </Link>
    </nav>
  );
}
