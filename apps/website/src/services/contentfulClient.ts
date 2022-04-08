import { createClient } from "contentful";

export const client = createClient({
    space: process.env["NX_SPACE_ID"] as string,
    accessToken: process.env["NX_ACCESS_TOKEN"] as string,
    environment: process.env["NX_ENVIRONMENT"] as string
});
