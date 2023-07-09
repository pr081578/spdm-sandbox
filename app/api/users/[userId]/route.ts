import { NextRequest, NextResponse } from 'next/server';

const name = 'User';
export async function POST(req: NextRequest) {
  return NextResponse.json({ name: name, type: 'POST' }, { status: 200 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      name: name,
      type: 'GET',
      url: req.url,
      id: Number(req.url.split('/')[5]),
    },
    { status: 200 }
  );
}
