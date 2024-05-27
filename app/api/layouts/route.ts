import { NextResponse, NextRequest } from 'next/server';
import Data from '@data/layouts.json';
import { LayoutApiResponse } from '@interfaces/Layout.d';

export async function GET(): Promise<NextResponse<LayoutApiResponse>> {
  const response = JSON.parse(JSON.stringify(Data));
  return NextResponse.json(response);
}
