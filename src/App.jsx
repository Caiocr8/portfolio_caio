import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Curriculum from "./components/Curriculum";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (

    <div className="flex flex-col h-screen overflow-hidden bg-[#121212]">
      <div className="flex-none z-50">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>


      <div className="flex-1 overflow-hidden relative">

        <Curriculum isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} footer={<Footer />} />
      </div>

    </div>
  );
}

export default App;