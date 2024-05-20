import { useStorageUpload } from "@thirdweb-dev/react";

export default function Page() {
	const { mutateAsync: upload, isLoading } = useStorageUpload();

	async function uploadData(e: any) {
		const filesToUpload = e.target.files[0];
		const uris = await upload({ data: filesToUpload });
		console.log(uris);
	}

	return (
		<div>
			<input
				type="file"
				onChange={uploadData}
			/>
		</div>
	);
}
