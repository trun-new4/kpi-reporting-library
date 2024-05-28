import Image from 'next/image';
import LayoutCollections from '../components/ui/LayoutCollections';
import Layouts from '../components/ui/Layouts';
async function getLayouts() {
  const response = await fetch(`${process.env.URL}/api/layouts`, {
    next: { revalidate: 60 },
  });
  return response.json();
}

async function getLayoutCollections() {
  const response = await fetch(`${process.env.URL}/api/layout-collection`, {
    next: { revalidate: 60 },
  });
  return response.json();
}

export default async function layoutsPage() {
  const layouts = await getLayouts();
  const layoutCollections = await getLayoutCollections();

  return (
    <>
      <LayoutCollections items={layoutCollections.items}></LayoutCollections>
      <Layouts items={layouts.items}></Layouts>
    </>
  );
}
