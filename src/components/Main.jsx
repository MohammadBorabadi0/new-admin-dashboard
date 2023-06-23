import { useStateContext } from "../context/StateProvider";

// Data
import { LineChartData, chartData } from "../data/data";

// Icons
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";
import LineChartComponent from "./LineChartComponent";

const Main = () => {
  const { isOpen, setIsOpen } = useStateContext();

  return (
    <main className={`min-h-screen w-full my-8 mx-2`}>
      <nav className="flex justify-between items-center">
        <h2 className="text-lg lg:text-2xl font-extrabold">Hello, James!</h2>
        <div className="flex items-center gap-2">
          <IoNotificationsOutline size={25} className="cursor-pointer" />
          <AiOutlineMessage size={25} className="cursor-pointer" />
          <img
            src="/img/avatar.jpg"
            alt="avatar"
            className="cursor-pointer w-10 h-10 object-cover rounded-full"
          />
        </div>
      </nav>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
        {chartData.map((chart, index) => (
          <div
            key={index}
            className="shadow-sm h-72 rounded-md flex items-center justify-center"
          >
            <LineChartComponent
              title={chart.title}
              bgColor={chart.bgColor}
              stroke={chart.strock}
              amount={chart.amount}
              change_24h={chart.change_24h}
              data={LineChartData[`data${index + 1}`]}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
