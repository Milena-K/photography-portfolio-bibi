import { UploadcareSimpleAuthSchema, listOfFiles } from "@uploadcare/rest-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
        publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!,
        secretKey: process.env.UPLOADCARE_SECRET_KEY!
    });

    const result = await listOfFiles(
        {},
        { authSchema: uploadcareSimpleAuthSchema }
    )
    res.status(200).json({ pictures: result.results })
}
