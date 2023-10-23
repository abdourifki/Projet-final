import Home from "./Pages/Home";
import ProgramV2 from "./Pages/Programv2";
import Contact from "./Pages/Contact";
import Reasons from "./Reasons/Reasons";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = '/Programs' element= {<ProgramV2 />}/>
        <Route exact path = '/Reasons' element = {<Reasons />} />
        <Route exact path = '/Contact' element = {<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;