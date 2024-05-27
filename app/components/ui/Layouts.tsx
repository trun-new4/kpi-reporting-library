import { LayoutApiResponseItem } from "@/app/interfaces/Layout";
import Card from "../presentation/card/Card";
import CardItem from "../presentation/card/CardItem";

interface Props {
  items: LayoutApiResponseItem[]
}
export default function Layouts({ items }: Props) {
  return (
    <article className="page">
      <h2>Presentation Grids</h2>
      <p>Available Layouts </p>
      <div className="cards cards-thumbnails">
        {items.map((item: LayoutApiResponseItem, i): React.ReactNode => {
          return (
            <Card display="featured" key={`layout_${i}`}>
              <CardItem
                title={item.name}
                image={`/layout/${item.thumbnail}.svg`}
                href={`/kpi/${item.id}`}
              />
            </Card>
          )
        })}
      </div>
    </article>
  );
}