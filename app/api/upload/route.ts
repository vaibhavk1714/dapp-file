import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export const config = {
	api: {
		bodyParser: false,
	},
};

export async function POST(request: NextRequest) {
	try {
		const data = await request.formData();
		console.log(data);
		const file: File | null = data.get("file") as unknown as File;
		data.append("file", file);
		data.append("pinataMetadata", JSON.stringify({ name: file.name }));
		const res = await axios.post(
			"https://api.pinata.cloud/pinning/pinFileToIPFS",
			data,
			{
				headers: {
					Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
				},
			}
		);

		const ipfsHash = res.data.IpfsHash;
		return NextResponse.json({ cid: ipfsHash });
	} catch (error) {
		if (error instanceof Error) console.log(error.message);
		return NextResponse.json(
			{ error: "An error occurred while uploading the file." },
			{ status: 500 }
		);
	}
}
