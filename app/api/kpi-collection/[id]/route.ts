import { NextResponse } from 'next/server';
import {
  KPICollectionApiResponse,
  KPICollectionApiResponseItem,
  ResponseError,
} from '@interfaces/KpiCollection.d';

async function getKPICollections(): Promise<KPICollectionApiResponse> {
  const response = await fetch(`${process.env.URL}/api/kpi-collection`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<KPICollectionApiResponseItem | ResponseError>> {
  const id: string = params.id;

  const data = await getKPICollections();
  const item: KPICollectionApiResponseItem | undefined = data.items.find(
    (availableItem: KPICollectionApiResponseItem) =>
      id.toString() === availableItem.id.toString()
  );

  let response: KPICollectionApiResponseItem | ResponseError = item
    ? item
    : { message: `KPI Collection with id: ${id} not found.` };

  return NextResponse.json(response);
}
