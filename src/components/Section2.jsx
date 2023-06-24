import AreaChartComponent from "./AreaChartComponent";

const Section2 = () => {
  return (
    <section className="grid md:grid-cols-3 md:grid-rows-2 my-6 gap-3">
      <section className="flex md:flex-col gap-4 md:col-span-1 md:row-span-2">
        <div className="flex flex-col justify-between col-span-1 rounded-lg shadow-lg overflow-hidden h-40 p-6 text-2xl">
          <h4 className="font-extrabold">New Customers</h4>
          <div className="flex justify-between items-center">
            <span>54</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +18.7%
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between col-span-1 rounded-lg shadow-lg overflow-hidden h-40 p-6 text-2xl">
          <h4 className="font-extrabold">Invoices Overduce</h4>
          <div className="flex justify-between items-center">
            <span>6</span>
            <span className="text-lg bg-green-600 text-white px-2 py-1 rounded-lg">
              +2.4%
            </span>
          </div>
        </div>
      </section>
      <div className="col-span-2 row-span-2 rounded-lg py-2">
        <AreaChartComponent />
      </div>
    </section>
  );
};

export default Section2;
