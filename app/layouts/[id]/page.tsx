import Modal from "@/app/components/presentation/modal";
import LayoutCollection from "@/app/components/ui/LayoutCollection";
import { LayoutCollectionApiResponseItem } from "@/app/interfaces/LayoutCollection";

async function getLayoutCollection(id: string): Promise<LayoutCollectionApiResponseItem> {
  const response = await fetch(`${process.env.URL}/api/layout-collection/${id}`, {
    next: { revalidate: 60 },
  });
  return response.json();
}

export default async function LayoutItem({ params }: { params: { id: string } }) {
  const id = params.id;
  const layoutCollection = await getLayoutCollection(id);
  return (
    <Modal closeUrl={'/layouts'}>
      <LayoutCollection collection={layoutCollection} />
    </Modal>
  );
}
