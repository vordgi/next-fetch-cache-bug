import { NextResponse } from 'next/server'

let requestNumber = 0;

export async function GET(req: Request) {
  req.headers;

  let content = 'default-data';
  if (requestNumber >= 2) {
    content = Array.from(new Array(3 * 1024 * 1024)).map(() => 1).join('');
  }
  console.log('Request number: ', requestNumber);
  console.log('Load data, data length: ', content.length);

  requestNumber += 1;
  return NextResponse.json({ content });
}
