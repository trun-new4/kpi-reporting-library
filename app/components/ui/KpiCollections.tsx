import Card from "../presentation/card/Card";
import { KPICollectionApiResponseItem } from "@/app/interfaces/KpiCollection";
import CardItem from "../presentation/card/CardItem";

interface Props {
  items: KPICollectionApiResponseItem[]
}
export default function KpiCollections({ items }: Props) {
  return (
    <article className="page">
      <h2>KPI Collections</h2>
      <p>Available KPI collections </p>
      <div className="cards">
        {items.map((item: KPICollectionApiResponseItem, i): React.ReactNode => {
          return (
            <Card display="featured" key={`card_${i}`}>
              <CardItem
                title={item.name}
                subtitle={item.description}
                image={`${item.visual.modal.preview}`}
                href={`/kpi/${item.id}`}
              />
            </Card>
          )
        })}
      </div>
    </article>
  );
}