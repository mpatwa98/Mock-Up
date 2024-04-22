"use client";

import { useState } from "react";

import { CloudUpload, Upload, X } from "lucide-react";

export default function ProgressUpload() {
	const [imagePreviews, setImagePreviews] = useState<string | null>(null);

	const handleImageChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const file: File | undefined = event.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.onload = (e: ProgressEvent<FileReader>) => {
				if (e.target && e.target.result) {
					setImagePreviews(e.target.result as string);
				}
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="grid grid-cols-2 gap-4">
			{/* Drag and Drop Part */}
			<div className="flex items-center justify-center w-full">
				<label
					htmlFor="dropzone-file"
					className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
				>
					<div className="flex flex-col items-center justify-center py-2">
						<CloudUpload />
						<p className="mb-2 text-sm text-gray-500">
							Drag and drop or{" "}
							<span className="font-semibold">choose file</span> to upload
						</p>
						<p className="text-xs text-gray-500">
							supported formats JPG, JPEG, PNG
						</p>
					</div>
					<input
						id="dropzone-file"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className="hidden"
					/>
				</label>
				{imagePreviews && (
					<img
						src={imagePreviews}
						alt="Preview"
						className="max-w-[200px] max-h-[200px] m-[10px]"
					/>
				)}
			</div>

			{/* Progress Part */}
			<div className=" border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
				{/* Uploading File Content */}
				<div className="mb-2 p-2 flex justify-between items-center">
					<div className="flex items-center gap-x-3">
						<span className="size-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
							<Upload />
						</span>
						<div>
							<p className="text-sm font-medium text-gray-800">
								preline-ui.xls
							</p>
							<p className="text-xs text-gray-500">7 KB</p>
						</div>
					</div>
					<div className="inline-flex items-center gap-x-2">
						<a className="text-gray-500 hover:text-gray-800" href="#">
							<X />
						</a>
					</div>
				</div>
				{/* End Uploading File Content */}
				{/* Progress Bar */}
				<div className="flex items-center gap-x-3 whitespace-nowrap pl-2 pr-4">
					<div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
						<div
							className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
							style={{ width: "1%" }}
						/>
					</div>
					<div className="w-6 text-end">
						<span className="text-sm text-gray-800">42%</span>
					</div>
				</div>
				{/* End Progress Bar */}
			</div>
		</div>
	);
}
