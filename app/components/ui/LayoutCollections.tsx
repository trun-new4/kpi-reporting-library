import Card from "../presentation/card/Card";
import CardItem from "../presentation/card/CardItem";
import { LayoutCollectionApiResponseItem } from "@/app/interfaces/LayoutCollection";

interface Props {
  items: LayoutCollectionApiResponseItem[]
}
export default function LayoutCollections({ items }: Props) {
  return (
    <article className="page">
      <h2>Layout Collections</h2>
      <p>Available Layout collections </p>
      <div className="cards">
        {items.map((item: LayoutCollectionApiResponseItem, i): React.ReactNode => {
          return (
            <Card display="featured" key={`layout_${i}`}>
              <CardItem
                title={item.name}
                subtitle={item.description}
                href={`/layouts/${item.id}`}
              />
            </Card>
          )
        })}
      </div>
    </article>
  );
}