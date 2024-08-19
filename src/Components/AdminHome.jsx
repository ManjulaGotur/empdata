import Navbar from "./Navbar";
import Content from "./Content";
import EmployeeData from "./EmployeeData";
import { Routes, Route } from "react-router-dom";
import CreateEmp from "./CreateEmp";




const AdminHome = () => {
    
   return(
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/create" element={<CreateEmp/>} />
            <Route path="/employee" element={<EmployeeData/>}/>

        </Routes>
    </div>
   )
}
 
export default AdminHome;