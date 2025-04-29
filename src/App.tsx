import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Quote" element={<Quote />}></Route>
      </Routes>
    </>
  );
}

export default App;
