import { NextResponse, NextRequest } from 'next/server';
import Data from '@data/layout-collection.json';

import {
  LayoutApiResponseItemContent,
  LayoutCollectionApiResponse,
  LayoutCollectionApiResponseItem
} from '@/app/interfaces/LayoutCollection';
import { KPICollectionApiResponseItem } from '@/app/interfaces/KpiCollection';
import { LayoutApiResponseItem } from '@/app/interfaces/Layout';

async function getLayout(ref: string): Promise<LayoutApiResponseItem> {
  const response = await fetch(`${process.env.URL}/${ref}`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

async function getKPICollection(ref: string): Promise<KPICollectionApiResponseItem> {
  const response = await fetch(`${process.env.URL}/${ref}`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

async function explodeKPICollection(content: LayoutApiResponseItemContent): Promise<void> {
  const kpiCollection = await getKPICollection(content.href);
  content.modal = kpiCollection;
}

async function explodeLayout(item: LayoutCollectionApiResponseItem): Promise<void> {
  const layout = await getLayout(item.layout.href);
  item.layout.modal = layout;
}

async function explodeContent(item: LayoutCollectionApiResponseItem) {
  const slots = Object.keys(item.content)
  await Promise.all(
    slots.map(async (slotName: string) => {
      /* TODO: Refactor Nesting to Singles */
      await Promise.all(
        item.content[slotName].map(async (content) => {
          await explodeKPICollection(content);
        }))
    })
  );
}

async function explodeItems(data: LayoutCollectionApiResponse) {
  await Promise.all(
    data.items.map(async (item) => {
      await explodeContent(item);
      await explodeLayout(item);
    })
  );

  return data;
}

export async function GET(): Promise<NextResponse<LayoutCollectionApiResponse>> {
  const response: LayoutCollectionApiResponse = JSON.parse(JSON.stringify(Data));
  const data = await explodeItems(response);

  return NextResponse.json(data);
}
