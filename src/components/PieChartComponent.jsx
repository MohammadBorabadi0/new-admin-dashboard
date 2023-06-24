import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { pieChartData } from "../data/data";

const PieChartComponent = () => {
  return (
    <section>
      <ResponsiveContainer width="50%" height="50%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default PieChartComponent;
