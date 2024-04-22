import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "@/components/form";
import MockUp from "@/components/mock-up";

export default function Home() {
	return (
		<>
			<div>
				<div className="lg:border-l">
					<div className="h-full px-4 py-6 lg:px-8">
						<h1 className="text-xl font-semibold m-3 p-0.5">
							Onboarding Screen
						</h1>
						<Tabs defaultValue="first" className="h-full space-y-6">
							<div className="space-between flex items-center">
								<TabsList>
									<TabsTrigger value="first" className="relative">
										First onboarding screen
									</TabsTrigger>
									<TabsTrigger value="second">
										Second onboarding screen
									</TabsTrigger>
									<TabsTrigger value="third">
										Third onboarding screen
									</TabsTrigger>
								</TabsList>
							</div>
							<TabsContent
								value="first"
								className="border-none p-10 outline outline-outlineShadowColor rounded-xl outline-1 shadow-sm"
							>
								<div className="grid grid-cols-2 gap-5">
									<ProfileForm />
									<MockUp />
								</div>
							</TabsContent>
							<TabsContent
								value="second"
								className="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<h2 className="text-2xl font-semibold tracking-tight">
											New Episodes
										</h2>
										<p className="text-sm text-muted-foreground">
											Your favorite podcasts. Updated daily.
										</p>
									</div>
								</div>
								<Separator className="my-4" />
							</TabsContent>
							<TabsContent
								value="third"
								className="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<h2 className="text-2xl font-semibold tracking-tight">
											New Episodes
										</h2>
										<p className="text-sm text-muted-foreground">
											Your favorite podcasts. Updated daily.
										</p>
									</div>
								</div>
								<Separator className="my-4" />
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</>
	);
}
