import Card from "../presentation/card/Card";
import { KPIApiResponseItem } from "@/app/interfaces/Kpi.d";
import CardItem from "../presentation/card/CardItem";
import Image from "next/image";

interface Props {
  items: KPIApiResponseItem[]
}
export default function Kpis({ items }: Props) {
  return (
    <article className="page">
      <h2>KPI's</h2>
      <p>Available KPI's </p>
      <div className="cards">
        {items.map((item: KPIApiResponseItem, i): React.ReactNode => {
          return (
            <Card display="featured" key={`card_${i}`}>
              <CardItem
                title={item.name}
              />
              <ul>
                {item.questions.map((question: { title: string, description: string }, iq: number): React.ReactNode => {
                  return (
                    <li key={`question_${iq}`}>
                      <h4>{question.title}</h4>
                      <p>{question.description}</p>
                    </li>
                  )
                })}
              </ul>
              <div className="kpi-charts">
                <h5>Charts Available</h5>
                <div className="charts-available">

                  {item.visuals.map((visual, i): React.ReactNode => {
                    return (
                      <div className="chart-available" key={`available-chart${i}`}>
                        <Image
                          alt={visual.name}
                          src={visual.preview}
                          width={300}
                          height={300}
                          style={{ width: '100%', height: '100%' }} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </article>
  );
}