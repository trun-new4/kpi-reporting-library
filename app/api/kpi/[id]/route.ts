import { NextResponse } from 'next/server';
import Data from '@data/kpi.json';
import {
  KPIApiResponse,
  KPIApiResponseItem,
  ResponseError,
} from '@interfaces/Kpi.d';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<KPIApiResponseItem | ResponseError>> {
  const id: string = params.id;
  const data = JSON.parse(JSON.stringify(Data));
  const item: KPIApiResponseItem | undefined = data.items.find(
    (availableItem: KPIApiResponseItem) =>
      id.toString() === availableItem.id.toString()
  );

  let response: KPIApiResponseItem | ResponseError = item
    ? item
    : { message: `KPI with id: ${id} not found.` };

  return NextResponse.json(response);
}
