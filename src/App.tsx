import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Services/:serviceName" element={<ServiceDetail />} />
        <Route path="/Quote" element={<Quote />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </>
  );
}

export default App;
