import { LineChart, Line, ResponsiveContainer } from "recharts";

const LineChartComponent = ({
  title,
  change_24h,
  amount,
  data,
  bgColor,
  stroke,
}) => {
  return (
    <div className={`flex flex-col justify-between rounded-xl w-full h-full ${bgColor}`}>
      <section className="flex flex-col gap-8 p-8">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-extrabold">{title}</h4>
          <span
            className={`px-2 py-1 rounded-xl text-white ${
              change_24h > 0 ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {change_24h > 0 ? `+${change_24h}` : change_24h}%
          </span>
        </div>
        <span className="font-semibold text-lg">$ {amount}</span>
      </section>
      <ResponsiveContainer
        width="100%"
        height="60%"
        className="flex items-center justify-center"
      >
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey="uv" stroke={stroke} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
