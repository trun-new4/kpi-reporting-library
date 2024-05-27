import { NextResponse, NextRequest } from 'next/server';
import Data from '@data/kpi.json';
import { KPIApiResponse } from '@interfaces/Kpi.d';

export async function GET(): Promise<NextResponse<KPIApiResponse>> {
  const response = JSON.parse(JSON.stringify(Data));
  return NextResponse.json(response);
}
