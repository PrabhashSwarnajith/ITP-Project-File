import {Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import AddTest from "../../Pages/Lab_Test/addTest.js";
import LabTest from "../../Pages/Lab_Test";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/labTest" element={<LabTest />}></Route>
      <Route path="/addTest" element={<AddTest/>}> </Route>
    </Routes>
  );
}
export default AppRoutes;
