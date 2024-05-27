'use client';
import dynamic from 'next/dynamic';

interface Props {
  chartReference: 'LineChart' | 'PieChart' | 'BarChart'
}

const loadDynamic = (ref: string) => dynamic(() => import(`./${ref}`), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Chart({ chartReference }: Props) {
  const ChartToView = loadDynamic(chartReference);
  return (
    <div>
      <ChartToView />
    </div>
  );
}
