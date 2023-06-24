import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import StateProvider from "./context/StateProvider";

const App = () => {
  return (
    <StateProvider>
      <div className="flex gap-4 min-h-screen max-w-screen-2xl mx-auto overflow-x-hidden">
        <Sidebar />
        <Main />
      </div>
    </StateProvider>
  );
};

export default App;
