import { NextResponse, NextRequest } from 'next/server';
import Data from '@data/visuals.json';
import { VisualsApiResponse } from '@interfaces/Visuals.d';

export async function GET(): Promise<NextResponse<VisualsApiResponse>> {
  const response = JSON.parse(JSON.stringify(Data));
  return NextResponse.json(response);
}
