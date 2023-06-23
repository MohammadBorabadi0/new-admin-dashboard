// Icons
import {
  BiCart,
  FiSettings,
  FiUser,
  IoAnalyticsSharp,
  RxDashboard,
  FiChevronRight,
  FiChevronLeft,
} from "../data/icons";
import { useStateContext } from "../context/StateProvider";

const data = [
  { name: "Dashboard", icon: <RxDashboard /> },
  { name: "Analytics", icon: <IoAnalyticsSharp /> },
  { name: "Customers", icon: <FiUser /> },
  { name: "Products", icon: <BiCart /> },
  { name: "Settings", icon: <FiSettings /> },
];

const Sidebar = () => {
  const { isOpen, setIsOpen } = useStateContext();

  return (
    <div
      className={`${
        isOpen ? "w-52" : "w-20"
      }  bg-purple-600 text-white mx-2 my-4 rounded-3xl relative shadow-2xl`}
    >
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-[-13px] cursor-pointer top-10 px-2 py-1 bg-gray-100 shadow-md text-black rounded-full"
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </span>
      <ul className="flex flex-col items-center gap-6 mt-20">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center font-semibold cursor-pointer hover:border-l-4 border-white w-full py-2 transition-all duration-100"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className={`${isOpen ? "block ml-3" : "hidden"}`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
