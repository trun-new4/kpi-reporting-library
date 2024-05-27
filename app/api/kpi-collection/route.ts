import { NextResponse, NextRequest } from 'next/server';
import Data from '@data/kpi-collection.json';
import {
  KPICollectionApiResponse,
  KPICollectionApiResponseItem,
} from '@interfaces/KpiCollection.d';
import {
  KPIApiResponse,
  KPIApiResponseItem,
  ResponseError,
} from '@interfaces/Kpi.d';
import { VisualsApiResponseItem } from '@interfaces/Visuals.d';

async function getKPI(ref: string): Promise<KPIApiResponseItem> {
  const response = await fetch(`http://localhost:3000/${ref}`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

async function getVisual(ref: string): Promise<VisualsApiResponseItem> {
  const response = await fetch(`http://localhost:3000/${ref}`, {
    next: { revalidate: 60 },
  });
  const data = response.json();
  return data;
}

async function explodeKPI(item: KPICollectionApiResponseItem): Promise<void> {
  const kpiModal = await getKPI(item.kpi.href);
  const visualModal = await getVisual(item.visual.href);

  /* Explode Refs: TODO - use Promise.all */
  item.kpi.modal = kpiModal;
  item.visual.modal = visualModal;
}

async function explodeKPIs(data: KPICollectionApiResponse) {
  await Promise.all(
    data.items.map(async (item) => {
      await explodeKPI(item);
    })
  );

  return data;
}

export async function GET(): Promise<NextResponse<KPICollectionApiResponse>> {
  const response = JSON.parse(JSON.stringify(Data));

  const data = await explodeKPIs(response);
  return NextResponse.json(data);
}
