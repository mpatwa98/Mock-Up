"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ProgressUpload from "@/components/ui/progress-upload";
import ColorPicker from "@/components/ui/color-picker";

const profileFormSchema = z.object({
	file: z.instanceof(FileList).optional(),
	description: z.string().max(160).min(4),
	title: z.string().max(50).min(1, {
		message: "Title must be at least 1 characters.",
	}),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
	description: "I own a computer.",
};

export function ProfileForm() {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: "onChange",
	});

	function onSubmit(data: ProfileFormValues) {
		const titleValue = data.title;
		console.log(titleValue);
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	const fileRef = form.register("file");

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormItem>
					<div className="flex items-center space-x-2 w-1/2">
						<Label htmlFor="airplane-mode" className="mr-auto">
							Show this onboarding screen
						</Label>
						<Switch id="airplane-mode" className="bg-primaryText" />
					</div>
				</FormItem>
				<Separator className="my-4" />
				<ProgressUpload />
				<ColorPicker />
				<Separator className="my-4" />
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your title here"
									{...field}
									className="w-1/2"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Separator className="my-4" />
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Description goes here..."
									className="resize-none w-1/2"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Separator className="my-4" />
				<FormItem>
					<FormLabel>Status bar</FormLabel>
					<div className="flex items-center space-x-2 w-1/2">
						<Label htmlFor="airplane-mode" className="mr-auto">
							Use default status bar
						</Label>
						<Switch id="airplane-mode" className="bg-primaryText" />
					</div>
				</FormItem>
				<Button type="submit" className="w-1/2 bg-primaryText">
					Save Changes
				</Button>
			</form>
		</Form>
	);
}
