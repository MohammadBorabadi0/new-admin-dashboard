import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Data
import { areaChartData } from "../data/data";
// Components
import Title from "./Title";
// Icons
import { SlOptionsVertical } from "react-icons/sl";

const AreaChartComponent = () => {
  return (
    <section className="flex flex-col gap-4 pb-2 shadow-lg rounded-lg">
      <div className="flex justify-between items-center px-4 border-b">
        <Title title="Earning This Month" />
        <SlOptionsVertical className="cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={areaChartData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis style={{ fontSize: "10px" }} dataKey="name" />
          <YAxis style={{ fontSize: "10px" }} />
          <Area type="monotone" dataKey="pv" stroke="#9334EA" fill="#9334EA" />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AreaChartComponent;
