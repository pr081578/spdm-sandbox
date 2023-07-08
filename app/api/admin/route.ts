import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { props } = body;

  return NextResponse.json(props);
}
