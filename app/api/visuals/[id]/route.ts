import { NextResponse } from 'next/server';
import Data from '@data/visuals.json';
import {
  VisualsApiResponse,
  VisualsApiResponseItem,
  ResponseError,
} from '@interfaces/Visuals.d';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<VisualsApiResponseItem | ResponseError>> {
  const id: string = params.id;
  const data = JSON.parse(JSON.stringify(Data));
  const item: VisualsApiResponseItem | undefined = data.items.find(
    (availableItem: VisualsApiResponseItem) =>
      id.toString() === availableItem.id.toString()
  );

  let response: VisualsApiResponseItem | ResponseError = item
    ? item
    : { message: `Visual with id: ${id} not found.` };

  return NextResponse.json(response);
}
