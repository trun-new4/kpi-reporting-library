
import { KPICollectionApiResponseItem } from "@/app/interfaces/KpiCollection";
import Chart from "../presentation/charts/Chart";

interface Props {
  collection: KPICollectionApiResponseItem;
}
export default function KpiCollection({ collection }: Props) {

  const chartReference = collection.visual.modal.ref;
  const kpReference = collection.kpi.modal;
  return (
    <div className="collection">
      {collection.restricted &&
        <div className="collection__restricted text-center">
          <h3>You don't have access to this KPI. </h3>
          <br />
          <button>Request Access</button>
        </div>
      }
      {!collection.restricted &&
        <>
          <h2>{collection.name}</h2>
          <p>{collection.description}</p>
          <div className="collection__visual">
            <Chart chartReference={chartReference} />
          </div>
          <div className="collection__question">
            <h3>Metrics from the following</h3>
            <ul>
              {kpReference.questions.map((question: any, i: number): React.ReactNode => {
                return (
                  <li key={`question_${i}`}>
                    <h4>{question.title}</h4>
                    <p>{question.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      }
    </div>
  );
}