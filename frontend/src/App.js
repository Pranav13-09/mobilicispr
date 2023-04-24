import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employee/:id" element={<EmployeeDetails />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
