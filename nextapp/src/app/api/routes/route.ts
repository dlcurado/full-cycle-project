import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


// export async function GET(request: NextRequest) {
//   const response = await fetch(`http://host.docker.internal:3000/routes`, {
//     next: {
//       revalidate: 60, // Raramenete muda. Pode ser um cache bem grande 60
//       tags: ["routes"],
//     }
//   });
//   return NextResponse.json(await response.json());
// }


// export async function POST(request: NextRequest) {
//   const response = await fetch(`http://host.docker.internal:3000/routes`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.parse(await request.json()),
//   });
//   revalidateTag("routes");
//   return NextResponse.json(await response.json());
// }