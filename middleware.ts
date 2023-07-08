import { NextRequest, NextResponse, userAgent } from 'next/server';
import { redis } from '@libs/redis';

export function middleware(request: NextRequest) {
  const time = Date.now();
  const timeStr = new Date(time).toLocaleString();
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  const logData = {
    time: timeStr,
    url: request.url,
    ip: request.ip,
    ua: viewport,
    geo: request.geo,
    method: request.method,
  };
  //console.log(logData);
  let label = null;
  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
    label = 'about';
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
    label = 'dashboard';
  }
  if (label) {
    redis.lpush(label as string, logData);
  }
}
