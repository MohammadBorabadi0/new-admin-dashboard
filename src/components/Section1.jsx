// Data
import { lineChartData, lineChartDataOptions } from "../data/data";
// Components
import LineChartComponent from "./LineChartComponent";

const Section1 = ({ isOpen }) => {
  return (
    <section
      className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    >
      {lineChartDataOptions.map((chart, index) => (
        <div
          key={index}
          className="shadow-sm h-72 rounded-md flex items-center justify-center"
        >
          <LineChartComponent
            title={chart.title}
            stroke={chart.strock}
            amount={chart.amount}
            change_24h={chart.change_24h}
            data={lineChartData[`data${index + 1}`]}
          />
        </div>
      ))}
    </section>
  );
};

export default Section1;
