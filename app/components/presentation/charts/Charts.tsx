import LineChartComponent from '@ux/charts/LineChart';
import PieChartComponent from '@ux/charts/PieChart';
import BarChartComponent from '@ux/charts/BarChart';

export default function Charts() {
  return (
    <div>
      <LineChartComponent />
      <PieChartComponent />
      <BarChartComponent />
    </div>
  );
}
