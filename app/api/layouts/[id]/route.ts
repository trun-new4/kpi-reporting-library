import { NextResponse } from 'next/server';
import Data from '@data/layouts.json';
import {
  LayoutApiResponse,
  LayoutApiResponseItem,
  ResponseError,
} from '@interfaces/Layout.d';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<LayoutApiResponseItem | ResponseError>> {
  const id: string = params.id;
  const data = JSON.parse(JSON.stringify(Data));
  const item: LayoutApiResponseItem | undefined = data.items.find(
    (availableItem: LayoutApiResponseItem) =>
      id.toString() === availableItem.id.toString()
  );

  let response: LayoutApiResponseItem | ResponseError = item
    ? item
    : { message: `Layout with id: ${id} not found.` };

  return NextResponse.json(response);
}
