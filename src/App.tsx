import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./ScrollToTop";
import Roofing from "./pages/Roofing";
import Windows from "./pages/Windows";
import Siding from "./pages/Siding";
import DecksAndPatios from "./pages/DecksAndPatios";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="" element={<Landing />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Quote" element={<Quote />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Roofing" element={<Roofing />}></Route>
          <Route path="/Windows" element={<Windows />}></Route>
          <Route path="/Siding" element={<Siding />}></Route>
          <Route path="/DecksAndPatios" element={<DecksAndPatios />}></Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
