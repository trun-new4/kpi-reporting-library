import Modal from "@/app/components/presentation/modal";
import KpiCollection from "@/app/components/ui/KpiCollection";
import { KPICollectionApiResponseItem } from "@/app/interfaces/KpiCollection";

async function getKPICollection(id: string): Promise<KPICollectionApiResponseItem> {
  const response = await fetch(`http://localhost:3000/api/kpi-collection/${id}`, {
    next: { revalidate: 60 },
  });
  return response.json();
}

export default async function KPIItem({ params }: { params: { id: string } }) {
  const id = params.id;
  const kpiCollection = await getKPICollection(id);
  return (
    <Modal closeUrl={'/kpi'}>
      <KpiCollection collection={kpiCollection} />
    </Modal>
  );
}
