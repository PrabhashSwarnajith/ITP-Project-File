import {Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Medicine from "../../Pages/Medicine";
import Order from "../../Pages/Order";
import AddMedicine from "../../Pages/AddMedicine";
import AddOrder from "../../Pages/Order/addOder";
import EditM from "../../Pages/AddMedicine/editM";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/medicine" element={<Medicine />}></Route>
      <Route path="/addmedicine" element={<AddMedicine />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/editM/:drugId" element={<EditM/>}> </Route>
      <Route path="/addOder" element={<AddOrder/>}> </Route>
    </Routes>
  );
}
export default AppRoutes;
