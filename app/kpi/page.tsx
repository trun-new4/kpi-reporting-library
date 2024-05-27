import KpiCollections from '../components/ui/KpiCollections';
import { KPICollectionApiResponse } from '@interfaces/KpiCollection.d';
import { KPIApiResponse } from '@interfaces/Kpi.d';
import Kpis from '../components/ui/Kpis';

async function getKPICollections(): Promise<KPICollectionApiResponse> {
  const response = await fetch('http://localhost:3000/api/kpi-collection', {
    next: { revalidate: 60 },
  });
  return response.json();
}

async function getKPIs(): Promise<KPIApiResponse> {
  const response = await fetch('http://localhost:3000/api/kpi', {
    next: { revalidate: 60 },
  });
  return response.json();
}

export default async function KPIPage() {
  /* Show both Kpis and KpiCollections
    TODO: use Promise.all || Roll it up in a new endpoint 
  */
  const kpiCollections: KPICollectionApiResponse = await getKPICollections();
  const kpis: KPIApiResponse = await getKPIs();
  return (
    <>
      <KpiCollections items={kpiCollections.items}></KpiCollections>
      <hr />
      <Kpis items={kpis.items}></Kpis>
    </>
  );
}
