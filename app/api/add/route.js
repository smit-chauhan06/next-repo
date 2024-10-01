import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
  console.log("🚀 ~ POST ~ data:", request?.data);
  return NextResponse.json({
    success: true,
    data,
  });
}
