import { useStateContext } from "../context/StateProvider";

// Icons
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Main = () => {
  const { isOpen } = useStateContext();

  return (
    <main
      className={`min-h-screen w-full ${
        isOpen ? "sm:ml-[235px]" : "sm:ml-[110px]"
      }`}
    >
      <nav className="flex  items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg lg:text-2xl font-extrabold">
          Hello, James!
          <img src="/img/hand.png" alt="hand" className="w-8" />
        </h2>
        <div className="flex items-center gap-2">
          <IoNotificationsOutline className="cursor-pointer text-xl md:text-2xl" />
          <AiOutlineMessage className="cursor-pointer text-xl md:text-2xl" />
          <img
            src="/img/avatar.jpg"
            alt="avatar"
            className="cursor-pointer w-10 h-10 object-cover rounded-full"
          />
        </div>
      </nav>
      <main className="mx-2">
        <Section1 isOpen={isOpen} />
        <Section2 />
        <Section3 />
      </main>
    </main>
  );
};

export default Main;
