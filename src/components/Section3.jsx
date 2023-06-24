// Icons
import { ordersData } from "../data/data";

const Section3 = () => {
  return (
    <section className="grid grid-cols-3 gap-2 w-full">
      <div className="flex flex-col col-span-2 shadow-lg px-4 py-2 rounded-lg">
        <div className="flex justify-between items-center font-semibold border-b py-1">
          <h2 className="text-lg">Last Orders</h2>
          <span className="text-gray-400 text-sm">View All Orders</span>
        </div>
        <div>
          {ordersData.slice(0, 5).map((order) => (
            <div
              key={order.id}
              className={`grid grid-cols-4 font-semibold px-2 py-4 rounded-md ${
                order.id % 2 === 0 ? "bg-purple-100" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={order.image}
                  alt={`${order.name} image`}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <h4>{order.name}</h4>
              </div>
              <span>${order.orderAmount}</span>
              <span
                className={
                  order.status === "delivered"
                    ? "text-green-600"
                    : order.status === "un delivered"
                    ? "text-red-600"
                    : ""
                }
              >
                {order.status}
              </span>
              <span>{order.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-lg col-span-1 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center font-semibold border-b px-4 py-2">
          <h2 className="text-lg">Recent Sales</h2>
          <span className="text-gray-400 text-sm">See All</span>
        </div>
        <div className="flex flex-col gap-3 text-sm py-4">
          {ordersData
            .slice(0, 5)
            .reverse()
            .map((data) => (
              <div key={data.id} className="flex justify-between items-center mx-2 bg-gray-100 rounded-3xl px-4 py-2 font-semibold">
                <div className="flex items-center gap-3">
                  <img
                    src={data.image}
                    alt={`${data.name} image`}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h4>{data.name}</h4>
                    <span className="text-gray-500">{data.dateBought} Minutes Ago</span>
                  </div>
                </div>
                <div>+${data.bought}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
