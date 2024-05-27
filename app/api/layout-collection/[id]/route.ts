import { NextResponse } from 'next/server';
import {
  LayoutCollectionApiResponse,
  LayoutCollectionApiResponseItem,
  ResponseError
} from '@/app/interfaces/LayoutCollection';

async function getLayoutCollections(): Promise<LayoutCollectionApiResponse> {
  const response = await fetch(`http://localhost:3000/api/layout-collection`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<LayoutCollectionApiResponseItem | ResponseError>> {
  const id: string = params.id;

  const data = await getLayoutCollections();
  const item: LayoutCollectionApiResponseItem | undefined = data.items.find(
    (availableItem: LayoutCollectionApiResponseItem) =>
      id.toString() === availableItem.id.toString()
  );

  let response: LayoutCollectionApiResponseItem | ResponseError = item
    ? item
    : { message: `KPI Collection with id: ${id} not found.` };

  return NextResponse.json(response);
}
