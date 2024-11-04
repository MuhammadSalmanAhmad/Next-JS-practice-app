import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let data = await req.json(); // Fetch JSON data from the request body
  return NextResponse.json({ data });
}

