import { NextRequest, NextResponse } from 'next/server';

const name = 'Admin';
export async function POST(req: NextRequest) {
  return NextResponse.json({ name: name, type: 'POST' }, { status: 200 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ name: name, type: 'GET' }, { status: 200 });
}
