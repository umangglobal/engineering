
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
 return NextResponse.json({
  debug: "UPDATED_ROUTE_V3",
});
    

   
}
