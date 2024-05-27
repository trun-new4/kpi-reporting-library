
import { KPICollectionApiResponseItem } from "@/app/interfaces/KpiCollection";
import Chart from "../presentation/charts/Chart";
import { LayoutCollectionApiResponseItem } from "@/app/interfaces/LayoutCollection";
import Pill from "../presentation/pill";

interface Props {
  collection: LayoutCollectionApiResponseItem;
}
export default function LayoutCollection({ collection }: Props) {

  const slots = Object.keys(collection.content);
  const gridClass = collection.layout.modal?.name;
  return (
    <div className="collection layout-collection">
      <h2>
        {collection.name}
        <Pill>Layout</Pill>
      </h2>
      <p>{collection.description}</p>
      <div className="tags">
        <Pill border={true}>#coms</Pill>
        <Pill border={true}>#coverage</Pill>
        <Pill border={true}>#stakeholders</Pill>
      </div>
      <div className={`preview slots ${gridClass}`}>
        {slots.map((slotName): React.ReactNode => {
          const content = collection.content[slotName];
          return (
            <div className={`slot ${slotName}`} key={slotName}>

              {content.map((content): React.ReactNode => {
                const chartRef = content.modal.visual.modal.ref;
                return (
                  <div className="content" key={content.id}>
                    <h4>{content.modal.name}</h4>
                    <p>{content.modal.description}</p>
                    <div className="visual">
                      <Chart chartReference={chartRef} />
                    </div>
                  </div>
                )
              })}

            </div>
          )
        })}
      </div>

      <div className="collection__visual">

      </div>
      <div className="collection__question">
      </div>
    </div>
  );
}