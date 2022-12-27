import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Wlc from "./components/Wlc";
import Cards from "./components/Cards";
import Charts from "./components/charts";
import Ionz from "./utils/ionz";
import Info from "./components/Info";

function App() {
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <div className="scrollbar-w-1 scrollbar-thumb-gray-700 scrollbar-track-gray-400  overflow-y-auto h-screen  mx-2 my-2">
          <Wlc />
          <Cards />
          <Charts />
          <Info />
        </div>
      </div>
      <Ionz />
    </div>
  );
}

export default App;
